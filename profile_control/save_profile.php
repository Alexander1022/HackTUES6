<?php
require_once '../db_connect.php';

$q = $sql->prepare("INSERT INTO profiles(username, email, password, country_id)
                    VALUES(:username, :email, :password, :country_id)");

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if (empty($_POST["name"])) {
    $nameErr = "Name is required";
} else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        $nameErr = "Only letters and white space allowed";
    }
}
if (empty($_POST["email"])) {
    $emailErr = "Email is required";
} else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    }
}
if (empty($_POST["password"]) or empty($_POST["repeat_password"])) {
    $passErr = "Password is required";
} else {
    if ($_POST["password"] != $_POST["repeat_password"]) {
        $passErr = "Passwords must match";
    }
}

if (isset($nameErr)) {
    echo '<form id="myForm" action="register.php" method="post">';
    echo '<input type="hidden" name="'.htmlentities('nameErr').'" value="'.htmlentities($nameErr).'">';
    echo '</form>';
}elseif (isset($emailErr)) {
    echo '<form id="myForm" action="register.php" method="post">';
    echo '<input type="hidden" name="'.htmlentities('emailErr').'" value="'.htmlentities($emailErr).'">';
    echo '</form>';
}elseif (isset($passErr)) {
    echo '<form id="myForm" action="register.php" method="post">';
    echo '<input type="hidden" name="'.htmlentities('passErr').'" value="'.htmlentities($passErr).'">';
    echo '</form>';
}
echo('
<script type="text/javascript">
    document.getElementById("myForm").submit();
</script>
');
// die(print_r($_REQUEST));
$q->execute([
    "username" => $_REQUEST['name'],
    "email" => $_REQUEST["email"],
    "password" => hash('sha256', $_REQUEST["password"]),
    "country_id" => $_REQUEST['country_id']
]);

header("Location: /profile_control/login.html");
exit();
