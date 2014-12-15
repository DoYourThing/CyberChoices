/**
 * Tabs class C'tor.
 */
function Tabs() {
    this.initialize();
};

/**
 * This function initializes the object, setting all counters to their initial value.
 */
Tabs.prototype.initialize = function () {
	this.activeAsk = '';
	this.activePost = '';
	this.sceneArrrayCounter = 0;
	this.askCounter = 0;
	this.postCounter = 0;
	this.currentPageIndex = -1;
	this.currentFrameIndex = -1;
	this.currentBubbleIndex = undefined;
	this.dropCounter = 0;
	this.cardCounter = -1;
	this.left = 32;
	this.top = 70;
	this.askLeft = 35;
	this.askTop = 83;
	this.postLeft = 735;
	this.postTop = 83;
	this.newCounter = 0;
	this.sortingVisit = 0;
/*
	this.action = '';
	this.hashInfo = '';
	this.newPageIndex = '';
	this.newFrameIndex = '';
	this.newBubbleIndex = '';
*/
	this.myArray = Array();
	this.wrapUpArray = Array();
	this.sceneArray = Array();
	this.sceneArray[0] = '0';
	this.activeAskScene = 0;
	this.activePostScene = 0;
	this.clickCode = 0;
	this.keyboardCounter = 0;
	this.stopAllAudios = 'false';
};

/**
 * Sets storyData. This can not happen in initialize, since it requires an asynchronous
 * call to the server.
 */
Tabs.prototype.setStoryData = function (storyData) {
    this.storyData = storyData;
};

Tabs.prototype.showHelpModal = function () {
    $('#story1HelpModal').modal('show');
    $('#story4HelpModal').modal('show');
};

Tabs.prototype.showModal = function(modalId)
{
	$('#' + modalId).modal('show');
};

/**
 * Implements previous button click.
 */
Tabs.prototype.clickPrevious = function () {
	tabs.stopAllAudios = 'false';
	var audioArray = playAudio.audioArray;
	
	audioArray = audioArray.splice(-1,1);
	router.audioCounter = router.audioCounter - 1;
	
	 var currentHashArray = location.hash.split('_');
	
	if (currentHashArray[2] == 0)
	{
		router.updateHashTab("Home");
	}
	else
	{
		router.setClickHash(parseInt(router.getClickCounter()) - 1, 'previous');
	}
};

/**
 * Implements next button click.
 */
Tabs.prototype.clickNext = function () {
	tabs.stopAllAudios = 'false';
	router.setClickHash(parseInt(router.getClickCounter()) + 1, 'next');
};

/**
 * This function calculates where we are, and send the user to the new state.
 *
 * @param action The action taken, which can be either "next" or "previous"
 */
Tabs.prototype.getTargetLocation = function (clickCounter, action) {
	var sceneArray = router.getScenesFromHash();

    var remainingClicks = clickCounter;

	for (var i = 0; i < sceneArray.length; i++) 
	{
		var pages = this.storyData.scene[sceneArray[i]].pages;
		
		for (var pageIndex = 0; pageIndex < pages.length; pageIndex++) 
		{
			var hashInfo = pages[pageIndex].hashInfo;
			
			if (hashInfo != 'content') 
			{	
				remainingClicks--;
		
				if (remainingClicks == 0) 
				{						
					tabs.goToNewState(action, hashInfo, pageIndex, frameIndex, bubbleIndex);
					return;
				}
			
				continue;
			}
			
			var frames = pages[pageIndex].frames;
	   
			for (var frameIndex = 0; frameIndex < frames.length; frameIndex++) 
			{
				remainingClicks = remainingClicks -1;
				if (remainingClicks == 0)
				{
					this.goToNewState(action, hashInfo, pageIndex, frameIndex, bubbleIndex);
					return;
				}

				var bubbles = frames[frameIndex].bubbles;
				
				if (typeof bubbles != 'undefined')
		   		{
					for (var bubbleIndex = 0; bubbleIndex < bubbles.length; bubbleIndex++) {
		   
						remainingClicks = remainingClicks - 1;
						if (remainingClicks == 0) 
						{
							this.goToNewState(action, hashInfo, pageIndex, frameIndex, bubbleIndex);
							return;
						}
					}
					
					bubbleIndex = undefined;
				}
			}  
    	}
	}
};

/**
 * Given the location in story line, this function gets the user to that place
 *
 * @param action The action taken, which can be "previous" or "next"
 */
Tabs.prototype.goToNewState = function (
    action, hashInfo, newPageIndex, newFrameIndex, newBubbleIndex) 
{
	// console.log([action, hashInfo, newPageIndex, newFrameIndex, newBubbleIndex]);	

    /**
     * 1. Fix the page
     * 2. Fix the frame
     * 3. Fix the bubble.
     */

    // 1.
    this.gotoNewPage(action, hashInfo, newPageIndex, newFrameIndex, newBubbleIndex);

	var isContent = ((hashInfo != 'sorting') && (hashInfo != 'coverUp') && 
		(hashInfo != 'wrapUp') && (hashInfo != 'feedback'));

    if (isContent) {
		// 2.
        if (action == 'previous')
         	tabs.drawFrame(newPageIndex, newFrameIndex);
         else if (action == 'next') 
         	tabs.drawFrame(newPageIndex, newFrameIndex);
    	// 3.
	   	this.addBubbles(newPageIndex, newFrameIndex, newBubbleIndex);
    }
};

