<?php

$index_received = (int) $_POST['index'];

$new_object = [
    'isDone' => $_POST['isDone'] === 'true' ? true : false,
    'text' => $_POST['text'],
];



$toDoList_json = file_get_contents("../data/toDoList.json");
$toDoList_array = json_decode($toDoList_json, true);


$toDoList_array[$index_received] = $new_object;

$json_result = json_encode($toDoList_array);

file_put_contents("../data/toDoList.json", $json_result);

header('Content-Type: application/json');

echo $json_result;
