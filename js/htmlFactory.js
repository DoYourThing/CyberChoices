function HTMLFactory() {
};

/**
 * Retrieves Story initial body.
 */
HTMLFactory.prototype.getStoryPage = function (storyName) 
{
	switch(storyName){
    case 'Story1':
		return this.getStory1Page();
		break;
    case 'Story2':
		return this.getStory2Page();
		break;
    case 'Story3':
		return this.getStory3Page();
		break;
    case 'Story4':
		return this.getStory4Page();
		break;
	}
};

HTMLFactory.prototype.getModalContent = function(modalId)
{
	switch(modalId){
		case 'homeHelpModal':
			return 'There are four stories for you to explore. Click on the stories to hear about them. To pick which one you want to play, click a story and then click the Next button. You can come back to pick another story when you’re done. ';
		break;
		
		case 'feedbackHelp':
			return "Press “go back to home page” to play another story or “try again” to see what happens if you make different choices.";
		return;
		
		case 'VIWrapUpHelp':
			return "Press number keys 1 through 5 to hear the different ways that this person might have felt. When you’ve heard what you think is the right one, press the ‘Enter’ key to pick it. You’ll do this for each of the people in the story.";
		break;
		
		case 'sortingHelp':
			return tabs.purpleBoxText;
		return;
	
		case 'VISortingHelp':
			return 'After you hear each reason, press the ‘1’ key if you think it’s a reason to pick the first choice or the ‘2’ key if you think it’s a reason to pick the second choice. After you’ve sorted the reasons correctly, press the ‘1’ key to pick the first choice or the ‘2’ key to pick the second choice and decide where the story goes. When you’ve played to the end of this story, you can try again and see what happens if you make different choices.';
		break;
		
		case 'contentPageHelp':
			return 'To go back in the story, press the left arrow on the keyboard or click the back button on the screen.  Click on a text box to hear it again.';
		break;
		
		case 'wrapupPageHelp':
			return 'For each of the people in the story, click on the face that stands for how you think they felt.';
		break;
		
		case 'homeFirstVist':
			return "Welcome to Cyber Choices. Bienvenue à Cyber-Choix.";
		break;
		
		case 'VIFeedbackHelp':
			return "Press T to try this story again or press Esc to go back to the home page.";
			break;
		
		case 'sortingFirstVisit':
			return "Decision time! When we make a decision, we have to think about the reasons why we might do one thing and not another. Each time you face a major decision in the story, you’ll be given six reasons why you might make one choice or another about what to do next.";
		break;
		
		case 'wrapUpFirstVisit':
			return "Now you need to think about how the people in the story felt about how things turned out.";
		break;
		
		case 'e_s_h_4':
			return "Use the mouse to drag each the reasons for making a choice to the spaces on each side of the screen. After you’ve sorted the reasons correctly, click on one of those choices to decide what happens next. When you’ve played to the end of this story, you can try again and see what happens if you make different choices.";
		break;
	
		case 'wrapupPageHelp':
			return "For each of the people in the story, click on the face that stands for how you think they felt.";
		break;
		
		case 'VIFrHomeFirstVist':
			return "Il y a quatre histoires à explorer. Appuie sur les touches 1 à 4 pour entendre une description de chacune. Pour sélectionner celle qui t’intéresse, appuie sur la touche du chiffre correspondant puis sur la touche Retour. Tu pourras revenir et choisir une autre histoire lorsque tu auras terminé. Appuie sur la touche ‘a’ pour obtenir de l’aide. Appuie sur la touche ‘o’ pour entendre les options. Appuie sur la touche ‘x’ pour continuer.";
		break;
		
		case 'VIHomeFirstVisit':
			return "There are four stories for you to explore. Press 1 through 4 to hear about each one. To pick which one you want to play, press that number and then the Enter key. You can come back to pick another story when you’re done. Press the ‘h’ key for help. Press the ‘o’ key to hear options. Press ‘x’ to continue.";
		break;
		
		case 'contentPageFirstVisit':
			return "To see the next part of each story, press the right arrow on the keyboard or click the next button on the screen.";
		break;
		
		case 'viSupportContentPage':
			return "To hear something again or go back in the story, press the left arrow on the keyboard or click the back button on the screen. Press 'r' to hear the last thing that was said again.";
		break;
		
		case 'optionModal':
			return 'To play in English press "e".'+
                	'</br>'+
					'Keyboard commands:'+
					'</br>'+
					"'right arrow' = next"+
					'</br>'+
					"'left arrow' = back"+
					'</br>'+
					"'r' = replay current text bubble" +
					'</br>'+
					"'esc' = home" +
					'</br>'+
					"'t' = try again" +
					'</br>'+
					"'Enter' = accept" +
					'</br>'+
					"'h' = help" +
					'</br>'+
					"'o' = options" +
					'</br>'+
					"'x' = cancel (close popups)" +
					'</br>'+
					"'1' = sort reason left" +
					'</br>'+
					"'2' = sort reason right" +
					 '</br>'+
					"'1' = select action 1 when choices are unlocked" +
					'</br>'+
					"'2' = select action 2 when choices are unlocked" +
					'</br>';
		break;
	
	}
};

