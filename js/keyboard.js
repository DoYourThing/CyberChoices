/**
 * C'tor
 */
function KeyboardBinder() {};

KeyboardBinder.prototype.caseF = function()
{
	playAudio.stopAudioPlaying();
	switch(router.pageType) {
		case 'home':
		case 'wrapUp':
		case 'content':
		case 'sorting':
			tabs.stopAllAudios = 'true';
			router.setLanguage("#french");
		break;
		
		default:			
			router.setLanguage("#french");
			tabs.showModal('f_m_2_modal');
			playAudio.playFiles('f_m_2');
			$("#f_m_2").bind('ended', function(){
				$('.modal.fade.in').modal('hide');
			});
	};
};

/**
 * This function bind keys to certain functionalities
 */
KeyboardBinder.prototype.bindKeys = function(e) {
	//$( ".ui-draggable" ).draggable({ disabled: true });
	var character2 = wrapUp.character2;
    var character1 = wrapUp.character1;
    var character3 = wrapUp.character3;
	var previousId = "happy";
	console.log(e.keyCode+' , '+e.keyCode);
	switch(e.keyCode) {

			case 49:	
				switch(router.pageType) {
					case 'wrapUp':
						(router.getLanguage() == 'french'? playAudio.playFiles('souriante'):playAudio.playFiles('h'));
					break;
				
					case 'content':
					break;
					
					case 'sorting':
						tabs.clickCode = '49';
						if($("#activePost").length != 0)
						{
							tabs.stopAllAudios = 'newFrame';
							router.addSceneToHash(tabs.activeAskScene);
							tabs.clickNext();
							
						}
						else
						{
								tabs.askCounter =  tabs.askCounter + 1;
								switch(tabs.askCounter) {
									case 1:
										tabs.animateAskCards();
									break;
					
									case 2:
										tabs.animateAskCards();
									break;
					
									case 3:
										tabs.animateAskCards();
									break;
								};
						}
					break;
					
					case 'home':
						
						uiHover.selectedStory("Story1");
					break;
					
					default:
						playAudio.stopAudioPlaying();
						(router.getLanguage() == 'french'? playAudio.playFiles('f_s_1_1'):playAudio.playFiles('e_s_1_1'));
						uiHover.selectedStory("Story1");
					break;
				}
				break;
				
			case 50:
				switch(router.pageType) {
					case 'wrapUp':
						(router.getLanguage() == 'french'? playAudio.playFiles('fâchée'):playAudio.playFiles('m'));
					break;
						
					case 'sorting':
						tabs.clickCode = '50';
						if($("#activePost").length != 0)
						{
							router.addSceneToHash(tabs.activePostScene);
							tabs.clickNext();
							tabs.stopAllAudios = 'newFrame';
						}
						else
						{
							tabs.postCounter = tabs.postCounter +1;
							switch(tabs.postCounter) {
								case 1:
									tabs.animatePostCards();
								break;
								
								case 2:
									tabs.animatePostCards();
								break;
								
								case 3:
									tabs.animatePostCards();
								break;
							};
						}
					break;
					
					case 'content':
					break;
					
					case 'home':
						
						uiHover.selectedStory("Story2");
					break;
					
					default:
						playAudio.stopAudioPlaying();
						(router.getLanguage() == 'french'? playAudio.playFiles('f_s_2_1'):playAudio.playFiles('e_s_2_1'));
						uiHover.selectedStory("Story2");
					break;
						
				};
			break;
			case 13:

			switch(router.pageType) {
					case 'wrapUp':
						wrapUp.advanceEmotionFeedback();
					break;
						
					case 'sorting':						
					break;
					
					case 'content':
					break;
					
					case 'home':
						tabs.nextIsClicked();
					break;
					
					default:
						tabs.nextIsClicked();
					break;
						
				};
							
			break;
				
			case 69:
				playAudio.stopAudioPlaying();
				switch(router.pageType) {
					case 'home':
					case 'wrapUp':
					case 'content':
					case 'sorting':
						tabs.stopAllAudios = 'true';
						router.setLanguage("#english");
					break;
					
					default:
					router.setLanguage("#english");
					tabs.showModal('e_m_2_modal');
					playAudio.playFiles('e_m_2');
					$("#e_m_2").bind('ended', function(){
						$('.modal.fade.in').modal('hide');
					});
				};
			break;
			
			case 70:
				keyboardBinder.caseF();
			break;
				
			case 88:
				playAudio.stopAudioPlaying();			
				if($("#ask").length != 0)
				{
					if($("#evaluationModalFail").is(':visible')) router.loadSortingJSFile();
					if($("#sortingFirstVisit").is(':visible')) sortingPageAudio.showAndPlayHelp();
					
					if (router.VIStaus == 'ON')
					{
						if ($(".ui-draggable-disabled")[0])
						{
						}
						else
						{
							(router.getLanguage() == 'french'? playAudio.playFiles(tabs.card6Audio.replace("e_", "f_")):playAudio.playFiles(tabs.card6Audio));							
						}
					}

				}
				$('.modal.fade.in').modal('hide');

			break;
			
			case 51:	
				switch(router.pageType) {
					case 'wrapUp':
						(router.getLanguage() == 'french'? playAudio.playFiles('triste'):playAudio.playFiles('s'));
					break;
					
					case 'content':
					break;
					
					case 'sorting':
					break;
					
					case 'home':
						
						uiHover.selectedStory("Story3");
					break;
					
					default:
						playAudio.stopAudioPlaying();
						(router.getLanguage() == 'french'? playAudio.playFiles('f_s_3_1'):playAudio.playFiles('e_s_3_1'));
						uiHover.selectedStory("Story3");
					break;
				}
			break;
				
			case 52:
				switch(router.pageType) {
					case 'wrapUp':
						(router.getLanguage() == 'french'? playAudio.playFiles('inquiet'):playAudio.playFiles('w'));
					break;
					
					case 'content':
					break;
					
					case 'sorting':
					break;
					
					case 'home':						
						uiHover.selectedStory("Story4");
					break;
					
					default:
						playAudio.stopAudioPlaying();
						(router.getLanguage() == 'french'? playAudio.playFiles('f_s_4_1'):playAudio.playFiles('e_s_4_1'));
						uiHover.selectedStory("Story4");
				}
			break;
			
			case 53:
				switch(router.pageType) {
					case 'wrapUp':
						(router.getLanguage() == 'french'? playAudio.playFiles('coupable'):playAudio.playFiles('g'));
					break;
				}
			break;
				
			case 72:
				playAudio.stopAudioPlaying();
				router.pageHelp();	
			break;
			
			case 79:
				playAudio.stopAudioPlaying();
				playAudio.playFiles('g_m_2');	
			break;
			//v
			case 86:
				if (typeof router.pageType == 'undefined' || router.pageType == 'home')
				{
					playAudio.stopAudioPlaying();
					router.updateVI();
					(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? tabs.showModal('VIFrHomeFirstVist'):tabs.showModal('VIHomeFirstVisit')));
					(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_1'):playAudio.playFiles('e_v_h_1')));
				}
				else
				{
					playAudio.stopAudioPlaying();
					router.updateVI();
					//(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? tabs.showModal('VIFrHomeFirstVist'):tabs.showModal('VIHomeFirstVisit')));
				}
			break;
			
			case 84:
				router.updateHashTab(tabs.storyId);
			break;
			
			case 37:	
				tabs.clickCode = 0;
				tabs.clickPrevious();
			break;

			case 39:
				
				if (typeof router.pageType == 'undefined' || router.pageType == 'home')
				{
					tabs.nextIsClicked();
				}
				else if (router.pageType == 'sorting')
				{}
				else if (router.pageType == 'wrapUp')
				{
					wrapUp.advanceEmotionFeedback();
				}
				else
				{
					tabs.clickCode = 0;
					tabs.clickNext();
				}
			break;

			case 27:
				//Esc key
				playAudio.stopAudioPlaying();
				router.updateHashTab("Home");
				(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? tabs.showModal('VIFrHomeFirstVist'):tabs.showModal('VIHomeFirstVisit')));
				(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_1'):playAudio.playFiles('e_v_h_1')));
			break;
				
			case 82:
				//R key
				audioForReplay = playAudio.audioArray;
				playAudio.stopAudioPlaying();
				playAudio.playRepeatedFiles(audioForReplay[audioForReplay.length-1]);
				$('#cardPile5').css({ 'margin-left': '40px','width':'200px' });
			break;
		} 
};