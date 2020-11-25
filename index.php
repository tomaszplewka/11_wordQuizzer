<?php

use WordQuizzer\Database;
use WordQuizzer\Template;
use GuzzleHttp\Client;

require_once realpath("vendor/autoload.php");

$db = new Database();
$index = new Template(realpath("templates/index.php"));

$index->set('title', 'wordQuizzer');
$index->set('heading', 'Welcome to wordQuizzer!');

echo $index->output();
 
// $client = new Client([
//     // Base URI is used with relative requests
//     'base_uri' => 'https://reqres.in',
// ]);
  
// $response = $client->request('GET', '/api/users', [
//     'query' => [
//         'page' => '2',
//     ]
// ]);
 
// //get status code using $response->getStatusCode();
 
// $body = $response->getBody();
// $arr_body = json_decode($body);
// print_r($arr_body);