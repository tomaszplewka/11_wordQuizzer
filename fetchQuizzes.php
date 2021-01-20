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
    "data" => ["php_error" => false, "msg" => '', "fields" => []],
    "db" => ["php_error" => false, "msg" => '', "field" => "db"],
    "session" => ["loggedIn" => true, "msg" => '', "field" => "session"]
];
// Fetch data based on user's status
if (isset($_SESSION["user_loggedIn"]) && ($_SESSION["user_loggedIn"] === true)) {
    // User is logged in
    $id = $_SESSION["user_id"];
    $user = $_SESSION["user_name"];
    // W RAMACH ERROR HANDLING -- JEZELI TUTAJ JEST JAKIS BLAD -- SERVER IS DOWN -- SHOW MESSAGE TO A USER IN A FORM OF WHOLE SCREEN WRAPPER --> moze uzyj try & catch block here
    $sql = "SELECT * FROM quiz WHERE user_id = :id ORDER BY created_at DESC";
    if ($db->queryDB($sql)) {
        $db->bind(":id", $id);
        $output["data"]["fields"] = $db->resultAll();
        $output["data"]["msg"] = "Data fetched for user " . $user;
        // echo json_encode($output);
        // exit;
    } else {
        // TUTAJ HANDLE DB ERROR
    }
} else {
    // Guest mode
    $output["session"]["loggedIn"] = false;
    $output["session"]["msg"] = "This user is not logged in";
    // Fetch data
    $sql = "SELECT * FROM quiz WHERE user_id IS NULL ORDER BY created_at";
    if ($db->queryDB($sql)) {
        $output["data"]["fields"] = $db->resultAll();
        $output["data"]["msg"] = "Data fetched in guest mode.";
    } else {
        // TUTAJ HANDLE DB ERROR
    }
}
echo json_encode($output);
exit;
