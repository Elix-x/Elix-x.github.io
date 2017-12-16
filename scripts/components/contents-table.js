function getContents(){
	return $(".contents")
}

function genContents(typeClass, contentFromPage, onComplete, force = false, fadeOut = 150, fadeIn = 150){
	var contents = getContents()
	if(!force && contents.hasClass(typeClass)) return;
	var onFadeOut = function(){
		contents.removeClass("interpunct").removeClass("text").addClass(typeClass)
		contents.html("")
		$(".scroll-page").get().forEach(function(spage, index){
			contents.html(function(i, ohtml){
				return ohtml + "<tr><td class=\"contents-element\">" + contentFromPage($(spage), index) + "</td></tr>"
			})
		})
		if(fadeIn > 0) contents.fadeIn(fadeIn, onComplete); else onComplete();
	}
	if(fadeOut > 0) contents.fadeOut(fadeOut, onFadeOut); else onFadeOut();
}

function genInterpunctContents(force, fadeOut, fadeIn){
	genContents("interpunct", function(spage){return "•";}, function(){
		$(".contents-element").get().forEach(function(aelem, i){
			$(aelem).click(genTextContents)
			if(i == getScrollSnapId()) $(aelem).toggleClass("contents-element-current")
		})
	}, force, fadeOut, fadeIn)
}

function genTextContents(force, fadeOut, fadeIn){
	genContents("text", function(spage){return spage.attr("contents-title");}, function(){
		$(".contents-element").get().forEach(function(aelem, i){
			var elem = $(aelem)
			elem.hover(function(){
				elem.css("text-decoration", "underline")
			}, function(){
				elem.css("text-decoration", "none")
			})
			elem.on('click touchend', function(e){
				scrollTo(i, scrollSnapTime, false)
				if(e.type == "touchend") genInterpunctContents()
			})
			if(i == getScrollSnapId()) elem.toggleClass("contents-element-current")
		})
	}, force, fadeOut, fadeIn)
}

function reposContents(){
	getContents().css("top", (($(window).height() - getContents().height())/2) + "px")
}

$(function() {
	genInterpunctContents()
	reposContents()
	$(window).resize(reposContents)
	getContents().hover(function(){genTextContents()}, function(){genInterpunctContents()})
});

$(window).on("scroll-snap-end", function(){
	if(getContents().hasClass("text")) genTextContents(true, 0, 0);
	else genInterpunctContents(true, 0, 0);
});