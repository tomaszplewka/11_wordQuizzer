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
$email = $password = $id = '';
$email_err = $password_err = '';
$output =   [
    "email" => ["php_error" => false, "msg" => '', "field" => "email"],
    "password" => ["php_error" => false, "msg" => '', "field" => "password"],
    "db" => ["php_error" => false, "msg" => '', "field" => "db"],
    "session" => ["loggedIn" => false, "msg" => '', "field" => "session"]
];
// Check if user is already logged in, if so redirect to welcome screen
if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) {
    $output["session"]["loggedIn"] = true;
    $output["session"]["msg"] = "This user is already logged in";
    echo json_encode($output);
    session_unset();
    exit;
}
// Process POST data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate email - check if empty
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    if (empty(trim($email))) { // username invalid -- username is empty
        $email_err = "Please fill in email field.";
        // Send error msg to front end
        $output["email"]["php_error"] = true;
        $output["email"]["msg"] = $email_err;
    } else {
        $email = htmlentities(trim($email), ENT_QUOTES, 'UTF-8');
    }
    // Validate password
    if (empty($_POST["password"])) { // password invalid -- password is empty
        $password_err = "Please provide password.";
        // Send err msg to front end
        $output["password"]["php_error"] = true;
        $output["password"]["msg"] = $password_err;
    } else { // password valid
        $password = htmlspecialchars(trim($_POST["password"]));
    }
    // Check credentials against db data
    if (empty($email_err) && empty($password_err)) {
        $sql = "SELECT user_id, user_email, user_name, user_password FROM users WHERE user_email = :email";
        if ($db->queryDB($sql)) {
            // Bind params
            $db->bind(":email", $email);
            // Attempt to execute the query
            if ($db->execute()) {
                // Check if user exist, if so fetch and verify data
                if ($db->countRows() === 1) {
                    if ($user_result = $db->resultSingle()) {
                        $id = $user_result["user_id"];
                        $email = $user_result["user_email"];
                        $username = $user_result["user_name"];
                        $password_hashed = $user_result["user_password"];
                        // Verify hashed passwords
                        if (password_verify($password, $password_hashed)) {
                            // Data validated and verified, user is now logged in
                            $_SESSION["user_loggedIn"] = true;
                            $_SESSION["user_id"] = $id;
                            $_SESSION["user_email"] = $email;
                            $_SESSION["user_name"] = $username;
                            $output["db"]["msg"] = "User has been logged in.";
                        } else {
                            $password_err = "Incorrect password.";
                            // Send err msg to front end
                            $output["password"]["php_error"] = true;
                            $output["password"]["msg"] = $password_err;
                        }
                    } else {
                        $db_err = "Database error: " . $db->errInfo() . " Could not fetch the data for this email.";
                        $output["db"]["php_error"] = true;
                        $output["db"]["msg"] = $db_err;
                    }
                } else {
                    $email_err = "No account found for this email.";
                    // Send error msg to front end
                    $output["email"]["php_error"] = true;
                    $output["email"]["msg"] = $email_err;
                }
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
// Send back the output to front-end
echo json_encode($output);