Tabs.prototype.checkVIStatus = function(sightedVar,VIVar,FrSightedAudio,EnSightedAudio,FrVIAudio,EnVIAudio)
{
	(router.VIStaus == 'OFF' ? tabs.showModal(sightedVar):tabs.showModal(VIVar));
	(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.playFiles(FrVIAudio):playAudio.playFiles(EnVIAudio)));
	var panelAudio = tabs.panelAudio;
};

Tabs.prototype.gotoNewPage = function (action, hashInfo, newPageIndex, newFrameIndex, newBubbleIndex) 
{
	//console.log([action, hashInfo, newPageIndex, newFrameIndex, newBubbleIndex]);

	var page = this.storyData.scene[router.getCurrentScene()].pages[newPageIndex];
	this.page = page;
	this.storyId = this.storyData.storyId;
    var hashInfo = page.hashInfo;
    this.FrenchTitleImage = this.storyData.FrenchTitleImage;
    this.EnglishTitleImage = this.storyData.EnglishTitleImage;
    this.storyBackgroundimageFr = page.storyBackgroundimageFr;
    this.storyBackgroundimage = page.storyBackgroundimage;
    this.activeAskFr = page.activeAskFr;
    this.activePostFr = page.activePostFr;
    this.activeAsk = page.activeAsk;
    this.activePost = page.activePost;
    this.activeAskLeftFr = page.activeAskLeftFr;
    this.activeAskTopFr = page.activeAskTopFr;
    this.activePostTopFr = page.activePostTopFr;
    this.activePostLeftFr = page.activePostLeftFr;
    this.activeAskHeightFr = page.activeAskHeightFr;
    this.activeAskWidthFr = page.activeAskWidthFr;
    this.activePostWidthFr = page.activePostWidthFr;
    this.activePostHeightFr = page.activePostHeightFr;
    
    this.activeAskHover = page.activeAskHover;
    this.activePostHover = page.activePostHover;
    this.activeAskHoverFr = page.activeAskHoverFr;
    this.activePostHoverFr = page.activePostHoverFr;
    this.yellowCard = page.yellowCard;
    this.yellowBox1Left = page.yellowBox1Left;
    this.yellowBox1Top = page.yellowBox1Top;
    this.blueCard = page.blueCard;    
    this.e_1_1_r_1 = page.e_1_1_r_1;
    this.e_1_1_r_2 = page.e_1_1_r_2;
    this.e_1_1_r_3 = page.e_1_1_r_3;
    this.e_1_1_r_4 = page.e_1_1_r_4;
    this.e_1_1_r_5 = page.e_1_1_r_5;
    this.e_1_1_r_6 = page.e_1_1_r_6;    
    this.blueBox6Left = page.blueBox6Left;
    this.blueBox6Top = page.blueBox6Top;
 
    this.panelAudio = page.panelAudio;
    this.VIpanelAudio = page.VIpanelAudio;
    this.purpleBox = page.purpleBox;
    this.purpleBoxText = page.purpleBoxText;
    this.helpContent1 = page.helpContent1;
    this.helpContent2 = page.helpContent2;
	this.titleAudio = page.titleAudio;
	
	var characterImage = page.characterImage;
	
	var e_1_6_w_1 = page.e_1_6_w_1;
	var e_1_6_w_2 = page.e_1_6_w_2;
	this.e_1_6_w_2 = e_1_6_w_2;
	var e_1_6_w_3 = page.e_1_6_w_3;
	this.e_1_6_w_3 = e_1_6_w_3;
	var ENhappyFace = page.ENhappyFace;
	var ENsadFace = page.ENsadFace;
	var ENmadFace = page.ENmadFace;
	var ENworriedFace = page.ENworriedFace;
	var ENguiltyFace = page.ENguiltyFace;
	
	var	happyFaceFr = page.happyFaceFr;
	var sadFaceFr = page.sadFaceFr;
	var madFaceFr = page.madFaceFr;
	var worriedFaceFr = page.worriedFaceFr;
	var guiltyFaceFr = page.guiltyFaceFr;
	
	var blueBox = page.blueBox;
	var emoticonsTop = page.emoticonsTop;
	this.correctSortFeedback = page.correctSortFeedback;
	var happyFaceLeft = page.happyFaceLeft;
	var madFaceLeft = page.madFaceLeft;
	var sadFaceLeft = page.sadFaceLeft;
	var worriedFaceLeft = page.worriedFaceLeft;
	var guiltyFaceLeft = page.guiltyFaceLeft;
	var solvedPageId = page.solvedPageId;
	this.solvedPageId = page.solvedPageId;
	var seenWrapUp = page.seenWrapUp;
	this.activeAskLeft  = page.activeAskLeft;
	this.activeAskTop = page.activeAskTop;
	this.activePostTop = page.activePostTop;
	this.activePostLeft = page.activePostLeft;
	this.activeAskHeight = page.activeAskHeight;
	this.activeAskWidth = page.activeAskWidth;
	this.activePostWidth = page.activePostWidth;
	this.activePostHeight = page.activePostHeight;
	this.pageTitle = page.pageTitle;
	this.characterImage = page.characterImage;
	this.inactiveCharacter = page.inactiveCharacter;
    this.failCounter =0;
    this.solvedPageId = solvedPageId;
    var activeAskScene = page.activeAskScene;
	var activePostScene = page.activePostScene;
	this.activeAskScene = activeAskScene;
	this.activePostScene = activePostScene;
	this.activeAskHoverWidth = page.activeAskHoverWidth; 
	this.activeAskHoverHeight= page.activeAskHoverHeight ; 
    this.activePostHover= page.activePostHover ; 
    this.activePostHoverWidth= page.activePostHoverWidth ; 
    this.activePostHoverHeight= page.activePostHoverHeight ; 
	
	this.activeAskHoverFrWidth = page.activeAskHoverFrWidth;
	this.activeAskHoverFrHeight = page.activeAskHoverFrHeight;
	this.activePostHoverFrWidth = page.activePostHoverFrWidth;
	this.activePostHoverFrHeight = page.activePostHoverFrHeight;
	
	var secondCharacter = page.secondCharacter;
	var thirdCharacter = page.thirdCharacter;
	var thirdCharacterFaceSlot = page.thirdCharacterFaceSlot;
	var secondCharacterFaceSlot = page.secondCharacterFaceSlot;
	var firstCharacter = page.firstCharacter;

	this.card6Audio = page.card6Audio;
    this.blueBoxAudio = page.blueBoxAudio;
    this.feedbackAudio = page.feedbackAudio;
    if (hashInfo == 'sorting') 
    {
    	router.pageInfo('sorting');
		router.loadSortingJSFile();

       
    }
    
    else if (hashInfo == 'coverUp') 
    {
    	router.pageInfo('coverUp');
        $('#mainContainer').empty();
        $("#mainContainer").append(htmlFactory.getCoverUpBody(page)).fadeIn('slow');
    }
    
    else if (hashInfo == 'content') 
    {
    		router.pageInfo('content');
		if (this.storyId == 'storyLine1')
		{
			$("#mainContainer").html(htmlFactory.getStory1Page());
		}
		else if (this.storyId == 'storyLine2')
		{
			$("#mainContainer").html(htmlFactory.getStory2Page());
		}
		else if (this.storyId == 'storyLine3')
		{
			$("#mainContainer").html(htmlFactory.getStory3Page());
		}
		else if (this.storyId == 'storyLine4')
		{
			$("#mainContainer").html(htmlFactory.getStory4Page());
		}
    }
    
  	else if (hashInfo == 'wrapUp')
    {
  		router.pageInfo('wrapUp');
  		this.action = action;
		this.hashInfo = hashInfo;
		this.newPageIndex = newPageIndex;
		this.newFrameIndex = newFrameIndex;
		this.newBubbleIndex = newBubbleIndex;
		this.character1 = page.character1;
		this.character2 = page.character2;
		this.character3 = page.character3;
		var blueBoxAudio = this.blueBoxAudio = page.blueBoxAudio;
		blueBoxAudio = router.getLanguage() == 'french' ? blueBoxAudio.replace("e_", "f_") : blueBoxAudio;
	    wrapUp.getCharacters(page);
	    wrapUp.setActiveCharacter();	

    	if ((tabs.wrapUpArray[tabs.seenWrapUp])=='checked')
    	{
    		$('.modal-backdrop').remove();
    		var body =
    	 		'<div style="background: url(images/' + 
					tabs.storyBackgroundimage + '.png) no-repeat center;  width: 1024px; height: 768px;">' +
					'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="tabs.clickNext();"' +
				' onmouseout=uiHover.homeOffHover("Next"); ' + 
			' onmouseover=uiHover.homeOnHover("Next"); ></div>'+
				'<div id="title" style="background: url(images/' + 	 
					(router.getLanguage() == 'french'? this.FrenchTitleImage:this.EnglishTitleImage) + '.png) no-repeat center;">'+
				'</div>'+
				'<div class="' + firstCharacter +'_wrapup">'+
					'<div id="SashaFaceSlot" class="' + tabs.character1 + '_neutral">'+
						'<div class="sasha_name"></div>'+
					'</div>'+
				'</div>'+

				'<div class="' + secondCharacter + '">'+
					'<div id="maxFaceSlot" class="' + secondCharacterFaceSlot + '">'+
						'<div class="max_name"></div>'+
					'</div>'+
				'</div>'+
				
				'<div class="' + thirdCharacter + '">'+
					'<div id="thirdFaceSlot" class="' + thirdCharacterFaceSlot + '">'+
					'</div>'+
				'</div>'+
				'<div id="bluebox" style="position:absolute; left:98px; top:70px;" '+
					' onclick=javascript:playAudio.playFiles("'+ blueBoxAudio +'"); >'+
					'<div class="cc_text f18 blueTextBox">'+
						translator.T(e_1_6_w_1) +
					'</div>'+
					'<div id="secondText" class="cc_text f18 blueTextBox" '+
						'style="display: none; position:absolute; left:40px; top:110px;">'+
						translator.T(e_1_6_w_2) +
					'</div>'+
					'<div id="thirdText" class="cc_text f18 blueTextBox" '+
						'style="display: none; position:absolute; left:40px; top:150px;">'+
						translator.T(e_1_6_w_3) +
					'</div>'+
				'</div>' +
				'<div id="happy" class="emoticons selected"  onclick=wrapUp.emotoiconClick("happy"); '+
					'style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_happy_emoticon_inactive':'e_1_1_w_h') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					happyFaceLeft + 'px; top:' +  emoticonsTop + 'px;"></div>' +
				'<div id="mad" class="emoticons"  onclick=wrapUp.emotoiconClick("mad"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_mad_emoticon_inactive':'e_1_1_w_m') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					madFaceLeft + 'px; top:' +  emoticonsTop + 'px;"></div>' +
				'<div id="sad" class="emoticons" onclick=wrapUp.emotoiconClick("sad"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_sad_emoticon_inactive':'e_1_1_w_s') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					sadFaceLeft + 'px; top:' + emoticonsTop + 'px;"></div>' +
				'<div id="worried" class="emoticons" onclick=wrapUp.emotoiconClick("worried"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_worried_emoticon_inactive':'e_1_1_w_w') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					worriedFaceLeft + 'px; top:' + emoticonsTop + 'px;"></div>' +
				'<div id="guilty" class="emoticons" onclick=wrapUp.emotoiconClick("guilty"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_guilty_emoticon_inactive':'e_1_1_w_g') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					guiltyFaceLeft + 'px; top:' + emoticonsTop + 'px;"></div>' +
				'<div class="modal fade" id="wrapupPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('wrapupPageHelp')):htmlFactory.getModalContent('wrapupPageHelp')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
               
                '<div class="modal fade" id="optionModal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                
                (router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('optionModal')):htmlFactory.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="modal fade" id="VIWrapUpHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +											
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=javascript:playAudio.playFiles("card1");>&times;</button>' +
							'<h4 class="modal-title" id="myModalLabel"></h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('VIWrapUpHelp')):htmlFactory.getModalContent('VIWrapUpHelp')) + 	
						'</div>' +
						'<div class="modal-footer modalFooterSize">' +
							'<button type="button" class="btn btn-default restartButton" data-dismiss="modal"onclick="router.loadSortingJSFile(); init();" >Play Again</button>' +
						'</div>' +
					'</div>' +
				'</div>' +
            '</div>' +
                '<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.checkVIStatus("wrapupPageHelp","VIWrapUpHelp","f_s_h_6","e_s_h_6","f_v_h_6","e_v_h_6"); '+
			' onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
    			'<div class="' + 
			(router.getLanguage() == 'french'? 'FroptionsImage':'optionsImage') +
			'" onclick=javascript:tabs.showModal("optionModal"); '+ 
			' onmouseout=uiHover.homeOffHover("optionsImage"); '+
			'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
   				 '<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+

				'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + 
			 '" onclick=tabs.clickPrevious(); ' +
			' onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			'<div class="' + 
            '</div>';
    	} 
    	else 
    	{
    		$('.modal-backdrop').remove();
    	  var body = 
            '<div style="background: url(images/' + tabs.storyBackgroundimage + 
				'.png) no-repeat center;  width: 1024px; height: 768px;">' +
				'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') +
				 '" onclick="tabs.clickNext();"' +
				'" onmouseout=uiHover.homeOffHover("Next"); ' + 
			' onmouseover=uiHover.homeOnHover("Next"); ></div>'+
				'<div id="title" style="background: url(images/' + 
					(router.getLanguage() == 'french'? this.FrenchTitleImage:this.EnglishTitleImage) + '.png) no-repeat center;">'+
				'</div>'+
				'<div class="' + firstCharacter + '_wrapup">'+
					'<div id="SashaFaceSlot" class="' + tabs.character1 + '_neutral">'+
						'<div class="sasha_name"></div>'+
					'</div>'+
				'</div>'+

				'<div class="' + secondCharacter +'">'+
					'<div id="maxFaceSlot" class="' + secondCharacterFaceSlot + '">'+
						'<div class="max_name"></div>'+
					'</div>'+
				'</div>'+
				'<div class="' + thirdCharacter + '">'+
					'<div id="thirdFaceSlot" class="' + thirdCharacterFaceSlot + '">'+
					'</div>'+
				'</div>'+

				'<div id="bluebox" style="position:absolute; left:98px; top:70px;" '+
					' onclick=javascript:playAudio.playFiles("' + blueBoxAudio +'"); >'+
					'<div class="cc_text f18 blueTextBox">'+
						translator.T(e_1_6_w_1) +
					'</div>'+
					'<div id="secondText" class="cc_text f18 blueTextBox" ' + 
						'style="display: none; position:absolute; left:40px; top:110px;">'+
						translator.T(e_1_6_w_2) +
					'</div>'+
					'<div id="thirdText" class="cc_text f18 blueTextBox" '+
						'style="display: none; position:absolute; left:40px; top:150px;">'+
						translator.T(e_1_6_w_3) +
					'</div>'+
				'</div>' +                                     
				'<div id="happy" class="emoticons selected"  onclick=wrapUp.emotoiconClick("happy"); '+
					'style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_happy_emoticon_inactive':'e_1_1_w_h') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					happyFaceLeft + 'px; top:' +  emoticonsTop + 'px;"></div>' +
				'<div id="mad" class="emoticons"  onclick=wrapUp.emotoiconClick("mad"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_mad_emoticon_inactive':'e_1_1_w_m') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					madFaceLeft + 'px; top:' +  emoticonsTop + 'px;"></div>' +
				'<div id="sad" class="emoticons" onclick=wrapUp.emotoiconClick("sad"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_sad_emoticon_inactive':'e_1_1_w_s') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					sadFaceLeft + 'px; top:' + emoticonsTop + 'px;"></div>' +
				'<div id="worried" class="emoticons" onclick=wrapUp.emotoiconClick("worried"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_worried_emoticon_inactive':'e_1_1_w_w') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					worriedFaceLeft + 'px; top:' + emoticonsTop + 'px;"></div>' +
				'<div id="guilty" class="emoticons" onclick=wrapUp.emotoiconClick("guilty"); style="background: url(images/' + 
					(router.getLanguage() == 'french'? 'french_guilty_emoticon_inactive':'e_1_1_w_g') + 
					'.png) no-repeat center;  width: 268px; height: 258px; position:absolute; left:' + 
					guiltyFaceLeft + 'px; top:' + emoticonsTop + 'px;"></div>' +
				'<div class="modal fade" id="wrapupPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('wrapupPageHelp')):htmlFactory.getModalContent('wrapupPageHelp')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="modal fade" id="evaluationModalFail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); init();">Play Again</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
				'<div class="modal fade" id="wrapupPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('wrapupPageHelp')):htmlFactory.getModalContent('wrapupPageHelp')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="modal fade" id="wrapUpFirstVisit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
							'<h4 class="modal-title" id="myModalLabel"></h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('wrapUpFirstVisit')):htmlFactory.getModalContent('wrapUpFirstVisit')) + 	
						'</div>' +
						'<div class="modal-footer modalFooterSize">' +
							'<button type="button" class="btn btn-default restartButton" data-dismiss="modal"onclick="router.loadSortingJSFile(); init();" >Play Again</button>' +
						'</div>' +
					'</div>' +
				'</div>' +
            '</div>' +
                '<div class="modal fade" id="evaluationModalFail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); init();">Play Again</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="modal fade" id="VIWrapUpHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +											
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=javascript:playAudio.playFiles("card1");>&times;</button>' +
							'<h4 class="modal-title" id="myModalLabel"></h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('VIWrapUpHelp')):htmlFactory.getModalContent('VIWrapUpHelp')) + 	
						'</div>' +
						'<div class="modal-footer modalFooterSize">' +
							'<button type="button" class="btn btn-default restartButton" data-dismiss="modal"onclick="router.loadSortingJSFile(); init();" >Play Again</button>' +
						'</div>' +
					'</div>' +
				'</div>' +
            '</div>' +
                '<div class="modal fade" id="optionModal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                
                (router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('optionModal')):htmlFactory.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +					
			'" onclick=javascript:tabs.checkVIStatus("wrapupPageHelp","VIWrapUpHelp","f_s_h_6","e_s_h_6","f_v_h_6","e_v_h_6"); '+
			'" onclick=javascript:tabs.showModal("wrapupPageHelp"); '+
			' onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
    			'<div class="' + 
			(router.getLanguage() == 'french'? 'FroptionsImage':'optionsImage') +
			'" onclick=javascript:tabs.showModal("optionModal"); '+ 
			' onmouseout=uiHover.homeOffHover("optionsImage"); '+
			'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
	
				'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + 
			 '" onclick=tabs.clickPrevious(); ' +
			' onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			'<div class="' + 
				'<div class="' + 
					(router.getLanguage() == 'french'? 'FrNext':'Next') + 
					'" onclick="tabs.clickNext();">' +
				'</div>' +
				
            '</div>';
    
  	    	//$("#mainContainer" ).attr("checked", false);
        }
      
		$("#mainContainer").html(body);
		router.loadWrapUpJSFile();
		(router.getLanguage() == 'french'? playAudio.playFiles('f_g_h_5'):playAudio.playFiles('e_g_h_5'));
		
		wrapUp.wrapUpFirstVisit()
		
	}
	
	else if (hashInfo == 'feedback')
	{	
		router.pageInfo('feedback');
		this.feedbackAudio = page.feedbackAudio;
		tabs.newCounter = 0;
		$('#mainContainer').empty();
     	$("#mainContainer").append(htmlFactory.getFeedbackPage(page)).fadeIn('fast');
     	(router.VIStaus == 'OFF' ? '':tabs.showModal('VIFeedbackHelp') );
     	wrapUp.feedbackFirstVisit();
     	tabs.wrapUpArray[this.seenWrapUp] = 'checked';
     	$("#mainContainer" ).attr("checked", false);
	}
};

