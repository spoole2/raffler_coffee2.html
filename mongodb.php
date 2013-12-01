<?php
	$request = 'https://api.mongohq.com/databases/nettuts/collections/nettuts/documents?_aipkey=nqetflp8kvpv24j06826';

	// send request to the service using curl - http://us2.php.net/curl
	$ch = curl_init(); // initialize curl handle

	curl_setopt($ch, CURLOPT_URL, $request); // set url to variable above
	curl_setopt($ch, CURLOPT_FAILONERROR, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // allow redirects
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // return into variable
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // times out after 5 seconds
	curl_setopt($ch, CURLOPT_GET, 1); // set GET command
	curl_setopt($ch, CURLOPT_SSL_VERIFYPERR, 0); // certificate off

	if(($json=curl_exec($ch)) == false) // send request
		{echo 'Curl error: ' . curl_error($ch);} // check for error
		else
		{
			header("Content-type: application/json"); // set http header
			echo $json; // return json to backbone
		}

	curl_close($ch);
?>