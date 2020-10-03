<?php
require_once '../db_connect.php';

$q = $sql->prepare("INSERT INTO profiles(username, email, password, country)
                    VALUES(:username, :email, :password, :country)");

//die(hash('sha256', $_REQUEST['password']));

$q->execute([
    "username" => $_REQUEST['username'],
    "email" => $_REQUEST["email"],
    "password" => hash('sha256', $_REQUEST["password"]),
    "country" => isset($_REQUEST["country"]) ? $_REQUEST["country"] : NULL
]);

header("Location: /login");
exit();
