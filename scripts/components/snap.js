const scrollSnapTime = 500
const scrollSnapParam = "snap"
var scrolling = false

function getScrollSnapId(){
//	return scrollSnapId
	return Number(getUrlQueryParam(scrollSnapParam)) || 0
}

function setScrollSnapId(snap){
	setUrlQueryParam(scrollSnapParam, snap)
}

function getScrollSnapPoints(){
	return $(".scroll-snap").get()
}
	
function preventDefault(e){
	e = e || window.event;
	if(e.preventDefault) e.preventDefault();
	e.returnValue = false;  
}

window.onwheel = window.onmousewheel = function(event){
	preventDefault(event)
	scrollTo(getScrollSnapId() + (event.deltaY > 0 ? 1 : -1), scrollSnapTime, false)
}

window.ontouchmove = function(event){
	preventDefault(event)
	scrollTo(getScrollSnapId() + (event.deltaY > 0 ? 1 : -1), scrollSnapTime, false)
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {38: -1, 40: +1, 32: +1, 34: +1, 33: -1, 35: Number.POSITIVE_INFINITY, 36:Number.NEGATIVE_INFINITY};
window.onkeydown = function(event){
	var offset = keys[event.keyCode]
	if(offset != undefined){
		preventDefault(event)
		scrollTo(getScrollSnapId() + offset, scrollSnapTime, false)
	}
}

function scrollTo(id, time, force){
	if(!logoed) return logoem();
	
	if(scrolling && !force) return;
	var snaps = getScrollSnapPoints()
	id = id.clamp(0, snaps.length-1)
	if(id == getScrollSnapId() && !force) return;
	
	scrolling = true
	$('html, body').animate({
		scrollTop: $(snaps[id]).offset().top
	}, time, "swing", function(){
		setScrollSnapId(id)
		scrolling = false
		$(window).trigger("scroll-snap-end", id)
	});
}