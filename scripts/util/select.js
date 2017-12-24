function selectText(sel){
	if(document.selection){
		var range = document.body.createTextRange();
		sel.get().forEach((elem) => range.moveToElementText(elem));
		range.select();
	} else if(window.getSelection){
		var range = document.createRange();
		sel.get().forEach((elem) => range.selectNode(elem));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
	}
}