Tabs.prototype.drawFrame = function (newPageIndex, newFrameIndex) 
{	
    $("#mainContainer").find('#title').remove();
    var frame = this.storyData.scene[router.getCurrentScene()].pages[newPageIndex].frames[newFrameIndex];
    var frameInfo = frame.image;
    var frImage = frame.frImage;
    var panelAudio = frame.panelAudio;
  
    if (typeof frImage == 'undefined')
    {
    	frImage = frameInfo;
    }
    
    this.storyNumber = this.storyData.storyNumber;
    
    var newFrame = 
    	'<div id="title" style="background: url(images/' + 
			(router.getLanguage() == 'french'? this.FrenchTitleImage:this.EnglishTitleImage) +
			'.png) no-repeat center;">'+
    	'</div>';
  	
    $('#' + tabs.storyNumber).append(newFrame);
    
    $('#' + tabs.storyNumber).css({
        'background-image': 'url(images/' + (router.getLanguage() == 'french'? frImage: frameInfo) + '.jpg)'
    });
   
    var panelAudioFr = panelAudio.replace("e_", "f_");
	this.audioCounter ++;

	(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.CheckPlayedAudios(panelAudioFr):playAudio.CheckPlayedAudios(panelAudio)));
	
	if (tabs.stopAllAudios == 'newFrame')
	{
		(router.getLanguage() == 'french'? playAudio.CheckPlayedAudios(panelAudioFr):playAudio.CheckPlayedAudios(panelAudio));
		(router.getLanguage() == 'french'? playAudio.playFiles(panelAudioFr):playAudio.playFiles(panelAudio));
	}
};

