function SortingPageAudio() {
};

SortingPageAudio.prototype.cardAudios = function(cardNumber)
{
	var page = tabs.page;
	var cardAudio = [];
	var card1Audio = page.card1Audio;
    var card2Audio = page.card2Audio;
    var card3Audio = page.card3Audio;
    var card4Audio = page.card4Audio;
    var card5Audio = page.card5Audio;
    var card6Audio = page.card6Audio;
    
    var FRcardAudio = [];
    
    for (var i=1; i<7 ; i++)
    {
    	FRcardAudio[i] = 'card' + i + 'Audio';
    }
    var FRcard1Audio = card1Audio.replace("e_", "f_");
    var FRcard2Audio = card2Audio.replace("e_", "f_");
    var FRcard3Audio = card3Audio.replace("e_", "f_");
    var FRcard4Audio = card4Audio.replace("e_", "f_");
    var FRcard5Audio = card5Audio.replace("e_", "f_");
    var FRcard6Audio = card6Audio.replace("e_", "f_");
 
    playAudio.stopAudioPlaying();
    
    if (cardNumber == '0')
    {
    	(router.getLanguage() == 'french'? playAudio.playFiles(FRcard5Audio):playAudio.playFiles(card5Audio));
	}
    else if(cardNumber == '1')
    {
    	(router.getLanguage() == 'french'? playAudio.playFiles(FRcard4Audio):playAudio.playFiles(card4Audio));
    }
    else if(cardNumber == '2')
    {
    	(router.getLanguage() == 'french'? playAudio.playFiles(FRcard3Audio):playAudio.playFiles(card3Audio));
    }
    else if(cardNumber == '3')
    {
    	(router.getLanguage() == 'french'? playAudio.playFiles(FRcard2Audio):playAudio.playFiles(card2Audio));
    }
    else if(cardNumber == '4')
    {
    	(router.getLanguage() == 'french'? playAudio.playFiles(FRcard1Audio):playAudio.playFiles(card1Audio));
    }
     else if(cardNumber == '5')
    {
    	(router.getLanguage() == 'french'? playAudio.playFiles(FRcard6Audio):playAudio.playFiles(card6Audio));
    }
};




SortingPageAudio.prototype.playHelpAudio = function()
{
	//tabs.checkVIStatus("sortingHelp","VISortingHelp","f_s_h_4","e_s_h_4","f_v_h_4","e_v_h_4");

	(router.VIStaus == 'OFF' ? tabs.showModal("sortingHelp"):tabs.showModal("VISortingHelp"));
	
	var modalID = router.VIStaus == 'OFF' ? "sortingHelp" : "VISortingHelp";
	tabs.showModal(modalID);

	var audioID = router.VIStaus == 'OFF' ? "e_s_h_4" : "e_v_h_4";
	
	playAudio.translateAndPlayWithCallback("e_g_h_3", sortingPageAudio.playClickXToClose);

	translator.translateAudioPath(audioID);

	playAudio.playFiles(audioID);

	$("#"+audioID).bind('ended', function(){
		$('.modal.fade.in').modal('hide');
	});
}



SortingPageAudio.prototype.playClickXToClose = function()
{
	playAudio.translateAndPlayWithCallback("e_v_h_2", function(){});
}

