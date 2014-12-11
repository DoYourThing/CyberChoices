function WrapUp() {
};

WrapUp.prototype.PlayBluBoxAudio = function () 
{
    $("#bluebox").click(function() {});
};

WrapUp.prototype.getCharacters = function (page) 
{
	this.character2 = page.character2;
    this.character1 = page.character1;
    this.character3 = page.character3;
    var character2 = this.character2;
    var character1 = this.character1; 
    
    $("." + character2 + "_active").addClass(character2 + "_inactive").removeClass(character2 + "_active");
   	$("." + character1 + "_inactive_wrapup").addClass(character1 + "_active").removeClass(character1 + "_inactive_wrapup");
    
};

WrapUp.prototype.setActiveCharacter = function () 
{
	var character2 = this.character2;
    var character1 = this.character1; 
    var character3 = this.character3;
};

WrapUp.prototype.emotoiconClick = function (emoticonId) 
{
	var character2 = this.character2;
    var character1 = this.character1;
    var character3 = this.character3;
    	
	var a = "happy";
    var c = 0;
    var d;
    this.resetSelectedEmoticons();
    var b = emoticonId;

    switch(b){
    	case "happy": (router.getLanguage() == 'french'? playAudio.playFiles('souriante'):playAudio.playFiles('h'));
    		break;
    	case "mad": (router.getLanguage() == 'french'? playAudio.playFiles('fâchée'):playAudio.playFiles('m'));
    		break;
    	case "sad": (router.getLanguage() == 'french'? playAudio.playFiles('triste'):playAudio.playFiles('s'));
    		break;
    	case "worried": (router.getLanguage() == 'french'? playAudio.playFiles('inquiet'):playAudio.playFiles('w'));
    		break;
    	case "guilty": (router.getLanguage() == 'french'? playAudio.playFiles('coupable'):playAudio.playFiles('g'));
    		break;
    }
    
	if (a == b) {
		$(".emoticons#" + b).css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + b + "_emoticon_active.png)");
		wrapUp.applySelectedEmoticons(b);
	   
	} else if (a != b) {
		$(".emoticons#" + b).css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + b + "_emoticon_active.png)");
		$(".emoticons#" + a).css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + a + "_emoticon_inactive.png)");
		wrapUp.applySelectedEmoticons(b);
	}
	a = b;
	$(".emoticons#" + b).addClass("selected");


};

WrapUp.prototype.applySelectedEmoticons = function(b)
{
	var character2 = this.character2;
    var character1 = this.character1;
    var character3 = this.character3;
 	if ($("." +  character1 + "_active_wrapup")[0]) 
 	{
		$("#SashaFaceSlot").removeClass();
		$("#SashaFaceSlot").attr("class", character1 + "_" + b);
	} 
	else if ($("." + character2 + "_active_wrapup")[0]) 
	{
		$("#maxFaceSlot").removeClass();
		$("#maxFaceSlot").attr("class", character2 + "_" + b);
	}
	else if ($("." + character3 + "_active_wrapup")[0]) 
	{
		$("#thirdFaceSlot").removeClass();
		$("#thirdFaceSlot").attr("class", character3 + "_" + b);
	}
};

WrapUp.prototype.resetSelectedEmoticons = function()
{
	$("#sad").css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + "sad_emoticon_inactive.png)");
	$("#worried").css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + "worried_emoticon_inactive.png)");
	$("#mad").css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + "mad_emoticon_inactive.png)");
	$("#happy").css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") +"happy_emoticon_inactive.png)");
	$("#guilty").css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") +"guilty_emoticon_inactive.png)");
	$(".emoticons").removeClass("selected");
};