Tabs.prototype.addBubbles = function(pageIndex, frameIndex, bubbleIndex) {
	var page = this.storyData.scene[router.getCurrentScene()].pages[pageIndex];
	
	for (var i = 0 ; i <= frameIndex; i++) {
		if (i == frameIndex) {
			for (var j = 0; j <= bubbleIndex; j++)
				this.createBubbleFromJson(pageIndex, i, j);
		
		} else if (i != frameIndex) {
		   	 var numberOfBubbles = page.frames[i].bubbles.length;
				for (var j = 0; j < numberOfBubbles; j++)
					this.createBubbleFromJson(pageIndex, i, j);
		}
	}
};

Tabs.prototype.createBubbleFromJson = function (pageIndex, frameIndex, currentBubbleIndex) 
{
	var page = this.storyData.scene[router.getCurrentScene()].pages[pageIndex];
    var bubble = page.frames[frameIndex].bubbles[currentBubbleIndex];
    var bubbleClass = bubble.divClass;
    var bubbleContent = bubble.bubbleContent;
    var bubbleId = bubble.id;
    var bubbleAudioInfo = bubble.audioInfo;
    var bubbleFontClass = bubble.bubbleFontClass;
    var left = bubble.left;
    var top = bubble.top;
    var parentClass = bubble.parentClass;
    var padding = bubble.padding;
    var counter = bubble.counter;
	var parentClassId = bubble.parentClassId;
	
	this.audioCounter ++;
	var bubbleAudioInfoFr = bubbleAudioInfo.replace("e_", "f_");
	if (bubbleAudioInfoFr == 'f_1_6_1_1_2')
	{
		bubbleAudioInfoFr = 'f_1_3_1_2_2';
	}
	
	(router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? playAudio.CheckPlayedAudios(bubbleAudioInfoFr):playAudio.CheckPlayedAudios(bubbleAudioInfo)):(router.getLanguage() == 'french'? playAudio.CheckPlayedAudios(bubbleAudioInfoFr):playAudio.CheckPlayedAudios(bubbleAudioInfo)));

	if (parentClass == 'tt_bg')
	{
		if (counter == 0)
		{	
			$(".tt_bg").attr("class", "tt_bg1");
		
			 var newEl = 
				'<div class="' + parentClass + '" id="' + parentClassId + 
					' " style="position:absolute; left:' + left + '; top:' + top + ';">' +
					'<div class="' + bubbleClass + '" >' +
						'<p class="' + bubbleFontClass + '" >' +
							translator.T(bubbleContent) +  
						'</p>'+
					'</div>'+
				'<div>';

		} else if (counter == 1){
			$(".tt_bg").append('<div class="' + bubbleClass + '" >' +
				'<p class="' + bubbleFontClass + '" >' +
					translator.T(bubbleContent) +  
				'</p>'+
			'</div>');			
		}
		
 
	}
	else if (parentClass == 'ic_s' || parentClass == 'ic_m' || parentClass == 'ic_l' || parentClass == 'ic_vs' || parentClass == 'ic_ml' ||parentClass == 'ic_sm' )
	{
		if (counter == 0)
		{	
			$(".ic_sm").attr("class", "ic_sm1");
			$(".ic_ml").attr("class", "ic_ml1");
			$(".ic_vs").attr("class", "ic_vs1");
			$(".ic_s").attr("class", "ic_s1");
			$(".ic_m").attr("class", "ic_m1");
			$(".ic_l").attr("class", "ic_l1");
			$(".ic_padding").attr("class", "ic_padding1");
			 var newEl = 
				'<div class="' + parentClass + '" id="' + parentClassId + 
					' " style="position:absolute; left:' + left + '; top:' + top + ';">' +
					'<div class="' + padding + '">'+
						'<div class="' + bubbleClass + '" >' +
							'<p class="' + bubbleFontClass + '" >' +
								translator.T(bubbleContent) +  
							'</p>'+
						'</div>'+
					'</div>'+
				'<div>';

		} else {

			$(".ic_padding").append('<div class="' + bubbleClass + '" >' +
				'<p class="' + bubbleFontClass + '" >' +
					translator.T(bubbleContent) +  
				'</p>'+
			'</div>');			
		}	
 
	}
	else 
	{
		 var newEl = [
				'<div id="' + parentClassId + '" style="position:absolute; left:' + 
					left + '; top:' + top + ';">' +
					'<div class="' + bubbleClass + '" >' +
						'<p class="' + bubbleFontClass + '" >' +
							translator.T(bubbleContent)+
						 //(router.getLanguage() == 'french'? bubbleClass : bubbleContent) +  
						'</p>'+
					'</div>'+
				'<div>'
			].join("");
	}
    
    $("#mainContainer").append(newEl).fadeIn('slow');
};