SortingPageAudio.prototype.sortingFirstVisit = function()
{
	var panelAudio = tabs.panelAudio;
	var VIpanelAudio = tabs.VIpanelAudio;
	var panelAudioFr = panelAudio.replace("e_", "f_");
	var VIpanelAudioFr = VIpanelAudio.replace("e_", "f_");
	
	sortingPageAudio.playDecisionTime();
	return;

	if($('#e_g_h_3').length > 0)
	{
		$("#e_g_h_3").bind('ended', function(){
				$('.modal.fade.in').modal('hide');
				playAudio.stopAudioPlaying();
				//tabs.showModal('VISortingHelp');
				sortingPageAudio.playIntro();
				return;

				
				(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_4'):playAudio.playFiles('e_v_h_4'));
				$("#e_v_h_4").bind('ended', function(){
					(router.VIStaus == 'OFF' ? playAudio.playFiles(panelAudio) : playAudio.playFiles(VIpanelAudio));
					$('.modal.fade.in').modal('hide');
					
					$("#"+panelAudio).bind('ended', function(){
						playAudio.playFiles(tabs.titleAudio);
					});
				});
		});
	}
	else if ($('#f_g_h_3').length > 0)
	{
		$("#f_g_h_3").bind('ended', function(){
			$('.modal.fade.in').modal('hide');
			playAudio.stopAudioPlaying();
			//tabs.showModal('VISortingHelp');
			sortingPageAudio.playIntro();
			return;
			
			tabs.showModal('VISortingHelp');
			(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_4'):playAudio.playFiles('e_v_h_4'));
			$("#f_v_h_4").bind('ended', function(){
				(router.VIStaus == 'OFF' ? playAudio.playFiles(panelAudioFr) : playAudio.playFiles(VIpanelAudioFr));
				$('.modal.fade.in').modal('hide');
					
				$("#"+panelAudioFr).bind('ended', function(){
					playAudio.playFiles(tabs.titleAudio.replace("e_", "f_"));
				});
			});
		});
	}
	else
	{
		$('.modal-open').modal('hide');
		sortingPageAudio.playIntro();
		//(router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? playAudio.playFiles(panelAudioFr):playAudio.playFiles(panelAudio)) : (router.getLanguage() == 'french'? playAudio.playFiles(VIpanelAudioFr):playAudio.playFiles(VIpanelAudio)));
	}
};
SortingPageAudio.prototype.playDecisionTime = function()
{
	playAudio.stopAudioPlaying();

	playAudio.translateAndPlayWithCallback("e_g_h_3", sortingPageAudio.showAndPlayHelp);	
}

SortingPageAudio.prototype.showAndPlayHelp = function()
{
	playAudio.stopAudioPlaying();
	$('.modal.fade.in').modal('hide');

	var modalID = router.VIStaus == 'OFF' ? "sortingHelp" : "VISortingHelp";
	tabs.showModal(modalID);

	var audioID = router.VIStaus == 'OFF' ? "e_s_h_4" : "e_v_h_4";
	playAudio.translateAndPlayWithCallback(audioID, sortingPageAudio.playSortingTitle);
}

SortingPageAudio.prototype.playSortingTitle = function()
{	
	playAudio.stopAudioPlaying();
	$('.modal.fade.in').modal('hide');

	playAudio.translateAndPlayWithCallback(tabs.titleAudio, sortingPageAudio.playPanelAudio);
}

SortingPageAudio.prototype.playPanelAudio = function()
{
	$('.modal.fade.in').modal('hide');
	playAudio.stopAudioPlaying();

	var audioID = router.VIStaus == 'OFF' ? tabs.panelAudio : tabs.VIpanelAudio;
	var onComplete = router.VIStaus == 'OFF' ? function(){} : sortingPageAudio.playFirstSortingCardAudio;
	playAudio.translateAndPlayWithCallback(audioID, onComplete);
}
SortingPageAudio.prototype.playFirstSortingCardAudio = function()
{
	$('.modal.fade.in').modal('hide');
	playAudio.stopAudioPlaying();

	sortingPageAudio.cardAudios(5);
}


SortingPageAudio.prototype.failedFirstTime = function()
{
	sortingPageAudio.playFailedResult(tabs.page.helpTextOneFr, tabs.page.helpTextOne);
}

SortingPageAudio.prototype.failedSecondTime = function()
{	
	sortingPageAudio.playFailedResult(tabs.page.helpTextTwoFr, tabs.page.helpTextTwo);
}

SortingPageAudio.prototype.playFailedResult = function(frenchID, englishID)
{
	$('.modal.fade.in').modal('hide');
	playAudio.stopAudioPlaying();

	var audioID 	= router.getLanguage() == 'french'? frenchID : englishID;
	var callback 	= router.VIStaus == 'OFF' ? function (){ } : router.loadSortingJSFile;

	playAudio.playWithCallback(audioID, callback);
}

SortingPageAudio.prototype.playCorrectResult = function()
{	
	$('.modal.fade.in').modal('hide');
	playAudio.stopAudioPlaying();

	var audioID  = router.getLanguage() == 'french' ? tabs.page.correctSortFeedbackFrAudio : tabs.page.correctSortFeedbackAudio;
	var callback = (router.VIStaus == 'OFF') ? sortingPageAudio.playSortingFinished : sortingPageAudio.playSortingFinishedVI; 

	playAudio.playWithCallback(audioID, callback);
}

SortingPageAudio.prototype.playSortingFinished = function()
{	
	playAudio.stopAudioPlaying();	
	$('.modal.fade.in').modal('hide');
	
	var audioID  = router.getLanguage() == 'french'? "f_1_2_s_s" : "e_1_2_s_s";
	playAudio.playFiles(audioID);	
}
SortingPageAudio.prototype.playSortingFinishedVI = function()
{	
	playAudio.stopAudioPlaying();
	$('.modal.fade.in').modal('hide');

	var audioID  = router.getLanguage() == 'french'? tabs.page.correctSortFeedbackVIAudio.replace("e_","f_") : tabs.page.correctSortFeedbackVIAudio;
	playAudio.playFiles(audioID);
}

SortingPageAudio.prototype.setSortingHelpContent = function(){
	var failCounter = tabs.failCounter;
	return failCounter;
};



//deprecated
// SortingPageAudio.prototype.correctFeedbackAudio = function(correctSortFeedbackVIAudio,correctSortFeedbackFrAudio,correctSortFeedbackAudio){
	
// 	$("#"+correctSortFeedbackVIAudio).bind('ended', function(){
// 		playAudio.playFiles(correctSortFeedbackVIAudio);
// 	});
// };




