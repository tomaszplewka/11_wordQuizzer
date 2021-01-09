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
        "quiz-name" => [
            "php_error" => false,
            "msg" => '',
            "field" => "generate-name"
        ],  "quiz-type" => [
            "php_error" => false,
            "msg" => '',
            "field" => "generate-type"
        ],   "quiz-answers" => [
            "php_error" => false,
            "msg" => '',
            "field" => "generate-answers"
        ],  "quiz-questions" => [
            "php_error" => false,
            "msg" => '',
            "field" => "generate-questions"
        ],  "db" => [
            "php_error" => false,
            "msg" => '',
            "field" => "generate-db"
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
// print_r($_POST);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate quiz name
    $quizName = filter_var($_POST["quiz-name"], FILTER_SANITIZE_STRING);
    if (empty(trim($quizName))) {
        $quizName_err = "Please give a name to your quiz.";
        // Send error msg to front end
        $output["quiz-name"]["php_error"] = true;
        $output["quiz-name"]["msg"] = $quizName_err;
    } else {
        $quizName = htmlentities(trim($quizName), ENT_QUOTES, 'UTF-8');
        // Check if quiz name is already taken
        $sql = "SELECT quiz_name FROM quiz WHERE quiz_name = :name";
        // Prepare the query
        if ($db->queryDB($sql)) {
            // Bind params
            $db->bind(":name", $quizName);
            // Attempt to execute the query
            if ($db->execute()) {
                if ($db->countRows() === 1) {
                    $quizName_err = "This name is already taken.";
                    $output["quiz-name"]["php_error"] = true;
                    $output["quiz-name"]["msg"] = $quizName_err;
                } else {
                    $output["quiz-name"]["msg"] = "Name is valid.";
                }
            } else {
                $quizName_err = "Database error. Please try again later.";
                $output["quiz-name"]["php_error"] = true;
                $output["quiz-name"]["msg"] = $quizName_err;
            }
        } else {
            $quizName_err = "Database error. Please try again later.";
            $output["quiz-name"]["php_error"] = true;
            $output["quiz-name"]["msg"] = $quizName_err;
        }
    }
    // Sanitize and validate quiz type
    $quizType = filter_var($_POST["quiz-select"], FILTER_SANITIZE_STRING);
    if (empty(trim($_POST["quiz-select"])) || trim($_POST["quiz-select"]) === "Quiz Type") {
        $quizType_err = "Please select valid quiz type.";
        // Send err msg to front end
        $output["quiz-type"]["php_error"] = true;
        $output["quiz-type"]["msg"] = $quizType_err;
    } else {
        $quizType = strtolower(htmlspecialchars(trim($_POST["quiz-select"])));
    }
    // Sanitize and validate quiz answers
    $quizAnswers = filter_var($_POST["quiz-answers"], FILTER_SANITIZE_NUMBER_INT);
    if (empty(trim($_POST["quiz-answers"])) || trim($_POST["quiz-answers"]) < 2  || trim($_POST["quiz-answers"]) > 6) {
        $quizAnswers_err = "Please select valid number of quiz answers.";
        // Send err msg to front end
        $output["quiz-answers"]["php_error"] = true;
        $output["quiz-answers"]["msg"] = $quizAnswers_err;
    } else {
        $quizAnswers = htmlspecialchars(trim($_POST["quiz-answers"]));
    }
    // Sanitize and validate quiz questions
    $quizQuestions = filter_var($_POST["quiz-questions"], FILTER_SANITIZE_NUMBER_INT);
    if (empty(trim($_POST["quiz-questions"])) || trim($_POST["quiz-questions"]) < 4  || trim($_POST["quiz-questions"]) > 10) {
        $quizQuestions_err = "Please select valid number of quiz questions.";
        // Send err msg to front end
        $output["quiz-questions"]["php_error"] = true;
        $output["quiz-questions"]["msg"] = $quizQuestions_err;
    } else {
        $quizQuestions = htmlspecialchars(trim($_POST["quiz-questions"]));
    }
    // Sanitize and validate user id
    $userID = htmlspecialchars(filter_var($_POST["user-id"], FILTER_SANITIZE_NUMBER_INT));
    // Check for errors before interacting with db
    if (empty($quizName_err) && empty($quizType_err) && empty($quizAnswers_err) && empty($quizQuestions_err)) {
        $sql = "INSERT INTO quiz (quiz_name, quiz_type, quiz_answers, quiz_questions, user_id) VALUES (:name, :type, :answers, :questions, :id)";
        if ($db->queryDB($sql)) {
            // Bind params
            $db->bind(":name", $quizName);
            $db->bind(":type", $quizType);
            $db->bind(":answers", $quizAnswers);
            $db->bind(":questions", $quizQuestions);
            $db->bind(":id", $userID);
            // Attempt to execute the query
            if ($db->execute()) {
                $output["db"]["msg"] = "Quiz has been created.";
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
    // Close connection
    unset($db);
}
// 
echo json_encode($output);
