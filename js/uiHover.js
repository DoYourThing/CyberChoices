/**
 * C'tor
 */
function UIHover() { };

UIHover.prototype.tryAgainOnHover = function()
{
	$("#tryAgain").css('background', 'url(images/feedback_tryagain_h.png)');
};

UIHover.prototype.tryAgainOffHover = function()
{
	$("#tryAgain").css('background', 'url(images/feedback_tryagain.png)');
};

UIHover.prototype.removeHighlight = function()
{
	(router.getLanguage() == 'french'? $("#FrStory1").css('background', 'url(images/f_s_1.png)'):$("#story1").css('background', 'url(images/e_s_1.png)'));
	(router.getLanguage() == 'french'? $("#FrStory2").css('background', 'url(images/f_s_2.png)'):$("#story2").css('background', 'url(images/e_s_2.png)'));
	(router.getLanguage() == 'french'? $("#FrStory3").css('background', 'url(images/f_s_3.png)'):$("#story3").css('background', 'url(images/e_s_3.png)'));
	(router.getLanguage() == 'french'? $("#FrStory4").css('background', 'url(images/f_s_4.png)'):$("#story4").css('background', 'url(images/e_s_4.png)'));
};

UIHover.prototype.saveSelectedStory = function(storyId)
{
	$('.'+ (router.getLanguage() == 'french'? 'FrNext':'Next')).attr("id", "Next" + storyId);
};

UIHover.prototype.selectedStory = function(storyId)
{
	switch(storyId)
	{
		case 'Story1':
				uiHover.removeHighlight();
				uiHover.saveSelectedStory(storyId);
				(router.getLanguage() == 'french'? $("#FrStory1").css('background', 'url(images/f_s_1_h.png)'):$("#story1").css('background', 'url(images/e_s_1_h.png)'));
				playAudio.stopAudioPlaying();
				(router.getLanguage() == 'french'? playAudio.playFiles('f_s_1_1'):playAudio.playFiles('e_s_1_1'));
		break;
	
		case 'Story2':
				uiHover.removeHighlight();
				uiHover.saveSelectedStory(storyId);
				playAudio.stopAudioPlaying();
				(router.getLanguage() == 'french'? playAudio.playFiles('f_s_2_1'):playAudio.playFiles('e_s_2_1'));
				(router.getLanguage() == 'french'? $("#FrStory2").css('background', 'url(images/f_s_2_h.png)'):$("#story2").css('background', 'url(images/e_s_2_h.png)'));
		break;
	
		case 'Story3':
				uiHover.removeHighlight();
				uiHover.saveSelectedStory(storyId);
				playAudio.stopAudioPlaying();
				(router.getLanguage() == 'french'? playAudio.playFiles('f_s_3_1'):playAudio.playFiles('e_s_3_1'));
				(router.getLanguage() == 'french'? $("#FrStory3").css('background', 'url(images/f_s_3_h.png)'):$("#story3").css('background', 'url(images/e_s_3_h.png)'));
		break;
	
		case 'Story4':
				uiHover.removeHighlight();
				uiHover.saveSelectedStory(storyId);
				playAudio.stopAudioPlaying();
				(router.getLanguage() == 'french'? playAudio.playFiles('f_s_4_1'):playAudio.playFiles('e_s_4_1'));
				(router.getLanguage() == 'french'? $("#FrStory4").css('background', 'url(images/f_s_4_h.png)'):$("#story4").css('background', 'url(images/e_s_4_h.png)'));
		break;
	}
};

UIHover.prototype.homeOffHover = function(elementId)
{
	switch (elementId) 
	{
		case 'story1':
			$("#story1").css('background', 'url(images/e_s_1.png)');
		break;
		
		case 'story2':
			$("#story2").css('background', 'url(images/e_s_2.png)');
		break;
		
		case 'story3':
			$("#story3").css('background', 'url(images/e_s_3.png)');
		break;
		
		case 'story4':
			$("#story4").css('background', 'url(images/e_s_4.png)');
		break;

		case 'helpImage':
			$(".helpImage").css('background', 'url(images/e_h.png)');
			$(".FrhelpImage").css('background', 'url(images/f_h.png)');
		break;
		
		case 'optionsImage':
			$(".optionsImage").css('background', 'url(images/e_o.png)');
			$(".FroptionsImage").css('background', 'url(images/f_o.png)');
		break;
		
		case 'Home':
			$(".homeImage").css('background', 'url(images/e_c.png)');
			$(".FrHomeImage").css('background', 'url(images/f_c.png)');
		break;	
		
		case 'Next':
			$(".Next").css('background', 'url(images/e_n.png)');
			$(".FrNext").css('background', 'url(images/f_n.png)');
		break;	
		
		case 'backButton':
			$(".backButton").css('background', 'url(images/e_b.png)');
			$(".FrBackButton").css('background', 'url(images/f_b.png)');
		break;	
		
		case 'goHome':
			$("#goHome").css('background', 'url(images/feedback_gohome.png)');
			$("#FrgoHome").css('background', 'url(images/feedback_gohome_f.png)');
		break;
		
		case 'tryAgain':
			$("#tryAgain").css('background', 'url(images/feedback_tryagain.png)');
			$("#FrtryAgain").css('background', 'url(images/feedback_tryagain_f.png)');
		break;	
	}

	//$("#goHome").css('background', 'url(images/feedback_gohome.png)');
	
};

