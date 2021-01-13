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
    try {
        if (is_array($decoded)) {
            // Set local var
            $finalScore = $decoded["finalScore"];
            $quizID = (int) $decoded["quizID"];
            $sql = "UPDATE quiz SET score = :finalScore WHERE quiz_id = :quizID";
            if ($db->queryDB($sql)) {
                // Bind
                $db->bind(":finalScore", $finalScore);
                $db->bind(":quizID", $quizID);
                // echo json_encode($quizID);
                // exit;
                if ($db->execute()) {
                    // Tu wszystko powinno byc ok
                    $output["data"]["msg"] = "Quiz has been updated.";
                    echo json_encode($output);
                    exit;
                } else {
                    $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
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
        } else {
            // Send error back to user.
            $output["data"]["php_error"] = true;
            $output["data"]["msg"] = "Data is not correctly formatted.";
            echo json_encode($output);
            exit;
        }
    } catch (\Throwable $th) {
        // Set output
        $db_err = "Database error: " . $th->getMessage() . " Please try again later.";
        $output["db"]["php_error"] = true;
        $output["db"]["msg"] = $db_err;
        echo json_encode($output);
        exit;
    }
}
