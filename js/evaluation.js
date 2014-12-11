var dragitem = undefined;

function setdragitem(item, evt) 
{
	dragitem=item;
	return true;
};

function cleardragitem() 
{
	dragitem=undefined;
};

function dodrag() 
{
};

function handledragenter(elt, evt) 
{
	evt.preventDefault();
	return true;
};

function handledragover(elt, evt) 
{
	evt.preventDefault();
	return true;
};

function handledragleave(elt, evt) 
{
};

function handledrop(elt, evt) 
{
	dragitem.style.display="none";
	var newid=dragitem.id + '_dest';
	var dest = document.getElementById(newid);
	dest.innerHTML = dragitem.innerHTML;
};

function showModal()
{
	$('#evaluationModal').modal('show');
};
