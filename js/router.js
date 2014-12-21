function Router() 
{
	this.languageHasChanged = false;
	this.VIStaus = 'OFF';
	this.FirstHomevisit = 0;
	this.lastHash = '';
	this.sortingFirstVisit = 0;
};

Router.prototype.updateHashTab = function (tabName) {
	router.pageType = 'home';
    var currentHashArray = location.hash.split('_');
    location.hash = currentHashArray[0] + '_' + tabName + '_0__a';
};


Router.prototype.route = function () {
	
	this.normalizeHash();
	

    var currentHashArray = location.hash.split('_');
	
    // trying to hack a way to stop this from firing twice on leaving of sort page
    if(location.hash == this.lastHash) return;
	this.lastHash = location.hash;

	var language = currentHashArray[0];
    var storyNumber = currentHashArray[1];
	var clickCounter = currentHashArray[2];
	var action = currentHashArray[3];

	
    switch (storyNumber) {
    case 'Story1':
    case 'Story2':
    case 'Story3':
    case 'Story4':
	
        $.getJSON('data/' + storyNumber + '.json', function (storyData) {
            tabs.setStoryData(storyData);
            var body = htmlFactory.getStoryPage(storyNumber);
            $('#mainContainer').html(body);
            router.pageInfo('content');

			var currentHashArray = location.hash.split('_');
    		
    		if (currentHashArray[2] == 0)
    		{
    			tabs.showModal('contentPageFirstVisit');
    			(router.getLanguage() == 'french'? playAudio.playFiles('f_g_h_2'):playAudio.playFiles('e_g_h_2'));
    			if (router.VIStaus == 'ON')
    			{
    				if($('#f_g_h_2').length > 0)
    				{	
    					$("#f_g_h_2").bind('ended', function(){
							playAudio.stopAudioPlaying();
							$('.modal.fade.in').modal('hide');
							tabs.showModal('viSupportContentPage');
							(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_2'):playAudio.playFiles('e_v_h_2'));
						});
    				}
    				else if($('#e_g_h_2').length > 0 )
    				{	
    					$("#e_g_h_2").bind('ended', function(){
							playAudio.stopAudioPlaying();
							$('.modal.fade.in').modal('hide');
							tabs.showModal('viSupportContentPage');
							(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_2'):playAudio.playFiles('e_v_h_2'));
						});
    				}
    			}
    			else
    			{
    				if($('#f_g_h_2').length > 0)
    				{
    					$("#f_g_h_2").bind('ended', function(){
    						$('.modal.fade.in').modal('hide');
    					});
    				}
    				else if($('#e_g_h_2').length > 0 )
    				{
    					$("#e_g_h_2").bind('ended', function(){
    						$('.modal.fade.in').modal('hide');
    					});
    				}
    			}
    		}
			tabs.getTargetLocation(clickCounter, action);
        });

        break;

    case 'feedback':
        var body = htmlFactory.getFeedbackPage();
        $('body').html(body);
        break;

    case 'sorting':
        var body = htmlFactory.getSortingPage();
        $('#mainContainer').html(body);
        //tabs.showModal('sortingFirstVisit');
        break;

    case 'updatedHome':
        var body = htmlFactory.getUpdatedHomePage();
        $('body').html(body);
        router.pageType = 'home';
        break;

    case 'coverUp':
        $.getJSON('data/story1.json', function (storyData) {
            tabs.setStoryData(storyData);
            var body = tabs.getSortingPage();
            $('#mainContainer').html(body);
            router.loadSortingJSFile();
        });
        break;

    case 'post':
        var body = htmlFactory.getPostPage();
        this.loadWrapupJSFiles();
        $('body').html(body);
        break;

    case 'ask':
        var body = htmlFactory.getAskPage();
        this.loadWrapupJSFiles();
        $('body').html(body);
        break;

    case 'wrapUp':
        var body = htmlFactory.getWrapUpPage();
        this.loadWrapupJSFiles();
        $('body').html(body);
        break;

	case 'Home':
		this.FirstHomevisit ++;
        var body = htmlFactory.getSplashPage();
		tabs.initialize();
        $('body').html(body);
        var currentHashArray = location.hash.split('_');
		
		if (currentHashArray == '#french,Home,0,,a')
		{

			if (router.FirstHomevisit >= 2)
			{
				if(this.languageHasChanged){
					// french intro
					tabs.showModal('f_m_2_modal');
					playAudio.playFiles('f_m_2');
					$("#f_m_2").bind('ended', function(){
						$('.modal.fade.in').modal('hide');
					});

					
					this.languageHasChanged = false;
				}
				if (router.VIStaus == 'OFF')
				{
					
				}
				else
				{
					tabs.showModal('VIFrHomeFirstVisit');
					playAudio.playFiles('f_v_h_1');
				}
			}
			else if (router.FirstHomevisit == '1')
			{
				if (router.VIStaus == 'OFF')
				{
					tabs.showModal('homeFirstVisit');
					playAudio.playFiles('g_m_1');
					$("#g_m_1").bind('ended', function(){
						playAudio.stopAudioPlaying();
						$('.modal.fade.in').modal('hide');
						playAudio.playFiles('g_m_2_Audio');
						tabs.showModal('g_m_2');
						$("#g_m_2_Audio").bind('ended', function(){
							playAudio.stopAudioPlaying();
							$('.modal.fade.in').modal('hide');

							// tabs.showModal('f_m_2_modal');
							// playAudio.playFiles('f_m_2');
							// $("#f_m_2").bind('ended', function(){
							// 	$('.modal.fade.in').modal('hide');
							// });
						});
					});
				}
				else
				{
					tabs.showModal('VIFrHomeFirstVisit');
					playAudio.playFiles('f_v_h_1');
				}
			}
		}
		else
		{
			if (router.FirstHomevisit >= 2)
			{
				if (router.VIStaus == 'OFF')
				{
				
				}
				else
				{
					tabs.showModal('VIHomeFirstVisit');
					playAudio.playFiles('e_v_h_1');
				}
			}
			else if (router.FirstHomevisit == 1)
			{
				if (router.VIStaus == 'OFF')
				{
					tabs.showModal('homeFirstVisit');
					playAudio.playFiles('g_m_1');
					$("#g_m_1").bind('ended', function(){
						playAudio.stopAudioPlaying();
						$('.modal.fade.in').modal('hide');
						playAudio.playFiles('g_m_2_Audio');
						tabs.showModal('g_m_2');
						$("#g_m_2_Audio").bind('ended', function(){
							playAudio.stopAudioPlaying();
							$('.modal.fade.in').modal('hide');
						});
					});
				}
				else
				{
					tabs.showModal('VIHomeFirstVisit');
					playAudio.playFiles('e_v_h_1');
				}
			}
		}
        break;
    };
    
    translator.translatePage();   
};

Router.prototype.updateVI = function()
{
	if (router.VIStaus == 'OFF')
	{
		router.VIStaus = 'ON';
		var currentHashArray = location.hash.split('_');
		
		if (currentHashArray[0] == '#french' && router.pageType == 'home')
		{
			tabs.showModal('VIFrHomeFirstVisit');
			playAudio.playFiles('f_v_h_1');
		}
		else if (router.pageType == 'home')
		{
			tabs.showModal('VIHomeFirstVisit' );
			playAudio.playFiles('e_v_h_1');
		}
		$('#VI').html("VI OFF");
	}
	
	else if (router.VIStaus == 'ON')
	{
		router.VIStaus = 'OFF';
		$('#VI').html("VI ON");
	}
};

Router.prototype.loadSortingJSFile = function () 
{
	tabs.askCounter = 0;
    tabs.postCounter = 0;
    tabs.cardCounter = -1;
    tabs.dropCounter = 0;
    var soritngJsFileRef = document.createElement('script');
    soritngJsFileRef.setAttribute("type", "text/javascript");
    soritngJsFileRef.setAttribute("src", "js/sorting.js");
    document.getElementsByTagName("head")[0].appendChild(soritngJsFileRef);
};

Router.prototype.loadWrapUpJSFile = function () {
	var mapsJsFileRef = document.createElement('script');
    mapsJsFileRef.setAttribute("type", "text/javascript");
    mapsJsFileRef.setAttribute("src", "js/wrapUp.js");
    document.getElementsByTagName("head")[0].appendChild(mapsJsFileRef);
};

Router.prototype.getCurrentStoryNumber = function () {
    var currentHashArray = location.hash.split('_');
    return currentHashArray[1];
};

Router.prototype.getLanguage = function() {
	var currentHashArray = location.hash.split('_');
	//console.log("getting language: "+currentHashArray[0].substr(1));
	return currentHashArray[0].substr(1);
};

/**
 * This method ensures that the hash is valid. 
**/
Router.prototype.normalizeHash = function()
{
	/**
	 * 1. Fix language
	 * 2. Fix story
	 * 3. Reconstruct hash and set links based on language. 
	**/

	// 1.
	var hashArray = location.hash.split('_');
	
	if (hashArray.length == 0 || 
		(hashArray[0] != '#french' && hashArray[0] != '#english')) 
	{
		if (window.location.hostname.search("localhost") == -1)
        	hashArray[0] = '#french_Home_0__a';
		else
        	hashArray[0] = '#english_Home_0__a';	
	}
	
	// 2. 
	// if (hashArray.length < 2)
	// 	hashArray

	// 3. 
	location.hash = hashArray.join('_');

	if (hashArray[0] != '#french')
	{
		$('#lang').prop("href", 
						"javascript:router.setLanguage('#french'); " + 
							"javascript:router.updateHashTab('Home');");
		$('#lang').html("Fr");

	}
	else
	{
		$('#lang').attr("href", 
						"javascript:router.setLanguage('#english'); " + 
							"javascript:router.updateHashTab('Home');");
		$('#lang').html("En");
	}
};

Router.prototype.setLanguage = function(lang) 
{
	this.languageHasChanged = true;
	
	var hashArray = location.hash.split('_');

	hashArray[0] = lang;

	location.hash = hashArray.join('_');
};

/**
 * Returns the clickCounter, stored in the hash. 
**/
Router.prototype.getClickCounter = function() 
{
	var hashArray = location.hash.split('_');
	
	return hashArray[2];
};

/**
 * Returns the clickCounter, stored in the hash. 
**/
Router.prototype.setClickHash = function(clickCounter, action) 
{
	var hashArray = location.hash.split('_');

	var oldClickCounter = hashArray[2];

	hashArray[2] = clickCounter;
    hashArray[3] = action;

	if (oldClickCounter > clickCounter) {
		var scenes = hashArray[4];

		hashArray[4] = scenes.substr(0, this.normalizeHashScenes(clickCounter) + 1);
	}

	location.hash = hashArray.join('_');
};

/**
 * Adds an alphabetical representation of the scene number into hash. 
 */
Router.prototype.addSceneToHash = function(sceneIndex) 
{
	var hashArray = location.hash.split('_');

    hashArray[4] += 'abcdefghijklmnopqrstuvwxyz'.charAt(sceneIndex);

	location.hash = hashArray.join('_');
};

/**
 * Adds an alphabetical representation of the scene number into hash. 
 */
Router.prototype.getScenesFromHash = function() 
{
	var hashArray = location.hash.split('_');
	var sceneString = hashArray[4];
	var sceneNumbersArray = new Array();

	var sceneAlphabetArray = sceneString.split("");

	for(var i = 0; i < sceneAlphabetArray.length; i++) {
		sceneNumbersArray.push(sceneAlphabetArray[i].charCodeAt(0) - 97);
	}

	return sceneNumbersArray;
};

/**
 * Adds an alphabetical representation of the scene number into hash. 
 */
Router.prototype.getCurrentScene = function() 
{
	var sceneArray = this.getScenesFromHash();

	return sceneArray[sceneArray.length - 1];
};

/**
 * Adds an alphabetical representation of the scene number into hash. 
 */
Router.prototype.normalizeHashScenes = function(clickCounter) 
{
	var sceneArray = this.getScenesFromHash();

    var remainingClicks = clickCounter;

	for (var i = 0; i < sceneArray.length; i++) 
	{
		var pages = tabs.storyData.scene[sceneArray[i]].pages;

		for (var pageIndex = 0; pageIndex < pages.length; pageIndex++) 
		{
			var hashInfo = pages[pageIndex].hashInfo;
			
			if (hashInfo != 'content') 
			{	
				remainingClicks--;
		
				if (remainingClicks == 0) 
					return i;
						
				continue;
			}
			
			var frames = pages[pageIndex].frames;
	   
			for (var frameIndex = 0; frameIndex < frames.length; frameIndex++) 
			{
				remainingClicks--;
				if (remainingClicks == 0)
					return i;

				var bubbles = frames[frameIndex].bubbles;
				
				if (typeof bubbles != 'undefined')
		   		{
					for (var bubbleIndex = 0; bubbleIndex < bubbles.length; bubbleIndex++) {
		   
						remainingClicks--;
						if (remainingClicks == 0) 
							return i;
					}
					
					bubbleIndex = undefined;
				}
			}  
    	}
	}
};
Router.prototype.pageInfo = function(pageType)
{
	this.pageType = pageType;
	return this.pageType;
};

Router.prototype.pageHelp = function(fromKeyPress)
{
	console.log(router.pageType);
	switch(router.pageType) {
	    case 'sorting':

	    		(router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? translator.T(tabs.showModal('sortingHelp')):tabs.showModal('sortingHelp')) : (router.getLanguage() == 'french'? translator.T(tabs.showModal('VISortingHelp')):tabs.showModal('VISortingHelp')));
				(router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? playAudio.playHelpFile("f_s_h_4"):playAudio.playHelpFile('e_s_h_4')) : (router.getLanguage() == 'french'? playAudio.playHelpFile('f_v_h_4'):playAudio.playHelpFile('e_v_h_4')));	
	    break;
	        
	    case 'wrapUp':
	    		(router.getLanguage() == 'french'? translator.T(tabs.showModal('VIWrapUpHelp')):tabs.showModal('VIWrapUpHelp'));
				(router.getLanguage() == 'french'? playAudio.playHelpFile('f_v_h_6'):playAudio.playHelpFile('e_v_h_6'));
	    break;
	        
	    case 'feedback':
	    		(router.getLanguage() == 'french'? translator.T(tabs.showModal('VIFeedbackHelp')):tabs.showModal('VIFeedbackHelp'));
				(router.getLanguage() == 'french'? playAudio.playHelpFile('f_1_6_f_v_1'):playAudio.playHelpFile('e_1_6_f_v_1'));
	    break;
	    	
	    case 'content':
	    		(router.getLanguage() == 'french'? translator.T(tabs.showModal('viSupportContentPage')):tabs.showModal('viSupportContentPage'));
				(router.getLanguage() == 'french'? playAudio.playHelpFile('f_v_h_2'):playAudio.playHelpFile('e_v_h_2'));
	    break;
		//home
	    default:
	    	
	    	
	    	// assume it's VI mode
	    	if(fromKeyPress){    
	    		
	    		tabs.showModal('VIFrHomeFirstVisit');
				(router.getLanguage() == 'french'? playAudio.playHelpFile('f_v_h_1'):playAudio.playHelpFile('e_v_h_1'));
			} else{				
				(router.getLanguage() == 'french'? playAudio.playHelpFile('f_s_h_1'):playAudio.playHelpFile('e_s_h_1'));
				tabs.showModal('homeHelpModal');
								
			}
	}
}