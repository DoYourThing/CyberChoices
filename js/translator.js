function Translator() {};

Translator.prototype.T = function(str)
{
	//console.log('looking for: '+str);
	if (router.getLanguage() != 'french')
		return str;
		
	
	if (str in Fr){
	//	console.log(Fr[str]);
		return Fr[str];
	}

	return str;	
};

Translator.prototype.translatePage = function()
{

};

Translator.prototype.translateAudioPath = function(audio)
{
	return router.getLanguage() == 'french' ? audio.replace("e_","f_") : audio;
};