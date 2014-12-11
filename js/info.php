<?php
	$filename = 'hash.txt';
	
	if (isset($_POST['hash']))
	{
		$sentHashArray = $_POST['hash'] . "\n";
		file_put_contents($filename, $sentHashArray , FILE_APPEND);
	}

	$data = explode("\n", file_get_contents($filename));

	echo json_encode($data[count($data)-2]);
?>