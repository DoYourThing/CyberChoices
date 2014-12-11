shortcut.add("Ctrl+B",function() {
	alert("The bookmarks of your browser will show up after this alert...");
},{
	'type':'keydown',
	'propagate':true,
	'target':document
});