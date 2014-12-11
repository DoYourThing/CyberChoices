function updateHashTab(tabName)
{	
	var currentHashArray = location.hash.split('_');
	location.hash =  currentHashArray[0] + '_' + tabName ;
	getUpdatedHomePage();
};

function getUpdatedHomePage()
{
	var body = getNewHomeBody();
	$('#mainContainer').html(body);
};

function getNewHomeBody()
{
	var body = 
		'<div id="story1" onclick=javascript:router.updateHashTab("Story1")>'+
		'</div>'+
		'<div id="story2" onclick=javascript:router.updateHashTab("Story2") >'+
		'</div>'+
		'<div id="story3" onclick=javascript:router.updateHashTab("Story3") >'+
		'</div>'+
		'<div id="unlockedStory4" onclick=javascript:router.updateHashTab("Story4") >'+
		'</div>'+
		'<div id="unlockedStory5" onclick=javascript:router.updateHashTab("Story5") >'+
		'</div>'+
		'<div id="unlockedStory6" onclick=javascript:router.updateHashTab("Story6") >'+
		'</div>'+
		'<div class="helpImage">'+
		'</div>'+
		'<div class="optionsImage">'+
		'</div>';
	return body;
};