Tabs.prototype.nextIsClicked = function()
{
	var storyId = $('.'+ (router.getLanguage() == 'french'? 'FrNext':'Next')).attr('id');
	switch(storyId)
	{
		case 'NextStory1':
			router.updateHashTab('Story1');
		break;
	
		case 'NextStory2':
			router.updateHashTab('Story2');
		break;
		
		case 'NextStory3':
			router.updateHashTab('Story3');
		break;
		
		case 'NextStory4':
			router.updateHashTab('Story4');
		break;
	}
	//router.updateHashTab();
};


Tabs.prototype.changeImage = function(activeAsk, activePost)
{
	var askDiv = 
		$('<div id="activeAsk" style="background: url(images/' + 
			(router.getLanguage() == 'french'? this.activeAskFr:this.activeAsk) + 
			'.png) no-repeat center;position:absolute;left:' + 
			(router.getLanguage() == 'french'? this.activeAskLeftFr:this.activeAskLeft) + 'px;'+
	 		' top:' + (router.getLanguage() == 'french'? this.activeAskTopFr:this.activeAskTop) +'px;'+
	 		' width:' + (router.getLanguage() == 'french'? this.activeAskWidthFr:this.activeAskWidth) +'px;'+
	 		' height:' + (router.getLanguage() == 'french'? this.activeAskHeightFr:this.activeAskHeight) +'px;"'+
	 		' onmouseout="uiHover.askOffHover();" '+ 
			'onmouseover="uiHover.onHoverAsk();"</div>').attr('id', 'activeAsk');
	
	askDiv.appendTo('#mainContainer');
	$('#activeAsk').click("click", function () {
		router.addSceneToHash(tabs.activeAskScene);
		tabs.clickNext();
	});

	var postDiv = 
		$('<div id="activePost" style="background: url(images/' + 
			(router.getLanguage() == 'french'? this.activePostFr:this.activePost) + 
			'.png) no-repeat center; position:absolute;left:' + 
			(router.getLanguage() == 'french'? this.activePostLeftFr:this.activePostLeft) + 'px;'+
    		' top:' + (router.getLanguage() == 'french'? this.activePostTopFr:this.activePostTop) +'px;'+
    		' width:'+ (router.getLanguage() == 'french'? this.activePostWidthFr:this.activePostWidth) +'px;'+
    		' height:' + (router.getLanguage() == 'french'? this.activePostHeightFr:this.activePostHeight) + 'px;"'+
    		' onmouseout="uiHover.postOffHover();" '+
			'onmouseover="uiHover.onHoverPost();"></div>').attr('id', 'activePost');
	
	postDiv.appendTo('#mainContainer');

	$('#activePost').click("click", function () {
		router.addSceneToHash(tabs.activePostScene);
		tabs.clickNext();
	});
};

