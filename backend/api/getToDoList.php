<?php
$to_do_list = file_get_contents("../data/toDoList.json");

header('Content-Type: application/json');

echo $to_do_list;