WrapUp.prototype.wrapUpKeydownControl = function(c,previousId)
{
	var character2 = this.character2;
    var character1 = this.character1;
    var character3 = this.character3;
	if (previousId == c) {
        $(".emoticons#" + c).css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + c + "_emoticon_active.png)");
		if ($("." + character1 + "_active_wrapup")[0]) 
		{
			$("#SashaFaceSlot").attr("class", character1 + "_" + c);
		} 
		else if ($("." + character2 + "_active_wrapup")[0]) 
		{
			$("#maxFaceSlot").attr("class", character2 + "_" + c);
		}
		else if ($("." + character3 + "_active_wrapup")[0]) 
		{
			$("#thirdFaceSlot").attr("class", character3 + "_" + c);
		}
		
	}
	else if (previousId != c) 
	{
		$(".emoticons#" + c).css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + c + "_emoticon_active.png)");
		$(".emoticons#" + previousId).css("background-image", "url(images/" + ("french" == router.getLanguage() ? "french_" : "") + previousId + "_emoticon_inactive.png)");

		if ($("." + character1 + "_active_wrapup")[0]) 
		{
			$("#SashaFaceSlot").removeClass();
			$("#SashaFaceSlot").attr("class", character1 + "_" + c);
		} 
		else if ($("." + character2 + "_active_wrapup")[0]) 
		{
			$("#maxFaceSlot").removeClass();
			$("#maxFaceSlot").attr("class", character2 + "_" + c);
		}
		else if ($("." + character3 + "_active_wrapup")[0]) 
		{
			$("#thirdFaceSlot").removeClass();
			$("#thirdFaceSlot").attr("class", character3 + "_" + c);
		}
	}
	previousId = c;
	
	$(".emoticons#" + c).addClass("selected");
};

WrapUp.prototype.feedbackFirstVisit = function()
{
	(router.VIStaus == 'OFF' ? '':(router.getLanguage() == 'french'? playAudio.playFiles('f_1_6_f_v_1'):playAudio.playFiles('e_1_6_f_v_1')) );
};
WrapUp.prototype.wrapUpFirstVisit = function()
{
	tabs.showModal('wrapUpFirstVisit');
	if($('#e_g_h_5').length > 0)
	{
		$("#e_g_h_5").bind('ended', function(){
				playAudio.stopAudioPlaying();
				$('.modal.fade.in').modal('hide');
				tabs.showModal('VIWrapUpHelp');
				(router.getLanguage() == 'french'? playAudio.playHelpFile('f_v_h_6'):playAudio.playHelpFile('e_v_h_6'));
		});
	}
	else if ($('#f_g_h_5').length > 0)
	{
		$("#f_g_h_5").bind('ended', function(){
			playAudio.stopAudioPlaying();
			$('.modal.fade.in').modal('hide');
			tabs.showModal('VIWrapUpHelp');
			(router.getLanguage() == 'french'? playAudio.playHelpFile('f_v_h_6'):playAudio.playHelpFile('e_v_h_6'));
		});
	}
};

$(window).keydown(function(a) {
	var character2 = wrapUp.character2;
    var character1 = wrapUp.character1;
    var character3 = wrapUp.character3;
	var previousId = "happy";
    
    if (49 === a.which) 
    {
        wrapUp.resetSelectedEmoticons();
        var c = "happy";
        wrapUp.wrapUpKeydownControl(c,previousId);
    } 
    else if (50 === a.which) 
    {
     	wrapUp.resetSelectedEmoticons();
        var c = "mad";
        wrapUp.wrapUpKeydownControl(c,previousId);
    } 
    else if (51 === a.which) 
    {
     	wrapUp.resetSelectedEmoticons();
        var c = "sad";
		wrapUp.wrapUpKeydownControl(c,previousId);
    } 
    else if (52 === a.which) 
    {
    	wrapUp.resetSelectedEmoticons();
        var c = "worried";
        wrapUp.wrapUpKeydownControl(c,previousId);
    } 
    else if (53 === a.which) 
    {
    	wrapUp.resetSelectedEmoticons();
        var c = "guilty";
        wrapUp.wrapUpKeydownControl(c,previousId);
    } 
    
});