/**
 * Retrieves Story 1 initial body.
 */
HTMLFactory.prototype.getStory1Page = function () 
{
    var body =
	    '<div id="storyLine1">' +
			'<div id="title" style="background: url(images/' + 
				(router.getLanguage() == 'french'? 'f_1':'e_1') + '.png) no-repeat center;">'+
			'</div>'+
			'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="tabs.clickNext();"' +
				'" onmouseout=uiHover.homeOffHover("Next"); ' + 
			'onmouseover=uiHover.homeOnHover("Next");></div>'+
			'<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.showModal("contentPageHelp"); '+
			'" onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
    		
    		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
			
			'<div class="modal fade" id="story1HelpModal" '+
				'tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" '+
							'aria-hidden="true">&times;</button>' +
						'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
					'</div>' +
					'<div class="modal-body" style="cursor:default">' +
						'Help Content.' +
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
                
                (router.getLanguage() == 'french'? translator.T(this.getModalContent('optionModal')):this.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                (router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) :(router.getLanguage() == 'french'? translator.T(this.getModalContent('viSupportContentPage')):this.getModalContent('viSupportContentPage')))+
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                
                '<div class="modal fade" id="contentPageFirstVisit" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageFirstVisit')):this.getModalContent('contentPageFirstVisit')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
            '<div class="modal fade" id="viSupportContentPage" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('viSupportContentPage')):this.getModalContent('viSupportContentPage')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="optionsImage" '+
    			'" onclick=javascript:tabs.showModal("optionModal"); '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    '</div>';
    
    return body;
};

/**
 * Retrieves Story 2 initial body.
 */
HTMLFactory.prototype.getStory2Page = function () 
{
    var body =
	    '<div id="storyLine2">' +
			'<div id="title" style="background: url(images/' + 
				(router.getLanguage() == 'french'? 'f_2':'e_2') + '.png) no-repeat center;">'+
			'</div>'+
			'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="tabs.clickNext();"' +
				'" onmouseout=uiHover.homeOffHover("Next"); ' + 
			'onmouseover=uiHover.homeOnHover("Next");></div>'+
			'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
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
                
                (router.getLanguage() == 'french'? translator.T(this.getModalContent('optionModal')):this.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
               '<div class="modal fade" id="contentPageFirstVisit" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageFirstVisit')):this.getModalContent('contentPageFirstVisit')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
            '<div class="modal fade" id="viSupportContentPage" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('viSupportContentPage')):this.getModalContent('viSupportContentPage')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="optionsImage" '+
    			'" onclick=javascript:tabs.showModal("optionModal"); '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
			'<div class="modal fade" id="story1HelpModal" '+
				'tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" '+
							'aria-hidden="true">&times;</button>' +
						'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
					'</div>' +
					'<div class="modal-body" style="cursor:default">' +
						'Help Content.' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.showModal("contentPageHelp"); '+
			'" onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
    '</div>';
    
    return body;
};

/**
 * Retrieves Story 3 initial body.
 */
HTMLFactory.prototype.getStory3Page = function () 
{
    var body =
	    '<div id="storyLine3">' +
			'<div id="title" style="background: url(images/' + 
				(router.getLanguage() == 'french'? 'f_3':'e_3') + '.png) no-repeat center;">'+
			'</div>'+
			'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="tabs.clickNext();"' +
				'" onmouseout=uiHover.homeOffHover("Next"); ' + 
			'onmouseover=uiHover.homeOnHover("Next");></div>'+
			'<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.showModal("contentPageHelp"); '+
			'" onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
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
                
                (router.getLanguage() == 'french'? translator.T(this.getModalContent('optionModal')):this.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="optionsImage" '+
    			'" onclick=javascript:tabs.showModal("optionModal"); '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
			'<div class="modal fade" id="story1HelpModal" '+
				'tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" '+
							'aria-hidden="true">&times;</button>' +
						'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
					'</div>' +
					'<div class="modal-body" style="cursor:default">' +
						'Help Content.' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="modal fade" id="contentPageFirstVisit" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageFirstVisit')):this.getModalContent('contentPageFirstVisit')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
            '<div class="modal fade" id="viSupportContentPage" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('viSupportContentPage')):this.getModalContent('viSupportContentPage')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
    '</div>';
    
    return body;

};

/**
 * Retrieves Story 4 initial body.
 */
HTMLFactory.prototype.getStory4Page = function () {
    var body =
	    '<div id="storyLine4">' +
			'<div id="title" style="background: url(images/' + 
				(router.getLanguage() == 'french'? 'f_4':'e_4') + '.png) no-repeat center;">'+
			'</div>'+
			'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="tabs.clickNext();"' +
				'" onmouseout=uiHover.homeOffHover("Next"); ' + 
			'onmouseover=uiHover.homeOnHover("Next");></div>'+
			
			'<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.showModal("contentPageHelp"); '+
			'" onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
			
			'<div class="modal fade" id="contentPageFirstVisit" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageFirstVisit')):this.getModalContent('contentPageFirstVisit')) +
                '</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
            '<div class="modal fade" id="viSupportContentPage" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('viSupportContentPage')):this.getModalContent('viSupportContentPage')) +
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
                
                (router.getLanguage() == 'french'? translator.T(this.getModalContent('optionModal')):this.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="optionsImage" '+
    			'" onclick=javascript:tabs.showModal("optionModal"); '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
		'<div class="modal fade" id="contentPageHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('contentPageHelp')):this.getModalContent('contentPageHelp')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
    '</div>';
    
    return body;

};

