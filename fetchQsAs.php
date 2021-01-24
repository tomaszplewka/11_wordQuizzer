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
// Initialize vars
$quizName = $quizType = $quizAnswers = $quizQuestions = $userID = '';
$quizName_err = $quizType_err = $quizAnswers_err = $quizQuestions_err = $db_err = '';
$output = [
    "questions" => ["php_error" => false, "msg" => '', "fields" => []],
    "answers" => ["php_error" => false, "msg" => '', "fields" => []],
    "data" => ["php_error" => false, "msg" => '', "fields" => "data"],
    "db" => ["php_error" => false, "msg" => '', "fields" => "db"],
    "session" => ["loggedIn" => true, "msg" => '', "fields" => "session"]
];
// Check if user is logged in first !!!
// If not throw an exception


// Process POST data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // User fetches data
    // Decode json data
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if ($contentType === "application/json") {
        //Receive the RAW post data.
        $content = trim(file_get_contents("php://input"));
        // Decode
        $decoded = json_decode($content, true);
        // If json_decode failed, the JSON is invalid.
        if (is_array($decoded)) {
            $sqlQ = "SELECT question_ID, quiz_ID, question, word FROM questions WHERE quiz_ID = :id";
            $id = $decoded["ID"];
            // Fetch questions
            if ($db->queryDB($sqlQ)) {
                // echo json_encode('jestem tutaj');
                // exit;
                $db->bind(":id", $id);
                // W RAMACH ERROR HANDLING -- JEZELI TUTAJ JEST JAKIS BLAD -- SERVER IS DOWN -- SHOW MESSAGE TO A USER IN A FORM OF WHOLE SCREEN WRAPPER --> moze uzyj try & catch block here
                $output["questions"]["fields"] = $db->resultAll();
                $output["questions"]["msg"] = "Questions fetched.";
                // Fetch answers
                $sqlA = '';
                for ($i = 1; $i <= count($output["questions"]["fields"]); $i++) {
                    $bindParam = ":qID_" . $i;
                    $sqlA .= "{$bindParam},";
                }
                $sqlA = rtrim($sqlA, ',');
                $sql = "SELECT * FROM answers WHERE question_ID IN";
                $sql .= " (" . $sqlA . ")";
                if ($db->queryDB($sql)) {
                    for ($i = 1; $i <= count($output["questions"]["fields"]); $i++) {
                        $bindParam = ":qID_" . $i;
                        $db->bind($bindParam, $output["questions"]["fields"][$i - 1]["question_ID"]);
                    }
                    // W RAMACH ERROR HANDLING -- JEZELI TUTAJ JEST JAKIS BLAD -- SERVER IS DOWN -- SHOW MESSAGE TO A USER IN A FORM OF WHOLE SCREEN WRAPPER --> moze uzyj try & catch block here
                    $output["answers"]["fields"] = $db->resultAll();
                    $output["answers"]["msg"] = "Answers fetched.";
                    echo json_encode($output);
                    exit;
                } else {
                    // TUTAJ HANDLE DB ERROR
                }
            } else {
                // TUTAJ HANDLE DB ERROR
            }
        } else {
            // Send error back to user.
            $output["data"]["php_error"] = true;
            $output["data"]["msg"] = "Data is not correctly formatted.";
            echo json_encode($output);
            exit;
        }
    } else {
        // WRONG CONTENT TYPE
    }
} else {
    // User not authorized
    // Redirect
    $output["session"]["loggedIn"] = false;
    $output["session"]["msg"] = "This is not POST request";
    echo json_encode($output);
    exit;
}
