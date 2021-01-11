<?php
// Start session
session_start();
// Load config
require_once("config/config.php");
// Use namespaces
use WordQuizzer\Database;
// Load dependencies
require_once(realpath("vendor/autoload.php"));
// Initialize db
$db = new Database();
// 
// Define and initialize vars
$quizName = $quizType = $quizAnswers = $quizQuestions = $userID = '';
$quizName_err = $quizType_err = $quizAnswers_err = $quizQuestions_err = $db_err = '';
$output =
    [
        "data" => [
            "php_error" => false,
            "msg" => '',
            "field" => "store-data"
        ],  "db" => [
            "php_error" => false,
            "msg" => '',
            "field" => "store-db"
        ],  "session" => [
            "loggedIn" => true,
            "msg" => ''
        ]
    ];
// 
// session_unset();
// Check if user is logged in, if not redirect to login page
if (!isset($_SESSION["user_loggedIn"]) && !($_SESSION["user_loggedIn"] === true)) {
    $output["session"]["loggedIn"] = false;
    $output["session"]["msg"] = "This user is not logged in";
    echo json_encode($output);
    exit;
}
// Decode json data
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($contentType === "application/json") {
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
            $user_ID = $_SESSION["user_id"]; // normally read from $_SESSION var
            $quiz_ID = $decoded["quizID"];
            // Number of asnwers
            $numOfQs = (int) $decoded["answersTotal"];
            foreach ($decoded["questions"] as $word => $question) {
                // Insert question
                $q_number = ":q_" . ($index + 1);
                $question_num = ":ques_" . ($index + 1);
                $word_num = ":w_" . ($index + 1);
                $sqlQ .= "({$q_number}, :quiz_id, {$question_num}, {$word_num}),";
                // Convert to array -- check if $question is array or object later
                $data = (array) $question;
                // Question has been added -- add answers
                $order = ":q_order_" . ($index + 1);
                $bindParam = ":a_" . ($index2 + 1);
                $sqlA .= "({$q_number}, {$bindParam}, {$order}, :correct),";
                $index++;
                $index2++;
                for ($i = 1; $i < $numOfQs; $i++) { // number of answers minus correct answer added in the preceeding line
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
                    $db->bind(":quiz_id", $quiz_ID); // quiz_ID
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

                            $db->bind($q_number, $q_ID); // question_ID
                            $db->bind($bindParam, $data["correctAnswer"]);
                            $db->bind($order, ($index + 1));
                            $db->bind(":correct", '1');
                            $index2++;
                            for ($i = 1; $i < $numOfQs; $i++) { // number of answers minus correct answer added in the preceeding line
                                $bindParam = ":a_" . ($index2 + 1);
                                $db->bind($bindParam, $decoded["answers"][$index3]);
                                $db->bind(":not_correct", '0');
                                $index2++;
                                $index3++;
                            }
                            $index++;
                        }
                        if ($db->execute()) {
                            $db->transactionCommit();
                            // Tu wszystko powinno byc ok
                            $output["data"]["msg"] = "Questions and answers added.";
                            echo json_encode($output);
                            exit;
                        }
                    }
                } else {
                    $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                    $output["db"]["php_error"] = true;
                    $output["db"]["msg"] = $db_err;
                    echo json_encode($output);
                    exit;
                }
            } else {
                $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                $output["db"]["php_error"] = true;
                $output["db"]["msg"] = $db_err;
                echo json_encode($output);
                exit;
            }
        } catch (\Throwable $th) {
            $db->transactionRollBack();
            // Set output
            $db_err = "Database error: " . $th->getMessage() . " Please try again later.";
            $output["db"]["php_error"] = true;
            $output["db"]["msg"] = $db_err;
            echo json_encode($output);
            exit;
        }
    } else {
        // Send error back to user.
        $output["data"]["php_error"] = true;
        $output["data"]["msg"] = "Data is not correctly formatted.";
        echo json_encode($output);
        exit;
    }
}
