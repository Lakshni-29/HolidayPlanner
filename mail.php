<?php
$ch1 = $_POST['checkbox1'];
$ch3 = $_POST['checkbox3'];
$ch6 = $_POST['checkbox6'];
$ch7 = $_POST['checkbox7'];
$ch10 = $_POST['checkbox10'];

$str1="";
$str2="";
$str3="";
$str4="";
$str5="";
$str6="";
$str7="";
$str8="";
$str9="";
$str10="";

$a="\n";
$b="\n";
$c="\n";
$d="\n";
$e="\n";
$f="\n";
$g="\n";
$h="\n";
$i="\n";
$j="\n";
$h="\n";
if($ch1=='on')
{
    $str1="Explore Seoul on Foot";
}
else
{
    $a="";
}

if($ch3=='on')
{
    $str3="Visit Hanok village";
}
else
{
    $c="";
}

if($ch6=='on')
{
    $str6="Trip to Busan";
}
else
{
    $f="";
}
if($ch7=='on')
{
    $str7='Visit the third "Tunnel of Aggression"';
}
else
{
    $g="";
}

if($ch10=='on')
{
    $str10="visit Lotte World Amusement Park";
}
else
{
    $j="";
}
$abcd="Thank you for using our services. Your trip to South Korea has been successfully planned between 25-02-2022 to 06-03-2022.";
$abcde="Here's your bucketlist.Safe travels! ";

$abc="$abcd$h$abcde$h$str1$a$str2$str3$str4$str5$e$str6$f$str7$str8$str9$i$str10";
$to_email = "shilbhasathishkumar@gmail.com";
$subject = "Bon Voyage!";
$body = $abc;

$headers = "From: worldwidetravel007@gmail.com";

if (mail($to_email, $subject, $body, $headers)) {
    require 'mail.html';
} else {
    echo "Email sending failed...";
}
?>