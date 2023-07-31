<?php 

$to = 'ingfo@asld;k;asd.ru';
$from = "From: Заявка с главной <Yoliba>\n\r";
$name = $_POST['name'];
$tel = $_POST['tel'];
$page = 'Главная';

$message = 
'Откуда'.$page.'\r\n'.
'Имя'.$name.'\r\n'.
'Номер'.$tel.'\r\n';

$headers = "Content-type: text/html; charset=utf-8\r\n";
$headers.= $from;

$result = mail($name, $tel, $headers, $message);
?>