Tabs.prototype.animateAskCards = function()
{
    this.cardCounter = this.cardCounter +1;
    this.dropCounter = this.dropCounter +1;
	// console.log("this.dropCounter: "+this.dropCounter);
 //    console.log("this.cardCounter: "+this.cardCounter);
	$(".ui-draggable#cardPile" + this.cardCounter).draggable('disable');
	this.askTop = 83 + (this.cardCounter* 140);	
	
	// kind of a ghetto way to count how many more can be placed in the ask column
	this.askCounter = 1;
	for (var i=1; i<4; i++)
	{
		var $slot = $('#cardSlots'+i+' .ui-droppable');	
		if($slot){
			if($slot.hasClass('ui-droppable-disabled')){
				this.askCounter++;
			}
			else break;
		}
	}
	sortingPageAudio.cardAudios(tabs.cardCounter);
	$(".ui-draggable#cardPile" + this.cardCounter).attr('id','ask').animate({
		"left": $slot.position().left + 'px',
		"top": $slot.position().top + 'px',
		"z-index": "1"}, 1000, function()
		{
			//var cardNumber = ;
			//var page = tabs.page;
			
		});
	this.askLeft = this.askLeft;
	
	if (this.dropCounter >= 6) 
	{		
		tabs.sortingResult(this.cardCounter);
	}
	$slot.droppable('disable');

};