UIHover.prototype.homeOnHover = function(elementId)
{
	switch (elementId) {
		case 'story1':
			$("#story1").css('background', 'url(images/e_s_1_h.png)');
		break;
		
		case 'story2':
			$("#story2").css('background', 'url(images/e_s_2_h.png)');
		break;
		
		case 'story3':
			$("#story3").css('background', 'url(images/e_s_3_h.png)');
		break;
		
		case 'story4':
			$("#story4").css('background', 'url(images/e_s_4_h.png)');
		break;
		
		case 'helpImage':
			$(".helpImage").css('background', 'url(images/e_h_h.png)');
			$(".FrhelpImage").css('background', 'url(images/f_h_h.png)');
		break;
		
		case 'optionsImage':
			$(".optionsImage").css('background', 'url(images/e_o_h.png)');
			$(".FroptionsImage").css('background', 'url(images/f_o_h.png)');
		break;
		
		case 'Home':
			$(".homeImage").css('background', 'url(images/e_c_h.png)');
			$(".FrHomeImage").css('background', 'url(images/f_c_h.png)');
		break;
		
		case 'Next':
			$(".Next").css('background', 'url(images/e_n_h.png)');
			$(".FrNext").css('background', 'url(images/f_n_h.png)');
		break;
		
		case 'goHome':
			$("#goHome").css('background', 'url(images/feedback_gohome_h.png)');
			$("#FrgoHome").css('background', 'url(images/feedback_gohome_h_f.png)');
		break;
		
		case 'tryAgain':
			$("#tryAgain").css('background', 'url(images/feedback_tryagain_h.png)');
			$("#FrtryAgain").css('background', 'url(images/feedback_tryagain_h_f.png)');
		break;	
		
		case 'backButton':
			$(".backButton").css('background', 'url(images/e_b_h.png)');
			$(".FrBackButton").css('background', 'url(images/f_b_h.png)');
		break;
	}

	//$("#goHome").css('background', 'url(images/feedback_gohome_h.png)');
	

};

UIHover.prototype.askOffHover = function()
{
	$("#activeAsk").css('background', 'url(images/' + 
		(router.getLanguage() == 'french'? tabs.activeAskFr: tabs.activeAsk) + '.png)');
	$("#activeAsk").width((router.getLanguage() == 'french'? tabs.activeAskWidthFr: tabs.activeAskWidth)).height((router.getLanguage() == 'french'? tabs.activeAskHeightFr: tabs.activeAskHeight));
};

UIHover.prototype.postOffHover = function()
{
	$('#activePost').css('background', 'url(images/' + 
		(router.getLanguage() == 'french'? tabs.activePostFr: tabs.activePost) + '.png)');
	$("#activePost").width((router.getLanguage() == 'french'? tabs.activePostWidthFr: tabs.activePostWidth)).height((router.getLanguage() == 'french'? tabs.activePostHeightFr: tabs.activePostHeight));

};

UIHover.prototype.onHoverAsk = function()
{	
	$("#activeAsk").css('background', 'url(images/' + 
		(router.getLanguage() == 'french'? tabs.activeAskHoverFr: tabs.activeAskHover) + '.png)');
	$("#activeAsk").width((router.getLanguage() == 'french'? tabs.activeAskHoverFrWidth: tabs.activeAskHoverWidth)).height((router.getLanguage() == 'french'? tabs.activeAskHoverFrHeight: tabs.activeAskHoverHeight));
};

UIHover.prototype.onHoverPost = function()
{
	$('#activePost').css('background', 'url(images/' + 
		(router.getLanguage() == 'french'? tabs.activePostHoverFr: tabs.activePostHover) + '.png)');
	$("#activePost").width((router.getLanguage() == 'french'? tabs.activePostHoverFrWidth: tabs.activePostHoverWidth)).height((router.getLanguage() == 'french'? tabs.activePostHoverFrHeight: tabs.activePostHoverHeight));
};