/**
 * Retrieves Splash page body.
 */
HTMLFactory.prototype.getSplashPage = function () {
    var body =
        '<div id="mainContainer">'+
		'<div id="' + (router.getLanguage() == 'french'? 'frHomeContainer':'homeContainer') + '">'+
		
        '<div class="story" id="' + 
			(router.getLanguage() == 'french'? 'FrStory1':'story1') + 
			'" onclick=javascript:uiHover.selectedStory("Story1");></div>'+
        '<div class="story" id="' + 
			(router.getLanguage() == 'french'? 'FrStory2':'story2') + 
			'" onclick=javascript:uiHover.selectedStory("Story2");></div>'+
        '<div class="story" id="' + 
			(router.getLanguage() == 'french'? 'FrStory3':'story3') + 
			'" onclick=javascript:uiHover.selectedStory("Story3");></div>'+
        '<div class="story" id="' + 
			(router.getLanguage() == 'french'? 'FrStory4':'story4') + 
			'" onclick=javascript:uiHover.selectedStory("Story4");></div>'+
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
                
                (router.getLanguage() == 'french'? translator.T(this.getModalContent('optionModal')):this.getModalContent('optionModal')) + 
	
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                
		'<div class="modal fade" id="homeFirstVist" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('homeFirstVist')):this.getModalContent('homeFirstVist')) + 
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="modal fade" id="evaluationModalFail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
                '<div class="modal-dialog">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
	
        '<div class="collapse navbar-collapse">'+
        '</div>'+
        '<div class="modal fade" id="homeHelpModal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('homeHelpModal')):this.getModalContent('homeHelpModal')) +
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
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="modal fade" id="VIFrHomeFirstVist" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	(router.getLanguage() == 'french'? translator.T(this.getModalContent('VIFrHomeFirstVist')):this.getModalContent('VIHomeFirstVisit')) +
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                
                '<div class="modal fade" id="FrHomeFirstVist" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	'Pour entendre la vidéodescription et accéder aux options pour les personnes ayant une déficience visuelle, appuyez sur ‘V’.'+
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                
                '<div class="modal fade" id="g_m_2" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	"To play in English press 'e'. Pour continuer en français, appuie sur 'f'."+
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                
                '<div class="modal fade" id="e_m_2_modal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	"To hear described video and support for the visually impaired press 'v'."+
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                
                '<div class="modal fade" id="f_m_2_modal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	"Pour entendre la vidéodescription et accéder aux options pour les personnes ayant une déficience visuelle, appuyez sur ‘V’."+
                '</div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                
                '<div class="modal fade" id="VIHomeFirstVisit" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '<h4 class="modal-title" id="myModalLabel"></h4>'+
                '</div>'+
                '<div class="modal-body" style="cursor:default">'+
                	'There are four stories for you to explore. Press 1 through 4 to hear about each one. To pick which one you want to play, press that number and then the Enter key. You can come back to pick another story when you’re done. Press the ‘h’ key for help. Press the ‘o’ key to hear options.'+
               ' </div>'+
                '<div class="modal-footer modalFooterSize">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+

            '<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.showModal("homeHelpModal"); '+
			'" onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
			'<div class="' + 
			(router.getLanguage() == 'french'? 'FroptionsImage':'optionsImage') +
			'" onclick=javascript:tabs.showModal("optionModal"); '+ 
			'" onmouseout=uiHover.homeOffHover("optionsImage"); '+
			'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
        '<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			'" onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
        '<div class="' + 
			(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="javascript:tabs.nextIsClicked();"'+
			'" onmouseout=uiHover.homeOffHover("Next"); ' + 
			'onmouseover=uiHover.homeOnHover("Next");></div>'+
        	// '<ul class="nav navbar-nav">'+
//         		'<li class="navbarItem" id="languageContainer">'+
// 					'<a href=javascript:router.setLanguage("#' +  
// 						(router.getLanguage() == 'french'? 'english':'french') + 
// 						'"); javascript:router.updateHashTab("Home"); id="lang">' +  
// 						(router.getLanguage() == 'french'? 'En':'Fr') + '</a>'+
// 				'</li>'+
// 				'<li class="navbarItem" id="VISupportSelector">'+
// 					'<a href=javascript:router.updateVI(); id="VI" >'+
// 						(router.VIStaus == 'ON'? 'VI OFF':'VI ON') +
// 					'</a>'+
// 				'</li>'+
//         	'</ul>'+
        '</div>'+
		'</div>';

    return body;
};

/**
 * Retrieves Cover Up page body.
 */
HTMLFactory.prototype.getCoverUpBody = function () {
    var body =
        '<div id="coverUpBodyContainer">' +
        	'<div class="helpImage" ' + 
				'onmouseout=uiHover.homeOffHover("helpImage"); ' + 
				'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
     	   '<div class="optionsImage" '+ 
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+ 
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
       		'<div class="homeImage" '+ 
				'onclick=javascript:router.updateHashTab("Home"); ' + 
				'onmouseout=uiHover.homeOffHover("Home"); '+
				'onmouseover=uiHover.homeOnHover("Home");></div>'+
        	'<div class="modal fade" id="coverUpHelpModal" '+ 
				'tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        		'<div class="modal-dialog">' +
        			'<div class="modal-content">' +
        				'<div class="modal-header">' +
        					'<button type="button" class="close" data-dismiss="modal" '+
								'aria-hidden="true">&times;'+
							'</button>' +
        					'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
        				'</div>' +
        				'<div class="modal-body" style="cursor:default">' +
        					'Cover up story help page' +
        				'</div>' +
        				'<div class="modal-footer modalFooterSize">' +
        				'</div>' +
        			'</div>' +
        		'</div>' +
        	'</div>' +
        '</div>';
    return body;
};

/**
 * Retrieves updated home page body.
 */
HTMLFactory.prototype.getUpdatedHomePage = function () {
    var body =
        '<div id="mainContainer">' +
        	'<div id="story1" onclick=javascript:router.updateHashTab("Story1")>' +
        	'</div>' +
        	'<div id="story2" onclick=javascript:router.updateHashTab("Story2") >' +
        	'</div>' +
        	'<div id="story3" onclick=javascript:router.updateHashTab("Story3") >' +
        	'</div>' +
        	'<div id="unlockedStory4" onclick=javascript:router.updateHashTab("Story4") >' +
        	'</div>' +
        	'<div id="story5" onclick=javascript:router.updateHashTab("Story5") >' +
        	'</div>' +
        	'<div id="story6" onclick=javascript:router.updateHashTab("story6") >' +
        	'</div>' +
       		'<div class="helpImage" '+
				'onmouseout=uiHover.homeOffHover("helpImage"); '+
				'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
  	  		'<div class="optionsImage" '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="homeImage" '+
				'onclick=javascript:router.updateHashTab("Home"); '+
				'onmouseout=uiHover.homeOffHover("Home"); '+
				'onmouseover=uiHover.homeOnHover("Home");></div>'+
        '</div>';
    return body;
};

/**
 * Retrieves updated home page body.
 */
HTMLFactory.prototype.getCoverUpPage = function () {

	var body =
    	'<div id="coverUpBodyContainer">' +
			'<div class="helpImage" '+
				'onmouseout=uiHover.homeOffHover("helpImage"); '+
				'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
    		'<div class="optionsImage" '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="homeImage" '+
				'onclick=javascript:router.updateHashTab("Home"); '+
				'onmouseout=uiHover.homeOffHover("Home"); '+
				'onmouseover=uiHover.homeOnHover("Home");></div>'+
			'<div class="modal fade" id="coverUpHelpModal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +
							'<button type="button" class="close" data-dismiss="modal" '+
								'aria-hidden="true">&times;</button>' +
							'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							'Cover up story help page' +
						'</div>' +
						'<div class="modal-footer modalFooterSize">' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="backButton" onclick="tabs.clickPrevious();">' +
			'</div>' +
			'<div class="' + 
				(router.getLanguage() == 'french'? 'FrNext':'Next') + '" onclick="tabs.clickNext();">' +
			'</div>' +
		'</div>';

	return body;
};

/**
 * Returns the feedback page html. 
**/
HTMLFactory.prototype.getFeedbackPage = function(page) 
{
	$('.modal-backdrop').remove();
	var character3 = page.character3;
	var character2 = page.character2;
	var character1 = page.character1;
	var inactiveCharacter1 = page.inactiveCharacter1;
	var inactiveCharacter2 = page.inactiveCharacter2;
	var inactiveCharacter3 = page.inactiveCharacter3;
	var body = 
		'<div id="feedbackContainer" style="background: url(images/' + 
			page.storyBackgroundimage + '.png) no-repeat center;  width: 1024px; height: 768px;">' +
			'<div id="title" style="background: url(images/' + 
				(router.getLanguage() == 'french'? tabs.FrenchTitleImage:tabs.EnglishTitleImage) + '.png) no-repeat center;">'+
			'</div>'+
			'<div id="feedbackTextBox" style="background: url(images/' + 
				(router.getLanguage() == 'french'? page.blueBoxFeedbackFr:page.blueBoxFeedback) + 
				'.png) no-repeat center;  width: 867px; height: 287px; '+
				'position:absolute; left:78px; top:116px;" '+
				' onclick=javascript:playAudio.playFiles("' + page.blueBoxFeedback +'"); >'+
			'</div>' +
			 
			'<div class="modal fade" id="feedbackHelp" tabindex="-1" '+
					'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
					'style="display: none;">' +
					'<div class="modal-dialog">' +
						'<div class="modal-content">' +
							'<div class="modal-header">' +
								'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
								'<h4 class="modal-title" id="myModalLabel"></h4>' +
							'</div>' +
							'<div class="modal-body" style="cursor:default">' +
								(router.getLanguage() == 'french'? translator.T(this.getModalContent('feedbackHelp')):this.getModalContent('feedbackHelp')) +
							'</div>' +
							'<div class="modal-footer modalFooterSize">' +
							'</div>' +
						'</div>' +
				'</div>' +
			'</div>' +
                
                '<div class="modal fade" id="VIFeedbackHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +											
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=javascript:playAudio.playFiles("card1");>&times;</button>' +
							'<h4 class="modal-title" id="myModalLabel"></h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('VIFeedbackHelp')):htmlFactory.getModalContent('VIFeedbackHelp')) + 	
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
		                '</div>' +
	                '</div>' +
                '</div>' +
			
			
			'<div id="' +
			 	(router.getLanguage() == 'french'? 'FrgoHome':'goHome') + 
			 '"'+ 
			 	' onmouseout=uiHover.homeOffHover("goHome"); ' + 
			 	'onclick=javascript:router.updateHashTab("Home"); '+
			 	'onmouseover=uiHover.homeOnHover("goHome");></div>'+
			 	
		 	 '<div class="' + 
				(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
				'" onclick=javascript:tabs.showModal("feedbackHelp"); '+
				' onmouseout=uiHover.homeOffHover("helpImage"); '+
				'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
				
			'<div id="' +
			 	(router.getLanguage() == 'french'? 'FrtryAgain':'tryAgain') + 
			 '"'+ 
			 	' onmouseout=uiHover.homeOffHover("tryAgain"); ' + 
			 	'onclick=javascript:router.updateHashTab("'+ tabs.storyId + '"); '+
			 	'onmouseover=uiHover.homeOnHover("tryAgain");></div>'+
		
			'<div class="' +  inactiveCharacter2 + '_inactive">'+
				'<div class="' + character2 + '">'+
				'</div>'+
			'</div>'+
			'<div class="'  +  inactiveCharacter1 + '_inactive_wrapup">'+
				'<div class="' + character1 + '">'+
				'</div>'+
			'</div>'+
			'<div class="' +  inactiveCharacter3 + '_inactive">'+
				'<div class="' + character3 + '">'+
				'</div>'+
			'</div>'+
			
    		'<div class="optionsImage" '+
				'onmouseout=uiHover.homeOffHover("optionsImage"); '+
				'onmouseover=uiHover.homeOnHover("optionsImage");></div>'+
    		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
			'<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			
		'</div>';

	return body;
};

HTMLFactory.prototype.solvedSortingPage = function ()
{
	 $('.modal-backdrop.fade').remove();
	var body =
		'<div style="background:url(images/' + 
			(router.getLanguage() == 'french'? 
				tabs.storyBackgroundimageFr:tabs.storyBackgroundimage) + 
			'.png) no-repeat center; width: 1024px; height: 768px;">' +
         			'<audio id="titleAudio" src="sounds/' + tabs.titleAudio + '.mp3"></audio>' +
					'<div id="ask">' +
		         		'<img id="inactive-Ask"></img>' +
					'</div>' +
					
		            '<div id="post">' +
		                '<img id="inactive-Post"></img>' +
		            '</div>' +
		            
		            '<div id="cardPile5Dragged">' +
			            '<div id="ask" class="ui-draggable">' +
		                		'<img id="theImg" src="images/e_1_1_r.png">'+
			                		'<span class="textStyle">' + 
									translator.T(tabs.e_1_1_r_6) + 
								'</span>' +
							'</img>'+
						'</div>'+
					'</div>'+
					
					'<div id="cardPile4Dragged">' +
						'<div id="ask" class="ui-draggable">' +
							'<img id="theImg" src="images/e_1_1_r.png"><span class="textStyle" >' + 
								'<span>'+
								translator.T(tabs.e_1_1_r_5) + 
								'</span>' +
							'</img>'+
		                '</div>' +
					'</div>' +
					
					'<div id="cardPile3Dragged">' +
						'<div id="ask" class="ui-draggable">' +
							'<img id="theImg" src="images/e_1_1_r.png" />'+
								'<span class="textStyle">' + translator.T(tabs.e_1_1_r_4) + '</span>' +
							'</img>' +
		                '</div>' +
					'</div>' +
					
					'<div id="cardPile2Dragged">' +
						'<div id="post" class="ui-draggable">' +
							'<img id="theImg" src="images/e_1_1_r.png">'+
								'<span class="textStyle">' + translator.T(tabs.e_1_1_r_3) + '</span>' +
							'</img>' +
						'</div>' +
					'</div>' +
					
					'<div id="cardPile1Dragged">' +
						'<div id="post" class="ui-draggable">' +
							'<img id="theImg" src="images/e_1_1_r.png">'+
								'<span class="textStyle">' + translator.T(tabs.e_1_1_r_2) + '</span>' +
							'</img>' +
						'</div>' +
					'</div>' +
					
					'<div id="cardPile0Dragged">' +
						'<div id="post" class="ui-draggable">' +
							'<img id="theImg" src="images/e_1_1_r.png">'+
								'<span class="textStyle">' + translator.T(tabs.e_1_1_r_1) + '</span>' +
							'</img>' +
						'</div>' +
					'</div>' +
					
					'<div id="purpleBox" style="position:absolute; left:298px; top:92px;"'+
						' onclick=javascript:playAudio.playFiles("'+(router.getLanguage() == 'french'? (tabs.purpleBox+'_s').replace("e_", "f_"):(tabs.purpleBox+'_s'))+'"); >'+
						'<div class="cc_text f18 purpleTextSort">' +
							'<span>' + translator.T(tabs.purpleBoxText) + '</span>' +
						'</div>' +
					'</div>' +
					
			'<div class="modal fade" id="HelpModal" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                		'<div class="modal-content">' +
	                		'<div class="modal-header">' +
	                			'<button type="button" class="close" data-dismiss="modal" '+
									'aria-hidden="true" onclick="router.loadSortingJSFile();">×</button>' +
							'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							'<p id="helpContent">' +
								translator.T(tabs.firstHelpContent) +
							'</p>' +
						'</div>' +
						'<div class="modal-footer modalFooterSize">' +
							'<button type="button" class="btn btn-default restartButton" '+
								'data-dismiss="modal" onclick="  router.loadSortingJSFile();">'+
								'Play Again</button>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			
			'<div class="modal fade" id="evaluationModalSuccess" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
				'<div class="modal-dialog">' +
						'<div class="modal-content">' +
							'<div class="modal-header">' +
				                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
				                '<h4 class="modal-title" id="myModalLabel"></h4>' +
				             '</div>' +
			                '<div class="modal-body" style="cursor:default">' +
			                	translator.T(tabs.correctSortFeedback) +
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
				                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="router.loadSortingJSFile();">×</button>' +
				                '<h4 class="modal-title" id="myModalLabel"></h4>' +
			                '</div>' +
			                '<div class="modal-body" style="cursor:default">' +
			                '</div>' +
			                '<div class="modal-footer modalFooterSize">' +
			                '<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); ">'+
			                	(router.getLanguage() == 'french'? translator.T('Play Again'):'Play Again') +
			                '</button>' +
			                '</div>' +
		                '</div>' +
	                '</div>' +
                '</div>' +
                
			'<div class="modal fade" id="sortingHelp" tabindex="-1" '+
				'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" '+
				'style="display: none;">' +
					'<div class="modal-dialog">' +
							'<div class="modal-content">' +
									'<div class="modal-header 121324dfgdf">' +
										'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
										'<h4 class="modal-title" id="myModalLabel"></h4>' +
									'</div>' +
									'<div class="modal-body" style="cursor:default">' +
										(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('sortingHelp')):htmlFactory.getModalContent('sortingHelp')) +
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
				                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="router.loadSortingJSFile();">×</button>' +
				                '<h4 class="modal-title" id="myModalLabel"></h4>' +
			                '</div>' +
			                '<div class="modal-body" style="cursor:default">' +
			                '</div>' +
			                '<div class="modal-footer modalFooterSize">' +
			                		'<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); ">'+
			                			(router.getLanguage() == 'french'? translator.T('Play Again'):'Play Again') +
			                		'</button>' +
			                '</div>' +
		                '</div>' +
	                '</div>' +
                '</div>' +
                '<div class="modal fade" id="VISortingHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				'<div class="modal-dialog">' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +											
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=javascript:playAudio.playFiles("card1");>&times;</button>' +
							'<h4 class="modal-title" id="myModalLabel"></h4>' +
						'</div>' +
						'<div class="modal-body" style="cursor:default">' +
							(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('VISortingHelp')):htmlFactory.getModalContent('VISortingHelp')) + 	
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
				                		(router.getLanguage() == 'french'? translator.T(this.getModalContent('optionModal')):this.getModalContent('optionModal')) + 
				                '</div>'+
				                '<div class="modal-footer modalFooterSize"></div>'+
		                '</div>'+
		                '</div>'+
                '</div>'+
                
                 '<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') +
			'" onclick=javascript:tabs.showModal("sortingHelp"); '+
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
			
                '<div class="backButton" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");></div>'+
			
                '<div class="'+ tabs.inactiveCharacter  +'_sorting">' +
	                '<div id="SashaFaceSlot" class="' + tabs.characterImage  +'">' +
		                '<div class="sasha_name">' +
		                '</div>' +
	                '</div>' +
	             '</div>'+
	             
	                '<div id="activeAsk" style="background: url(images/' + 
	                		(router.getLanguage() == 'french'? tabs.activeAskFr:tabs.activeAsk) + '.png) no-repeat center; position:absolute;left:' +
	                		(router.getLanguage() == 'french'? tabs.activeAskLeftFr:tabs.activeAskLeft) + 'px; top:' +
	                		(router.getLanguage() == 'french'? tabs.activeAskTopFr:tabs.activeAskTop) + 'px; width:' + 
	                		(router.getLanguage() == 'french'? tabs.activeAskWidthFr:tabs.activeAskWidth) + 'px; height:' +
	                		(router.getLanguage() == 'french'? tabs.activeAskHeightFr:tabs.activeAskHeight) +'px;" '+
	                		'  onmouseout="uiHover.askOffHover();"  onmouseover="uiHover.onHoverAsk();"  >' +
	                '</div>' +
	                
	                '<div id="activePost" style="background: url(images/' +
	                		(router.getLanguage() == 'french'? tabs.activePostFr:tabs.activePost) + '.png) no-repeat center; position:absolute;left:' + 
	                		(router.getLanguage() == 'french'? tabs.activePostLeftFr:tabs.activePostLeft) + 
	                		'px; top:' + (router.getLanguage() == 'french'? tabs.activePostTopFr:tabs.activePostTop) +
	                		'px; width:' + (router.getLanguage() == 'french'? tabs.activePostWidthFr:tabs.activePostWidth) +
	                		'px; height:' + (router.getLanguage() == 'french'? tabs.activePostHeightFr:tabs.activePostHeight) + 
	                		'px;" onmouseout="uiHover.postOffHover();" onmouseover="uiHover.onHoverPost();">' +
	                '</div>' +
	       
                '<div class="' +
					 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();" ' +
					' onmouseout=uiHover.homeOffHover("backButton"); ' + 
					'onmouseover=uiHover.homeOnHover("backButton");>'+
				'</div>'+
				
       '</div>';
        
    return body;
    
};