Tabs.prototype.animatePostCards = function()
{

    this.cardCounter = this.cardCounter + 1;
    this.dropCounter = this.dropCounter + 1;
    // console.log("this.dropCounter: "+this.dropCounter);
    // console.log("this.cardCounter: "+this.cardCounter);
	$(".ui-draggable#cardPile" + this.cardCounter).draggable('disable');
	
	// kind of a ghetto way to count how many more can be placed in the ask column
	this.postCounter = 1;
	
	for (var i=4; i<7; i++)
	{
		var $slot = $('#cardSlots'+i+' .ui-droppable');	
		if($slot){
			if($slot.hasClass('ui-droppable-disabled')){
				this.postCounter++;
			}
			else break;
		}
	}

	sortingPageAudio.cardAudios(tabs.cardCounter);
    $(".ui-draggable#cardPile" + this.cardCounter).attr('id','post').animate({
		"left": $slot.position().left+ 'px',
		"top": $slot.position().top + 'px',
		"z-index": "1"
    }, 1000, function()
    {
  //   	var cardNumber = tabs.cardCounter;
		// var page = tabs.page;
		// sortingPageAudio.cardAudios(cardNumber);
    });
    
    this.postLeft = this.postLeft;
    this.postTop = this.postTop + 140;
    
    if ( this.dropCounter >= 6) 
    {
		tabs.sortingResult(this.cardCounter);
    }
	$slot.droppable('disable');
};

