<?php

$action = $_GET['action'];

if ($action == 'addNewSortingPage')
	addNewSortingPage();
else if ($action == 'getSortedPages')
	getSortedPages();
// else
// 	throw new Exception('Invalid action');

function addNewSortingPage() {

	$newSortingPageId = $_GET['newSortingPageId'];

	// if (!is_int($newSortingPageId))
// 		throw new Exception('page id is not valid');
// 
// 	if ($newSortingPageId < 0 || $newSortingPageId > 1000)
// 		throw new Exception('bad page id');
	$sortingPageIds = []
	$cookieData = unserialize($_COOKIE['sorted_pages']);
	if($cookieData) $sortingPageIds = $cookieData;
	$sortingPageIds[] = $newSortingPageId;

	setcookie('sorted_pages', serialize($sortingPageIds), 0);
	return;

	
	if (!file_exists('serverData/sortedPages')) {
		file_put_contents('serverData/sortedPages', 
						  json_encode(array($newSortingPageId)));
	} else {
		$sortingPageIds = json_decode(file_get_contents('serverData/sortedPages'));
		$sortingPageIds[] = $newSortingPageId;
		file_put_contents('serverData/sortedPages', 
						  json_encode($sortingPageIds));
	}
}

function getSortedPages() {
	$arr = [];
	$cookie = unserialize($_COOKIE['sorted_pages']);
	if($cookie) $arr = $data;
	echo json_encode($arr);
	return;
	if (!file_exists('serverData/sortedPages'))
		echo json_encode(array());

	echo file_get_contents('serverData/sortedPages');
}

?>