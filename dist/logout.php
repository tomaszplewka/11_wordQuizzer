<?php
require('../core/init.php');
// Set vars
$output = ["loggedOut" => false];
// Check if a user was logged in
if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) {
    // Unset all of the session variables.
    $_SESSION = array();
    // Finally, destroy the session.
    session_destroy();
    // Start new session
    session_start();
    // Send the response to front end
    $output["loggedOut"] = true;
}
echo json_encode($output);
