<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$RSVP = $_POST['RSVP'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($RSVP)) 
{
    echo "Name and RSVP are mandatory!";
    exit;
}


$email_from = 'nickandnikkigetmarried@gmail.com';//
$email_subject = "RSVP;
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n.$RSVP; \n $message".
    
$to = "nickandnikkigetmarried@gmail.com";//
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_from\r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 
