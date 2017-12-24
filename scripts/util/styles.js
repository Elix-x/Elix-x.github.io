function setStyle(ref, id){
	id = "style-" + id
	$('head').find('#' + id).remove()
	$('head').append('<link id="' + id + '" rel="stylesheet" href="' + ref + '" type="text/css" />')
}