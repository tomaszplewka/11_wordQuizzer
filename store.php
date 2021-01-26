<?php
require('core/init.php');
// Use namespaces
use WordQuizzer\Database;
// Decode json data
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($contentType === "application/json") {
    // Initialize db
    $db = new Database();
    // Initialize vars
    $quizName = $quizType = $quizAnswers = $quizQuestions = $userID = '';
    $quizName_err = $quizType_err = $quizAnswers_err = $quizQuestions_err = $db_err = '';
    $output = [
        "data" => ["php_error" => false, "msg" => '', "field" => "store-data"],
        "db" => ["php_error" => false, "msg" => '', "field" => "store-db"],
        "session" => ["loggedIn" => true, "msg" => ''],
        "snapshot" => []
    ];
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    // Decode
    $decoded = json_decode($content, true);
    //If json_decode failed, the JSON is invalid.
    if (is_array($decoded)) {
        // Begin transaction
        $db->transactionStart();
        try {
            $index = 0;
            $index2 = 0;
            $sqlQ = "INSERT INTO questions (question_ID, quiz_ID, question, word) VALUES ";
            $sqlA = "INSERT INTO answers (question_ID, answer, question_order, is_correct) VALUES ";
            $user_ID = $_SESSION["user_id"];
            $quiz_ID = $decoded["quizID"];
            // Number of asnwers
            $numOfQs = (int) $decoded["answersTotal"];
            foreach ($decoded["questions"] as $word => $question) {
                // Insert question
                $q_number = ":q_" . ($index + 1);
                $question_num = ":ques_" . ($index + 1);
                $word_num = ":w_" . ($index + 1);
                $sqlQ .= "({$q_number}, :quiz_id, {$question_num}, {$word_num}),";
                $data = (array) $question;
                // Question has been added -- add answers
                $order = ":q_order_" . ($index + 1);
                $bindParam = ":a_" . ($index2 + 1);
                $sqlA .= "({$q_number}, {$bindParam}, {$order}, :correct),";
                $index++;
                $index2++;
                for ($i = 1; $i < $numOfQs; $i++) {
                    $bindParam = ":a_" . ($index2 + 1);
                    $sqlA .= "({$q_number}, {$bindParam}, {$order}, :not_correct),";
                    $index2++;
                }
            }
            $sqlQ = rtrim($sqlQ, ',');
            if ($db->queryDB($sqlQ)) {
                // Bind params in a loop
                $index = 0;
                $index2 = 0;
                foreach ($decoded["questions"] as $word => $question) {
                    $q_number = ":q_" . ($index + 1);
                    $question_num = ":ques_" . ($index + 1);
                    $word_num = ":w_" . ($index + 1);
                    $q_ID = "Q" . $quiz_ID  . $user_ID . ($index + 1);
                    $data = (array) $question;
                    $db->bind($q_number, $q_ID);
                    $db->bind(":quiz_id", $quiz_ID);
                    $db->bind($question_num, $data["question"]);
                    $db->bind($word_num, $word);
                    $index++;
                    $index2++;
                }
                // Attempt to execute the query
                if ($db->execute()) {
                    $sqlA = rtrim($sqlA, ',');
                    if ($db->queryDB($sqlA)) {
                        // Bind params
                        $index = 0;
                        $index2 = 0;
                        $index3 = 0;
                        foreach ($decoded["questions"] as $word => $question) {
                            $q_number = ":q_" . ($index + 1);
                            $q_ID = "Q" . $quiz_ID  . $user_ID . ($index + 1);
                            $bindParam = ":a_" . ($index2 + 1);
                            $data = (array) $question;
                            $order = ":q_order_" . ($index + 1);
                            $db->bind($q_number, $q_ID);
                            $db->bind($bindParam, $data["correctAnswer"]);
                            $db->bind($order, ($index + 1));
                            $db->bind(":correct", '1');
                            $index2++;
                            for ($i = 1; $i < $numOfQs; $i++) {
                                $bindParam = ":a_" . ($index2 + 1);
                                $db->bind($bindParam, $decoded["answers"][$index3]);
                                $db->bind(":not_correct", '0');
                                $index2++;
                                $index3++;
                            }
                            $index++;
                        }
                        if ($db->execute()) {
                            $output["data"]["msg"] = "Questions and answers added.";
                            $sql = "SELECT * FROM quiz WHERE user_id = :id ORDER BY created_at DESC";
                            if ($db->queryDB($sql)) {
                                $db->bind(":id", $user_ID);
                                $output["snapshot"] = $db->resultAll();
                                $db->transactionCommit();
                            } else {
                                $db->transactionRollBack();
                                $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                                $output["db"]["php_error"] = true;
                                $output["db"]["msg"] = $db_err;
                            }
                        }
                    }
                } else {
                    $db->transactionRollBack();
                    $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                    $output["db"]["php_error"] = true;
                    $output["db"]["msg"] = $db_err;
                }
            } else {
                $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                $output["db"]["php_error"] = true;
                $output["db"]["msg"] = $db_err;
            }
        } catch (\Throwable $th) {
            $db->transactionRollBack();
            // Delete added quiz
            $sql = "DELETE FROM quiz WHERE quiz_name = :id";
            if ($db->queryDB($sql)) {
                // Bind params
                $db->bind(":id", $quiz_ID);
                // Attempt to execute the query
                if ($db->execute()) {
                    $output["db"]["msg"] = "Rollback. Quiz has been deleted.";
                    $output["db"]["php_error"] = true;
                } else {
                    $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                    $output["db"]["php_error"] = true;
                    $output["db"]["msg"] = $db_err;
                }
            } else {
                $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                $output["db"]["php_error"] = true;
                $output["db"]["msg"] = $db_err;
            }
        }
    } else {
        $output["data"]["php_error"] = true;
        $output["data"]["msg"] = "Data is not correctly formatted.";
    }
    // Close connection
    unset($db);
    // Send back the output to front-end
    echo json_encode($output);
} else {
    header("Location: index.php");
}
