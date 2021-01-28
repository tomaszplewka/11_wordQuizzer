<?php
// Start session
session_start();
// Load config
require_once("../config/config.php");
// Use namespaces
use WordQuizzer\Template;
// Autoload
require_once(realpath("../vendor/autoload.php"));
// Instantiate template class
$index = new Template(realpath("../src/index.php"));
// Echo template
echo $index->output();
