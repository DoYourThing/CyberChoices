function PlayAudio() {
	this.audioArray = Array();
	this.audioCounter = -1;

	
};

PlayAudio.prototype.playFiles = function (AudioID)
{
	//if($("#"+AudioID)) $("#"+AudioID).remove();
var newAudio = 
    	'<audio id="' + AudioID + '" src="./sounds/' + AudioID + '.mp3"></audio>' ;
    	$('#mainContainer').append(newAudio);
   		var audio = document.getElementById(AudioID);
		audio.play();
	$("#"+AudioID).bind('ended', function(){
		$("#"+AudioID).remove();
		
	});

	return;
	
	soundManager.createSound({
	    id: AudioID,
	    url: './sounds/' + AudioID + '.mp3',
	    autoLoad: true,
  		autoPlay: true,
	  });
	return;
	var link = './sounds/' + AudioID + '.mp3';
	if (soundManager.canPlayURL(link)) {
	 soundManager.play(AudioID, link);
	}
	return;
	
	
	
};

PlayAudio.prototype.playHelpFile = function (AudioID)
{
	playAudio.playModalAudioFile(AudioID);
};

PlayAudio.prototype.playAndTranslateModalFile = function (englishID, frenchID)
{
	var fileToPlay = router.getLanguage() == 'french' ? frenchID : englishID;
	playAudio.playModalAudioFile(fileToPlay);
};

PlayAudio.prototype.playModalAudioFile = function (AudioID)
{
	playAudio.playFiles(AudioID);

	if($('#'+AudioID).length > 0)
	{	
		$('#'+AudioID).bind('ended', function(){
			playAudio.stopAudioPlaying();
			//$('.modal.fade.in').modal('hide');
			//tabs.showModal('viSupportContentPage');
			(router.getLanguage() == 'french'? playAudio.playFiles('f_v_h_2'):playAudio.playFiles('e_v_h_2'));
		});
	}
};

PlayAudio.prototype.playRepeatedFiles = function (AudioID)
{
	var newAudio = 
    	'<audio class="repeated" src="./sounds/' + AudioID + '.mp3"></audio>' ;
    	$('#mainContainer').append(newAudio);
    	 $(".repeated")[0].play();
};
          
PlayAudio.prototype.stopAudioPlaying = function()
{
	
	//soundManager.reset();
	var audio = document.getElementsByTagName("audio");
	if (audio.length > 0)
	{
		//audio[0] = document.getElementsByTagName("audio")[0];
		var duration = audio[0].duration;
		audio[0].pause();
		if(duration) audio[0].currentTime = 0;
		$(audio).remove();
	}
	for (index = audio.length - 1; index >= 0; index--) 
	{
		audio[index].parentNode.removeChild(audio[index]);
	}
};

PlayAudio.prototype.CheckPlayedAudios = function(AudioId)
{ 
	if ($.inArray(AudioId, this.audioArray ) == -1 && tabs.stopAllAudios == 'false')
	{
		this.audioArray.push(AudioId);
		playAudio.playFiles(AudioId);
	}
	else if ($.inArray(AudioId, this.audioArray ) == -1 && tabs.stopAllAudios == 'true')
	{
		this.audioArray.push(AudioId);
	}
	else if ($.inArray(AudioId, this.audioArray ) == -1 && tabs.stopAllAudios == 'newFrame')
	{
		this.audioArray.push(AudioId);
		playAudio.playFiles(AudioId);
	}
};