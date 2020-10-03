<?php
require_once '../db_connect.php';

$q = $sql->prepare("INSERT INTO profiles(username, email, password, country)
                    VALUES(:username, :email, :password, :country)");

if (!$_REQUEST['username']) {
    $err = "Username not set!";
}elseif (!$_REQUEST['email']) {
    $err = "Email not set!";
}elseif ($_REQUEST["password"] != $_REQUEST['repeat_password']) {
    $err = "The passwords don't match!";
}

if (isset($err)) {
    setcookie('err', $err);
    header("Location: /profile_control/create_profile_fail.php");
    exit();
}

$q->execute([
    "username" => $_REQUEST['username'],
    "email" => $_REQUEST["email"],
    "password" => hash('sha256', $_REQUEST["password"]),
    "country" => isset($_REQUEST["country"]) ? $_REQUEST["country"] : ""
]);

header("Location: /profile_control/login.html");
exit();
