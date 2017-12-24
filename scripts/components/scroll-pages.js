function reApplyScrollPagesSizes(){
	var width = $(window).width()
	var height = $(window).height()
	$(".scroll-page").get().forEach(function(spage){
		spage.style.height = height + "px"
	})
	
	if(logoed) scrollTo(getScrollSnapId(), 0, true)
}

$(function() {
	reApplyScrollPagesSizes()
	$(window).resize(reApplyScrollPagesSizes);
});