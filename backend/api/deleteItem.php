<?php

$index_to_delete = (int) $_POST['index'];

$toDoList = file_get_contents("../data/toDoList.json");
$toDoList_array = json_decode($toDoList, true);

unset($toDoList_array[$index_to_delete]);

$toDoList_array = array_values($toDoList_array);

$json_result = json_encode($toDoList_array);

file_put_contents("../data/toDoList.json", $json_result);

header('Content-Type: application/json');

echo $json_result;
