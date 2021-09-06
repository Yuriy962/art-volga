<?php 
// Файлы phpmailer
require '/home/s/seotest/art-volga/public_html/phpmailer/PHPMailer.php';
require '/home/s/seotest/art-volga/public_html/phpmailer/SMTP.php';
require '/home/s/seotest/art-volga/public_html/phpmailer/Exception.php';

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$radio1 = $_POST['radio-1'];
$radio2 = $_POST['radio-2'];
$radio3 = $_POST['radio-3'];

// Формирование самого письма
$title = "Новая заявка с формы сайта ART VOGLA - Клинка Вспомогательных Репродуктивных Технологий";
$body = "
<h2>Новая заявка с формы сайта  ART VOGLA - Клинка Вспомогательных Репродуктивных Технологий</h2>
<b>Телефон:</b> ".$phone."<br>
";

// if(!empty($radio1) && !empty($radio2) && !empty($radio3)) {
//  $body = "
//     <h2>Новая заявка с квиза  Фундамент-Волга</h2>
//     <p> Из какого материала планируете строить дом? -> ".$radio1."</p>
//     <p> У Вас есть геология участка под строительство? -> ".$radio2."</p>
//     <p> Как далеко соседские дома и постройки от предполагаемого места для дома -> ".$radio3."</p>
//     <p><b>Телефон:</b> ".$phone."<br></p>
//     ";
    
//  $text = 'Из какого материала планируете строить дом: '.$radio1."\r\n";
//  $text .= 'У Вас есть геология участка под строительство: '.$radio2."\r\n";
//  $text .= 'Как далеко соседские дома и постройки от предполагаемого места для дома: '.$radio3."\r\n";
// }


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    
    $mail->Host       = 'smtp.yandex.ru'; // Логин на почте
    $mail->Username   = 'buranov@seoprostor.ru'; // Логин на почте
    $mail->Password   = 'Samara2020'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('buranov@seoprostor.ru', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    $mail->addAddress('');
    // $mail->addAddress('director@seoprostor.ru');
    $mail->addAddress('buranov@seoprostor.ru');
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если надо
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // $amocrm = new Amocrm();
	// $amocrm->auth();
	// $Response = $amocrm->addLead('Заявка с сайта');

	// if(!empty($Response['_embedded']['items'][0]['id'])){
	// 	$leadsId = array($Response['_embedded']['items'][0]['id']);

	// 	$Response = $amocrm->addContact('', $phone, $leadsId);
		
	// 	if(!empty($text)){
    // 		$Response = $amocrm->addNotes($text, $leadsId[0]);
	// 	}
	// }

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

}  catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result]);
