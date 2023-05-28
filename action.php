<?php
session_start();
date_default_timezone_set('Asia/Muscat');
ini_set('display_errors', 'On');
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

define('MAIL_HOST', 'DEBT Solutions');
define('MAIL_ID', 'no-reply@debtsolutionsgroup.ca');
define('SECRET_KEY', '6Ld9iRUmAAAAAJu_7e3ZdYeYOcn7_4_N2c1z4Eo0');
$self = basename($_SERVER['PHP_SELF']);
class System
{
    private $mail;
    /*
      * Contains the hours till the token expires.
      * @var int
      */
    public function __construct()
    {
        $this->mail = new PHPMailer(true);
    }
    public function contact_us($decoded = [])
    {
        $res['type'] = 'danger';
        $res['message'] = 'Error! There was an error while submitting the form. Please try again later';
        if (!is_array($decoded) || empty($decoded)) {
            $res['message'] = "Invalid Format. Please try again!";
            return $res;
        }
        $details['name'] = isset($decoded['name']) ? trim(strip_tags($decoded['name'])) : '';
        $details['email'] = isset($decoded['email']) ? trim(strip_tags($decoded['email'])) : '';
        $details['mobile'] = isset($decoded['phone']) ? trim(strip_tags($decoded['phone'])) : '';
        $details['message'] = isset($decoded['message']) ? trim(strip_tags(nl2br($decoded['message']))) : '';
        if (
            empty($details['name']) or
            empty($details['email'])
        ) {
            $res['message'] = "Required Fields were left empty. Please try again!";
            return $res;
        } elseif (!filter_var($details['email'], FILTER_VALIDATE_EMAIL)) {
            $res['message'] = "Error! Invalid email address.";
            return $res;
        } elseif (!empty($details['mobile']) && !preg_match('/^\+?\d+$/', $details['mobile'])) {
            $res['message'] = "Error! Invalid phone number.";
            return $res;
        } elseif (!$this->recaptcha_verify($decoded)) {
            $res['message'] = "Error! Bot Verification Failed.";
        } elseif ($this->_createEmailMessage($details)) {
            $res['type'] = 'success';
            $res['message'] = 'Your message has been sent successfully. Our team will get back to you soon!';
        }
        return $res;
    }

    public function recaptcha_verify($decoded = [])
    {
        $recaptcha = isset($decoded['recaptcha']) ? trim(strip_tags($decoded['recaptcha'])) : '';
        if (empty($recaptcha)) return FALSE;
        $google_url = "https://www.google.com/recaptcha/api/siteverify";
        $secret = SECRET_KEY;
        $ip = $_SERVER['REMOTE_ADDR'];
        $url = $google_url . "?secret=" . $secret . "&response=" . $recaptcha . "&remoteip=" . $ip;
        $res = file_get_contents($url);
        $res = json_decode($res, true);
        return isset($res['success']) ? $res['success'] : FALSE;
    }

    private function _createEmailMessage($data = [])
    {
        @file_put_contents('enquiryfortest55566cdfd.txt', json_encode($data) . PHP_EOL, FILE_APPEND | LOCK_EX);
        if (isset($data['form'])) {
            unset($data['form']);
        } else {
            $subject = "Website Enquiry";
        }
        $message = '<html><body style="font-family: sans-serif; font-size: 14px"><div><table><tbody><tr><td style="text-align: center"><h2>';
        $message .= $subject;
        $message .= '</h2></td></tr><tr><td><table border="1" cellpadding="2" cellspacing="0"><tbody>';
        foreach ($data as $k => $d) :
            if (!empty($d)) $message .= '<tr><td><p><b>' . ucfirst($k) . ':</b></p></td><td><p>' . nl2br(strip_tags($d)) . '</p></td></tr>';
        endforeach;
        $message .= '</tbody></table></td></tr></tbody></table></div></body></html>';
        return $this->_send_mail($subject, $message);
    }

    private function _send_mail($subject = '', $message = '')
    {
        $from_name = 'Website Enquiry';
        $from_mail = 'noreply@atriaaccounting.ca';
        try {
            $this->mail->isSMTP();
            $this->mail->SMTPDebug  = false;
            $this->mail->Host = 'smtp.live.com';
            $this->mail->SMTPAuth = TRUE;
            $this->mail->Username = 'noreply@atriaaccounting.ca';
            $this->mail->Password = 'Steelers#1990';
            $this->mail->SMTPSecure = 'tls';
            $this->mail->Port = 587;
            //Recipients
            $this->mail->setFrom($from_mail, $from_name);
            $this->mail->addAddress(MAIL_ID, MAIL_HOST);
            //Content
            $this->mail->isHTML(true);
            $this->mail->Subject = $subject;
            $this->mail->Body = $message;
            $this->mail->AltBody = strip_tags($message);
            return $this->mail->send();
        } catch (Exception $e) {
            return false;
        }
    }
}
$obj = new System();
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);
$responseArray = $obj->contact_us($decoded);
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
} else {
    echo $responseArray['message'];
}
