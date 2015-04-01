$(document).ready(function()
{	

	router = new Router();
	// soundManager.setup({
	// 	  url: './swf/',
	// 	  //flashVersion: 8, // optional: shiny features (default = 8)
	// 	  debugFlash: true,
	// 	  flashLoadTimeout: 0,
	// 	  //useFlashBlock: false,
	// 	  // optional: ignore Flash where possible, use 100% HTML5 mode
	// 	  preferFlash: true,
	// 	  onready: function() {
	// 	    // Ready to use; soundManager.createSound() etc. can now be called.
		    

	// 	  }
	// });
	htmlFactory = new HTMLFactory();
	keyboardBinder = new KeyboardBinder();
	translator = new Translator();
	tabs = new Tabs();
	
	uiHover = new UIHover();
	wrapUp = new WrapUp();
	playAudio = new PlayAudio();
	sortingPageAudio = new SortingPageAudio();
	var currentHashArray = location.hash.split('_');
	
	// if (currentHashArray == '#french,Home,0,,a')
	// {
	// 	console.log('start.js French hash');
	// 	tabs.showModal('FrhomeFirstVisit');
	// }
	// else
	// {
	// 	console.log('start.js/ English hash/ home first visit');
	// 	tabs.showModal('homeFirstVisit');
	// }
		
	$(window).on('hashchange',function()
	{
		router.route();
	});
	router.route();

		
	if (window.addEventListener) {
		window.addEventListener("keydown", keyboardBinder.bindKeys, false);
	}
	else {
		window.attachEvent("keydown", keyboardBinder.bindKeys, false);	
	}
	
	window.getQueryVariable = function(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}

	
	function createCORSRequest(method, url) {
	  var xhr = new XMLHttpRequest();
	  if ("withCredentials" in xhr) {

	    // Check if the XMLHttpRequest object has a "withCredentials" property.
	    // "withCredentials" only exists on XMLHTTPRequest2 objects.
	    xhr.open(method, url, true);

	  } else if (typeof XDomainRequest != "undefined") {

	    // Otherwise, check if XDomainRequest.
	    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
	    xhr = new XDomainRequest();
	    xhr.open(method, url);

	  } else {

	    // Otherwise, CORS is not supported by the browser.
	    xhr = null;

	  }
	  return xhr;
	}

	
	window.trackSortingProgress = function(questionText, taskNumber, result){
		var token = window.getQueryVariable('token');
		
		taskNumber = location.hash;
	   	var trackingURL = "//mnet.hypernet.ca/ws/update.cfm?token=" + token + '&task=' + taskNumber +'&text=' + encodeURIComponent(questionText) + '&result=' + result;
		var xhr = createCORSRequest('GET', trackingURL);
		if (!xhr) {
		  throw new Error('CORS not supported');
		}
		xhr.onload = function() {
		 var responseText = xhr.responseText;
		 console.log('response from server: '+responseText);
		 // process the response.
		};

		xhr.onerror = function() {
		  console.log('There was an error!');
		};

		xhr.send();
		
	}
	

	
	var startloading = function(){
						
		$.imgpreloader({
			paths: [ './img/example1/1.jpg' ]
		}).done(function($allImages){
			alert('Loaded!');
			$output.append($allImages);
		});
	};

	/*
	// on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      	console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
    */
});
