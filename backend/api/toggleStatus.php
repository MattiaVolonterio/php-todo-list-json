<?php

$index_received = (int) $_POST['index'];


$toDoList_json = file_get_contents("../data/toDoList.json");
$toDoList_array = json_decode($toDoList_json, true);


$selected_element = $toDoList_array[$index_received];


$toDoList_array[$index_received]['isDone'] = !$selected_element['isDone'];

$json_result = json_encode($toDoList_array);

file_put_contents("../data/toDoList.json", $json_result);

header('Content-Type: application/json');

echo $json_result;
