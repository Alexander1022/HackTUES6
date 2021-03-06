<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../css/chat.css">
  <link rel="stylesheet" href="../css/navbar.css">
  <script type='text/javascript' src='https://cdn.scaledrone.com/scaledrone.min.js'></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Qurantine Chat</title>
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#ffffff">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
  <!--- долните редове са за икона на различни у-ва-->
  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="../images/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../images/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../images/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../images/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="../images/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="../images/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="../images/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="../images/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="../images/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="../images/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="../images/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="../images/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="../images/favicon-128.png" sizes="128x128" />
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
    <img src="../images/COVID_NEWS-transperent2.png" style="width:200px; height:53px;  background-color: #64BB6A; margin-left: 15px; margin-top: 3px;">
    <div>
        <?php
        session_start();
        if ($_SESSION['loggedin'] == 1) {
              echo('
              <a><form class="" action="../" method="post">
                  <input type="hidden" name="logout" value="true">
                  <input type="submit" name="submit" value="Logout">
              </form></a>
              ');
        } else {
              echo('<a href="../profile_control/login.php">Login</a>');
        }?>
        <a href="chat.php">Chat</a>
        <a href="stats.php">Statistics</a>
        <a href="../">News</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
      </div>
  </div>

<h1 style="text-align:center; margin-top:15px";>Qurantine Chat</h1>

<div class="info_panel">
  <div class="members-count">-</div>
  <div class="members-list">-</div>
</div>

  <div class="messages"></div>

  <form class="message-form" onsubmit="return false;">
    <input class="message-form__input" placeholder="Aa" type="text"/>
    <button class="message-form__button" type="submit">Send</button>
  </form>
  <script src="../js/chat.js"></script>
  <script src="../sw.js"></script>

</body>
</html>
