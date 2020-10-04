<?php
session_start();
// Checks if the user is already logged
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: ../index.html");
    exit;
}
require_once "../db_connect.php";

$email = $password = "";
$emailErr = $passErr = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    // Email verification
    if(empty(trim($_REQUEST["email"]))){
        $emailErr = "Please enter email.";
    } elseif (!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    } else{
        $email = trim($_REQUEST["email"]);
    }

    // Password verification
    if(empty(trim($_REQUEST["password"]))){
        $passErr = "Please enter your password.";
    } else{
        $password = hash('sha256',trim($_REQUEST["password"]));
    }

    // Validate credentials
    if(empty($emailErr) && empty($passErr)){
        $q = "SELECT id, username, email, password FROM profiles WHERE email = :email";

        if($stmt = $sql->prepare($q)){
            $stmt->bindParam(':email', $email);

            if($stmt->execute()){

                if($stmt->rowCount() == 1){
                    if($row = $stmt->fetch()){
                        $id = $row["id"];
                        $username = $row["username"];
                        $email = $row["email"];
                        $hashed_password = $row["password"];

                        if($password == $hashed_password){
                            session_start();
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;
                            header("location: ../");
                        } else{
                            $passErr = "The password you entered was not valid.";
                        }
                    }
                } else{
                    $emailErr = "No account found with that email.";
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
            unset($stmt);
        }
    }
    unset($sql);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>CovidNews - Login</title>
    <link rel="stylesheet" href="login.css">
<head>
<body>
    <form method="post" action="<?php echo($_SERVER['PHP_SELF']); ?>">
        <div class="login_page">
            <div class="form">
              <form class="register_form">
                <input type="email" name="email" placeholder="Email address" required/>
                <?php echo($emailErr); ?>
                <input type="password" name="password" placeholder="Password" required/>
                <?php echo($passErr); ?>
                <button>Login</button>
              </form>
              <p class="message">Don't have an account? <a href="register.php">Register</a></p>
            </div>
        </div>
    </form>
<body>