HTMLFactory.prototype.unsolvedSortingPage = function ()
{
	var page = tabs.page;
	 var body = 
                '<div style="background:url(images/' + (router.getLanguage() == 'french'? tabs.storyBackgroundimageFr:tabs.storyBackgroundimage) + '.png) no-repeat center; width: 1024px; height: 768px;">' +
	                		'<audio id="titleAudio" src="sounds/' + tabs.titleAudio + '.mp3"></audio>' +
		                	'<div id="ask">' +
		                		'<img id="inactive-Ask" ></img>' +
		                	'</div>' +
		                	'<div id="post">' +
		               			'<img id="inactive-Post" ></img>' +
		                	'</div>' +
						'<div id="cardPile5"  onmousedown="sortingPageAudio.cardAudios(4);"></div>' +
						'<div id="cardPile4" onmousedown="sortingPageAudio.cardAudios(3);"></div>' +
						'<div id="cardPile3" onmousedown="sortingPageAudio.cardAudios(2);"></div>' +
						'<div id="cardPile2" onmousedown="sortingPageAudio.cardAudios(1);"></div>' +
						'<div id="cardPile1" onmousedown="sortingPageAudio.cardAudios(0);"></div>' +
						'<div id="cardPile0" onmousedown="sortingPageAudio.cardAudios(5);"></div>' +
						'<div id="cardSlots1"></div>' +
						'<div id="cardSlots2"></div>' +
						'<div id="cardSlots3"></div>' +
						'<div id="cardSlots4"></div>' +
						'<div id="cardSlots5"></div>' +
						'<div id="cardSlots6"></div>' +
						'<audio id="0" src="sounds/' + (router.getLanguage() == 'french'? 'f_1_1_r_1':'e_1_1_r_1') + '.mp3"></audio>' +
						'<audio id="1" src="sounds/' + (router.getLanguage() == 'french'? 'f_1_1_r_2':'e_1_1_r_2') + '.mp3"></audio>' +
						'<audio id="2" src="sounds/' + (router.getLanguage() == 'french'? 'f_1_1_r_3':'e_1_1_r_3') + '.mp3"></audio>' +
						'<audio id="3" src="sounds/' + (router.getLanguage() == 'french'? 'f_1_1_r_4':'e_1_1_r_4') + '.mp3"></audio>' +
						'<audio id="4" src="sounds/' + (router.getLanguage() == 'french'? 'f_1_1_r_5':'e_1_1_r_5') + '.mp3"></audio>' +
						'<audio id="5" src="sounds/' + (router.getLanguage() == 'french'? 'f_1_1_r_6':'e_1_1_r_6') + '.mp3"></audio>' +
						'<div id="purpleBox" style="position:absolute; left:298px; top:92px;"'+
							' onclick=javascript:playAudio.playFiles("'+(router.getLanguage() == 'french'? (tabs.purpleBox+'_s').replace("e_", "f_"):(tabs.purpleBox+'_s'))+'"); >'+
							'<div class="cc_text f18 purpleTextSort">' +
								'<span>' + translator.T(tabs.purpleBoxText) + '</span>' +
							'</div>' +
						'</div>' +
					'<div class="modal fade" id="HelpModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
						'<div class="modal-dialog">' +
							'<div class="modal-content">' +
								'<div class="modal-header">' +
									'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="router.loadSortingJSFile();">&times;</button>' +
									'<h4 class="modal-title" id="myModalLabel">Help</h4>' +
								'</div>' +
								'<div class="modal-body" style="cursor:default">' +
									'<p id="helpContent">' +
										translator.T(tabs.purpleBoxText) +
									'</p>' +
								'</div>' +
								'<div class="modal-footer modalFooterSize">' +
									'<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); " >'+
										(router.getLanguage() == 'french'? translator.T('Play Again'):'Play Again') +
									'</button>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					
		                	'<div class="modal fade" id="evaluationModalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
			                '<div class="modal-dialog">' +
				                '<div class="modal-content">' +
						                	'<div class="modal-header">' +
						                		'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
						                		'<h4 class="modal-title" id="myModalLabel">' +
						                		'</h4>' +
						                '</div>' +
						                '<div class="modal-body" style="cursor:default">' +
						                		translator.T(tabs.correctSortFeedback) +
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
			                		'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="router.loadSortingJSFile();">&times;</button>' +
			                		'<h4 class="modal-title" id="myModalLabel"></h4>' +
			                '</div>' +
			                '<div class="modal-body" style="cursor:default">' +
			                '</div>' +
			                '<div class="modal-footer modalFooterSize">' +
			                		'<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); " >'+
			                			(router.getLanguage() == 'french'? translator.T('Play Again'):'Play Again') +
			                		'</button>' +
			                '</div>' +
		                '</div>' +
	                '</div>' +
                '</div>' +
                
                	'<div class="'+ tabs.inactiveCharacter  +'_sorting" >' +
                		'<div id="SashaFaceSlot" class="' + tabs.characterImage  +'">' +
                			'<div class="sasha_name"></div>' +
                		'</div>' +
                	'</div>' +
                	'<div id="sortThoughtBubble"></div>' +
                
                	'<div class="modal fade" id="sortingHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header ding dang" >' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="router.loadSortingJSFile();">&times;</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
                	(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('sortingHelp')):htmlFactory.getModalContent('sortingHelp'))+
				'</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); " >'+
                (router.getLanguage() == 'french'? translator.T('Play Again'):'Play Again') +
                '</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
               
                	'<div class="modal fade" id="optionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title" id="myModalLabel"></h4>' +
                '</div>' +
                '<div class="modal-body" style="cursor:default">' +
					(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('optionModal')):htmlFactory.getModalContent('optionModal')) + 	
				'</div>' +
                '<div class="modal-footer modalFooterSize">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                
                
                '<div class="modal fade" id="VISortingHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
					'<div class="modal-dialog">' +
						'<div class="modal-content">' +
							'<div class="modal-header">' +											
								'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=javascript:playAudio.playFiles("card1");>&times;</button>' +
								'<h4 class="modal-title" id="myModalLabel"></h4>' +
							'</div>' +
							'<div class="modal-body" style="cursor:default">' +
								(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('VISortingHelp')):htmlFactory.getModalContent('VISortingHelp')) + 	
							'</div>' +
							'<div class="modal-footer modalFooterSize">' +
								'<button type="button" class="btn btn-default restartButton" data-dismiss="modal" onclick="router.loadSortingJSFile(); " >'+
								(router.getLanguage() == 'french'? translator.T('Play Again'):'Play Again') +
								'</button>' +
							'</div>' +
						'</div>' +
					'</div>' +
                '</div>' +
                
                '<div class="modal fade" id="sortingFirstVisit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
					'<div class="modal-dialog">' +
						'<div class="modal-content">' +
							'<div class="modal-header">' +
								'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
								'<h4 class="modal-title" id="myModalLabel"></h4>' +
							'</div>' +
							'<div class="modal-body" style="cursor:default">' +
								(router.getLanguage() == 'french'? translator.T(htmlFactory.getModalContent('sortingFirstVisit')):htmlFactory.getModalContent('sortingFirstVisit')) + 	
							'</div>' +
						'</div>' +
					'</div>' +
                '</div>' +
                
 		'<div class="' + 
			(router.getLanguage() == 'french'? 'FrhelpImage':'helpImage') + 
			'" onclick=javascript:tabs.checkVIStatus("sortingHelp","VISortingHelp","f_s_h_4","e_s_h_4","f_v_h_4","e_v_h_4"); '+        
			' onmouseout=uiHover.homeOffHover("helpImage"); '+
			'onmouseover=uiHover.homeOnHover("helpImage");></div>'+
			'<div class="' + 
			(router.getLanguage() == 'french'? 'FroptionsImage':'optionsImage') +
			'" onclick=javascript:tabs.showModal("optionModal"); '+ 
			' onmouseout=uiHover.homeOffHover("optionsImage"); '+
			'onmouseover=uiHover.homeOnHover("optionsImage");>'+
			'</div>'+
        '<div class="' + 
			(router.getLanguage() == 'french'? 'FrHomeImage':'homeImage') + 
			'" onclick=javascript:router.updateHashTab("Home"); '+
			' onmouseout=uiHover.homeOffHover("Home"); ' + 
			'onmouseover=uiHover.homeOnHover("Home");></div>'+
			
                '<div  class="play">' +
                		'<audio id="purpleAudio" src="sounds/' + tabs.panelAudio + '.mp3"></audio>' +
                '</div>' +
                '<div class="' +
			 (router.getLanguage() == 'french'? 'FrBackButton':'backButton') + '" onclick="tabs.clickPrevious();"' +
			'" onmouseout=uiHover.homeOffHover("backButton"); ' + 
			'onmouseover=uiHover.homeOnHover("backButton");>'+
                '</div>'+
          '</div>';
                
        return body;
};