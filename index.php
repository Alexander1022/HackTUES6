<?php
session_start();
if($_SERVER["REQUEST_METHOD"] == "POST" && $_SESSION['loggedin'] == 1)
{
    session_destroy();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>CovidNews</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet"  href="css/navbar.css">
    <link rel="stylesheet"  href="css/slideshow.css">
    <link rel="stylesheet"  href="css/news.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
    <!--- долните редове са за икона на различни у-ва-->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="images/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="images/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="images/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="images/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="images/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="images/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="images/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="images/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
</head>

<body>
  <div class="nav_bar" id="navigation">
    <img src="./images/COVID_NEWS-transperent2.png" style="width:200px; height:53px; margin-left: 15px; margin-top: 3px;">
    <div>
      <?php
      session_start();
      if ($_SESSION['loggedin'] == 1) {
            echo('
            <a><form class="" action='.$_SERVER['PHP_SELF'].' method="post">
                <input type="hidden" name="logout" value="true">
                <input type="submit" name="submit" value="Logout">
            </form></a>
            ');
      } else {
            echo('<a href="../profile_control/login.php">Login</a>');
      }?>
      <a href="pages/chat.php">Chat</a>
      <a href="pages/stats.php">Statistics</a>
      <a href="../">News</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>

    <div class="simple-ss" id="simple-ss"></div>

    <h1 class="tips">---</h1>
    
    <div id="newsContainer">
                <h1 class="title">-</h1>
                <h2 class="sub_title">-</h2>
                <h2 class="day">-</h2>
    </div>

    <script src="js/script.js"></script>
    <script src="js/news_fetching.js"></script>
    <script src="sw.js"></script>
</body>
</html>
