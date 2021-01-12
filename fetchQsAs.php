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
        "questions" => [
            "php_error" => false,
            "msg" => '',
            "fields" => []
        ], "answers" => [
            "php_error" => false,
            "msg" => '',
            "fields" => []
        ], "data" => [
            "php_error" => false,
            "msg" => ''
        ],  "db" => [
            "php_error" => false,
            "msg" => ''
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
// W RAMACH ERROR HANDLING -- JEZELI TUTAJ JEST JAKIS BLAD -- SERVER IS DOWN -- SHOW MESSAGE TO A USER IN A FORM OF WHOLE SCREEN WRAPPER

// Decode json data
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    // Decode
    $decoded = json_decode($content, true);
    //If json_decode failed, the JSON is invalid.
    if (is_array($decoded)) {
        $sql = "SELECT question_ID, quiz_ID, question, word FROM questions WHERE quiz_ID = :id";
        // Fetch questions
        if ($db->queryDB($sql)) {
            // echo json_encode('jestem tutaj');
            // exit;
            $db->bind(":id", $decoded["ID"]);
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
}
