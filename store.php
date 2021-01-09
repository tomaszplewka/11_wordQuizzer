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
        // echo json_encode($decoded["answers"]);
        // exit;
        // Save to db
        // $sql = "INSERT INTO table (artist, album, track, length) VALUES ";
        // Begin transaction
        $db->transactionStart();
        try {
            $final_arr = [];
            $index = 0;
            foreach ($decoded["questions"] as $key => $value) {
                // echo json_encode($value);
                // exit;
                // Insert question
                $sql = "INSERT INTO questions (question_ID, quiz_ID, question, word) VALUES (:question_id, :quiz_id, :question, :word)";
                if ($db->queryDB($sql)) {
                    $data = (array) $value;
                    // Bind params
                    $user_ID = 18; // normally read from $_SESSION var
                    $quiz_ID = 1;
                    $q_ID = "Q_" . $quiz_ID . "_" . $user_ID;
                    $db->bind(":question_id", $q_ID); // question_ID
                    $db->bind(":quiz_id", $quiz_ID); // quiz_ID
                    $db->bind(":question", $data["question"]);
                    $db->bind(":word", $key);
                    // Attempt to execute the query
                    if ($db->execute()) {
                        $db->transactionCommit();
                        echo json_encode('Pytanie zapisane');
                        exit;
                        // $output["db"]["msg"] = "Quiz has been created.";
                        // Question has been added
                        // Add answers
                        // $sql = "INSERT INTO answers (question_ID, answer, is_correct) VALUES ";
                        // $sql .= "(:q_ID, :a_1, :correct)";
                        // for ($i = 1; $i < 2; $i++) { // number of answers minus correct answer added in the preceeding line
                        //     $sql .= "(:q_ID, :a_{$i})";
                        // }
                        // if ($db->queryDB($sql)) {
                        //     // Bind params
                        //     $db->bind(":q_ID", $q_ID); // question_ID
                        //     $db->bind(":a_1", $value->correctAnswer);
                        //     $db->bind(":correct", 1);
                        //     for ($i = 1; $i < 2; $i++) { // number of answers minus correct answer added in the preceeding line
                        //         $bindParam = ":a_{$i}";
                        //         $db->bind($bindParam, $decoded["answers"][$i - 1]);
                        //     }
                        //     if ($db->execute()) {
                        //         // Tu wszystko powinno byc ok
                        //         echo json_encode('wszystko ok');
                        //         exit;
                        //     }
                        // }
                    } else {
                        $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                        $output["db"]["php_error"] = true;
                        $output["db"]["msg"] = $db_err;
                        echo json_encode('pierwsze execute error');
                        exit;
                    }
                } else {
                    $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                    $output["db"]["php_error"] = true;
                    $output["db"]["msg"] = $db_err;
                    echo json_encode('pierwsze query error');
                    exit;
                }
                // 
                $index++;
            }
        } catch (\Throwable $th) {
            $db->transactionRollBack();
            // Set output
            // Send output
            echo json_encode('rolled back');
            exit;
        }
        // ("$artist", "$album", "$track1", "$length1"), 
        // ("$artist", "$album", "$track2", "$length2"),
        // ("$artist", "$album", "$track3", "$length3"), 
        // ("$artist", "$album", "$track4", "$length4"),
        // ("$artist", "$album", "$track5", "$length5");
    } else {
        // Send error back to user.
        echo json_encode('json error');
        exit;
    }
    // Close connection
    unset($db);
}
// 
echo json_encode('doszlo do konca');
