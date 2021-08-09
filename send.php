<?php
// Файлы phpmailer
require 'templates/phpmailer/PHPMailer.php';
require 'templates/phpmailer/SMTP.php';
require 'templates/phpmailer/Exception.php';

// в зависимости от пришедшей формы формируем сообщение:
if(isset($_POST['email-subscribe'])) {
  $email = $_POST['email-subscribe'];

  $title = "Новая подписка на Ehya";
  $body = "
  <h2>Новая подписка</h2>
  <b>Email:</b> $email
  ";
} else {
  $name = $_POST['name-modal'];
  $phone = $_POST['phone-modal'];
  $email = $_POST['email-modal'];
  $message = $_POST['message-modal'];
  // Формирование самого письма
  $title = "Новая подписка на Ehya";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>Email:</b> $email<br><br>
  <b>Сообщение:</b><br>$message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'keti.shevtsova@gmail.com'; // Логин на почте
    $mail->Password   = '951keti357'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('keti.shevtsova@gmail.com', 'Ekaterina Shevtsova'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('keti.shevtsova@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');