Tabs.prototype.sortingResult = function ()
{
	var page = tabs.page;
	var helpTextOne = page.helpTextOne;
	var helpTextTwo = page.helpTextTwo;
	var helpTextOneFr = page.helpTextOneFr;
    var helpTextTwoFr = page.helpTextTwoFr;
    var correctSortFeedbackAudio = page.correctSortFeedbackAudio;
     var correctSortFeedback = page.correctSortFeedback;
    var correctSortFeedbackFrAudio = page.correctSortFeedbackFrAudio;
    var correctSortFeedbackVIAudio = page.correctSortFeedbackVIAudio;
    var finalCounter = 0;
    this.dropCounter = 0;
    var correctSortPurpleText = page.correctSortPurpleText;
	var correctSortPurpleTextVI = page.correctSortPurpleTextVI;

    if ($('#cardPile0').find('#ask').length || 
		$('#cardPile1').find('#ask').length || 
		$('#cardPile2').find('#ask').length)
    {
    	playAudio.stopAudioPlaying();
    	
		tabs.failCounter++;
		if (tabs.failCounter == 1)
		{
			$('#evaluationModalFail').modal('show');
			$('#sortThoughtBubble').remove();
			$('.modal-body').html(translator.T(tabs.helpContent1));
			(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.playFiles(helpTextOneFr):playAudio.playFiles(helpTextOne)));
		    $('#helpContent').html(translator.T(tabs.helpContent1));
		    
		}
		else if (tabs.failCounter == 2)
		{
			$('#evaluationModalFail').modal('show');
			 $('#sortThoughtBubble').remove();
			$('.modal-body').html(translator.T(tabs.helpContent2));
			$('#helpContent').html(translator.T(tabs.helpContent2));
			(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.playFiles(helpTextTwoFr):playAudio.playFiles(helpTextTwo)));
			tabs.failCounter = 0;
		}
    }
    //show success
	if (($('#cardPile0').find('#post').length) && 
		($('#cardPile1').find('#post').length) && 
		($('#cardPile2').find('#post').length))
	{
		// Assing the proper value to sortingPageId.
		$.get( "server.php?action=addNewSortingPage&newSortingPageId=" + tabs.solvedPageId );
		tabs.myArray[tabs.solvedPageId] = 'checked';
	   $('#evaluationModalSuccess').modal('show');
	   playAudio.stopAudioPlaying();
	   var audioToPlay;
	   if(router.VIStaus == 'OFF'){
			audioToPlay = router.getLanguage() == 'french' ? correctSortFeedbackFrAudio : correctSortFeedbackAudio;
		}else{
			audioToPlay = router.getLanguage() == 'french'? correctSortFeedbackVIAudio.replace("e_","f_") : correctSortFeedbackVIAudio;
		}
	   
		playAudio.playFiles(audioToPlay);
		sortingPageAudio.correctFeedbackAudio(correctSortFeedbackVIAudio,correctSortFeedbackFrAudio,correctSortFeedbackAudio);
		
	   
	   
	    //$('.purpleTextSort span').text(translator.T(correctSortFeedback));
		(router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? $('.purpleTextSort span').text(translator.T(tabs.correctSortPurpleText)): $('.purpleTextSort span').text((tabs.correctSortPurpleText))): (router.getLanguage() == 'french'? $('.purpleTextSort span').text(translator.T(tabs.correctSortPurpleTextVI)): $('.purpleTextSort span').text((tabs.correctSortPurpleTextVI))));
		tabs.changeImage(
			router.getLanguage() == 'french'? this.activeAskFr:this.activeAsk ,
			router.getLanguage() == 'french'? this.activePostFr:this.activePost);

		 $('#sortThoughtBubble').remove();

		 
	}
	
	this.cardCounter = -1;
};

Tabs.prototype.play = function (id)
{
	if (id == 6)
	{
		//
	}
	else if (id != 6)
	{
		playAudio.playFiles(id);
    }
};

Tabs.prototype.pause = function()
{
    document.addEventListener('play', function(e){
		var audios = document.getElementsByTagName('audio');

		for (var i = 0, len = audios.length; i < len; i++) {
		    if (audios[i] != e.target) 
				audios[i].pause();
		}

    }, true);
};

Tabs.prototype.removeBubble = function (pageIndex, frameIndex, bubbleIndex) 
{
    var bubble = this.storyData.scene[router.getCurrentScene()].pages[pageIndex].frames[frameIndex].bubbles[bubbleIndex];
    var parentClass = bubble.parentClass;
	var parentClassId = bubble.parentClassId;
 
	if (parentClass == 'tt_bg')
	 {
		$('.tt_bg').remove();
	}
	else
	{
		 $('#' + parentClassId).remove();
	}
};