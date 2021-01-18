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
$username = $email = $password = $confirm_password = '';
$username_err = $email_err = $password_err = $confirm_password_err = $db_err = '';
$output =   [
    "username" => ["php_error" => false, "msg" => '', "field" => "username"],
    "email" => ["php_error" => false, "msg" => '', "field" => "email"],
    "password" => ["php_error" => false, "msg" => '', "field" => "password"],
    "confirm-password" => ["php_error" => false, "msg" => '', "field" => "confirm-password"],
    "db" => ["php_error" => false, "msg" => '', "field" => "db"]
];
// 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate username - check if empty and against regex expression
    $username = filter_var($_POST["username"], FILTER_SANITIZE_STRING);
    if (empty(trim($username))) { // username invalid -- username is empty
        $username_err = "Please fill in username field.";
        // Send error msg to front end
        $output["username"]["php_error"] = true;
        $output["username"]["msg"] = $username_err;
    } elseif (preg_match("/^(\w+( \w+)*){6,20}$/", $username) === 0) {  // username invalid -- username does not pass regex match
        $username_err = "Username field must contain at least 6 characters (letters or numbers only).";
        // Send error msg to front end
        $output["username"]["php_error"] = true;
        $output["username"]["msg"] = $username_err;
    } else { // username valid
        $username = htmlentities(trim($username), ENT_QUOTES, 'UTF-8');
        // Check if username is already taken
        $sql = "SELECT user_id FROM users WHERE user_name = :username";
        // Prepare the query
        if ($db->queryDB($sql)) {
            // Bind params
            $db->bind(":username", $username);
            // Attempt to execute the query
            if ($db->execute()) {
                if ($db->countRows() === 1) {
                    $username_err = "This username is already taken.";
                    $output["username"]["php_error"] = true;
                    $output["username"]["msg"] = $username_err;
                } else {
                    $output["username"]["msg"] = "Username is valid.";
                }
            } else {
                $username_err = "Database error. Please try again later.";
                $output["username"]["php_error"] = true;
                $output["username"]["msg"] = $username_err;
            }
        } else {
            $username_err = "Database error. Please try again later.";
            $output["username"]["php_error"] = true;
            $output["username"]["msg"] = $username_err;
        }
    }
    // Sanitize and validate email
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    if (empty(trim($email))) { // email invalid -- email is empty
        $email_err = "Please fill in email field.";
        // Send err msg to front end
        $output["email"]["php_error"] = true;
        $output["email"]["msg"] = $email_err;
    } elseif (preg_match('/^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,15})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/', $email) === 0) {  // email invalid -- email does not pass regex match
        $email_err = "Email field must contain a valid email address.";
        // Send error msg to front end
        $output["email"]["php_error"] = true;
        $output["email"]["msg"] = $email_err;
    } else { // email valid
        $email = htmlentities(trim($email), ENT_QUOTES, 'UTF-8');
        // Check if email is already taken
        $sql = "SELECT user_id FROM users WHERE user_email = :email";
        // Prepare the query
        if ($db->queryDB($sql)) {
            // Bind params
            $db->bind(":email", $email);
            // Attempt to execute the query
            if ($db->execute()) {
                if ($db->countRows() === 1) {
                    $email_err = "This email is already taken.";
                    $output["email"]["php_error"] = true;
                    $output["email"]["msg"] = $email_err;
                } else {
                    $output["email"]["msg"] = "Email is valid.";
                }
            } else {
                $email_err = "Database error. Please try again later.";
                $output["email"]["php_error"] = true;
                $output["email"]["msg"] = $email_err;
            }
        } else {
            $email_err = "Database error. Please try again later.";
            $output["email"]["php_error"] = true;
            $output["email"]["msg"] = $email_err;
        }
    }
    // Validate password
    if (empty($_POST["password"])) { // password invalid -- password is empty
        $password_err = "Please provide password.";
        // Send err msg to front end
        $output["password"]["php_error"] = true;
        $output["password"]["msg"] = $password_err;
    } elseif (preg_match('/^[a-zA-Z]{4,}$/', $_POST["password"]) === 0) {  // password invalid -- password does not pass regex match
        $password_err = "Password must be at least 8 characters long and contain at least 1 capital letter and 1 special symbol.";
        // Send error msg to front end
        $output["password"]["php_error"] = true;
        $output["password"]["msg"] = $password_err;
    } else { // password valid
        $password = htmlspecialchars(trim($_POST["password"]));
        $output["password"]["msg"] = "Password is valid.";
    }
    // Validate confirm_password
    if (empty($_POST["confirm-password"])) { // confirm-password invalid -- confirm-password is empty
        $confirm_password_err = "Please confirm password.";
        // Send err msg to front end
        $output["confirm-password"]["php_error"] = true;
        $output["confirm-password"]["msg"] = $confirm_password_err;
    } elseif (empty($_POST["password"]) && ($_POST["confirm-password"] !== $_POST["password"])) {  // password invalid -- password does not pass regex match
        $confirm_password_err = "Passwords must match.";
        // Send error msg to front end
        $output["confirm-password"]["php_error"] = true;
        $output["confirm-password"]["msg"] = $confirm_password_err;
    } else { // password valid
        $password = htmlspecialchars(trim($_POST["confirm-password"]));
        $output["confirm-password"]["msg"] = "Confirm_password is valid.";
    }
    // Check for errors before interacting with db
    if (empty($username_err) && empty($email_err) && empty($password_err) && empty($confirm_password_err)) {
        $sql = "INSERT INTO users (user_email, user_name, user_password) VALUES (:email, :username, :password)";
        if ($db->queryDB($sql)) {
            // Bind params
            $db->bind(":email", $email);
            $db->bind(":username", $username);
            $db->bind(":password", password_hash($password, PASSWORD_DEFAULT));
            // Attempt to execute the query
            if ($db->execute()) {
                $output["db"]["msg"] = "User has been created.";
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
