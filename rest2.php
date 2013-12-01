<?php
	// #1 include json library and connect to mysql db
	include("JSON.php"); // depends on where
	$con = mysql_connect("studentdb@gl.umbc.edu","spoole2","spoole2")
	if(!$con){die('Could not connect: ' .mysql_error());}
	mysql_select_db("spoole2",$con);
/*
	// #2 parse the request url
	$url = $_SERVER['REQUEST_URI']; // get whole url - note that the demo resource is 'users'
	$http = $_SERVER['REQUEST_METHOD']; // get http method verb

	$p = parse_url($url); // http://php.net/manual/en/function.parse_url.php
	$q=explode('/', $p['query']); // http://www.w3schools.com/php/func_string_explode.asp
	$c=count($q); // length of array - lowest count is 2 - http://www.w3schools.com/php/func_array_count.php

	// #2 all legal combinations of http mehtod and url type for a rest api
	if ($q[1] != "Person") { // lockdown the mysql table
		header("Content-type: text/json", TRUE, 404); // http://php.net/manual/en/function.header.php
		echo("{error: Incorrrect table name}");
	}

	else if ($c < 3) { // no id in the url - e.g. http://host/index.php?/users - do not use a trailing slash
		if ($http == 'GET') { // GET method etc.
			$result = mysql_query("select * from $q[1]"); // sql query using table name from url
			$json=array(); // create blank array

			while ($row = mysql_fetch_assoc($result)) {$json[]=$row;} // add each row to array
			mysql_close($con); // close the db connection

			if (!result){ // $result returns false if the insert fails
				header("Content-type: text/json", TRUE, 500); // 500 is server error of any kind
				echo("{error: select failed}");
			} else {
				header("Content-type: text/json", TRUE, 200);
				$a = json_encode($json); transform array  to json using library function
				echo $a; // return the json string
			}
		}
		else if ($http == 'POST') {
			// http://www.w4schools.com/sql/sql_insert.asp - autoincrement
			// we are ignoring sql injection here - http://www.w3schools.com/php/func_mysql_real_escape_string.asp

			$name=$_POST['Name'];
			$age=$_POST['Age'];
			$salary=$POST['Salary'];
			$result = mysql_query("insert into $q[1] (name, age, salary) values ('$name','$age','$salary')");
			mysql_close($con);

			if (!result) { // $result returns false if insert fails
				header("Content-type: text/json", TRUE, 500);
				echo("{error: Insert failed}");
			} else {
				header("Content-type: text/json", TRUE, 201); // 201 means 'created'
			}
		}
		else {
			header("Content-type: text/json", TRUE, 500);
			echo("{error: Improper verb use}");
		}
	}

	else // has id in the url - note count will be 3 - e.g. http://host/index.php?/users/3
	{
		if ($http == 'GET') {
			$id=$_GET['id'];
			$result = mysql_query("select * from Person where id = $q[2]");
			mysql_close($con);

			if (!result) { // $result returns false if insert fails
				header("Content-type: text/json", TRUE, 500);
				echo("{error: select failed}");
			} else {
				header("Content-type: text/json", TRUE, 201); // 201 means 'created'
			}
		}
		else if ($http == 'PUT') { // PUT and DELETE only available with ajax or curl
			//http://www.w3schools.com/sql/sql_update.asp - must send all fields even if changing only one
			$input = file_get_contents('php://input'); // there is no $_PUT in php
			parse_str($input, $params); // all the input vars are in the params hash

			$name=$params['name'];
			$age=$params['age'];
			$salary=$params['salary'];
			$result = mysql_query("update $q[1] set name = '$name', age = '$age', salary = '$salary' where id = $q[2]");
			mysql_close($con);

			if (!result) { // $result returns false if insert fails
				header("Content-type: text/json", TRUE, 500);
				echo("{error: update failed}");
			} else {
				header("Content-type: text/json", TRUE, 201); // 201 means 'created'
			}
		} 
		else if ($http == 'DELETE'){
			$result = mysql_query("delete from Person where id = $q[1]");
			mysql_close($con);

			if (!result) { // $result returns false if insert fails
				header("Content-type: text/json", TRUE, 500);
				echo("{error: delete failed}");
			} else {
				header("Content-type: text/json", TRUE, 201); // 201 means 'created'
			}
		}
		else {
			header("Content-type: text/json", TRUE, 404);
			echo("{error: Improper verb use}");
		}
	}*/
?>