<?php
// Start session
session_start();
// Load config
require_once("config/config.php");
// Load helper functions
// require_once("helpers/system_helper.php");
// require_once("helpers/format_helper.php");
// require_once("helpers/db_helper.php");
// Use namespaces
use WordQuizzer\Template;
// Autoload
require_once(realpath("vendor/autoload.php"));
// Instantiate template class
$index = new Template(realpath("src/index.php"));
// $index->title = 'wordRiddler';
// $index->heading = 'Welcome to wordRiddler!';
// session_unset();
echo $index->output();
