const widgetAnimTime = 500

function getWidgets(){
	return $(".widgets")
}

function reposWidgets(){
	getWidgets().css("top", (($(window).height() - getWidgets().height())/2) + "px")
	$(".twitter-timeline").attr("style", "height: " + $(window).height() + "px")
}

function closeWidgets(){
	getWidgets().animate({
		left: -$(window).width()
	}, widgetAnimTime, "swing")
}

function openWidgets(){
	getWidgets().animate({
		left: 0
	}, widgetAnimTime, "swing")
}

$(function(){
	setStyle("/styles/components/widgets.css", "widgets")
	
	reposWidgets()
	$(window).resize(reposWidgets)
});

function getWidget(){
	return $("#widget")
}

function isWidgetOpen(){
	return !getWidget().is(":empty")
}

function closeWidget(){
	if(isWidgetOpen()){
		getWidget().animate({
			left: -$(window).width()
		}, widgetAnimTime, "swing", function(){
			getWidget().empty()
		})
		openWidgets()
	}
}

function openWidget(src){
	closeWidget()
	getWidget().html(src + '<div class="close-widget" onClick="closeWidget()"></div>')
	getWidget().animate({
		left: 0
	}, widgetAnimTime, "swing")
	closeWidgets()
}