<?php

   $to      = 'contact@midnight-arts.com';
   $subject = 'Practicing';
   $message = 'Kailey practiced for a long time';
   $headers = 'From: contact@midnight-arts.com' . "\r\n" .
    'Reply-To: contact@midnight-arts.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers); 

?>