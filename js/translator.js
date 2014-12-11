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