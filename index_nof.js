// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar1"] = {
	"NavigationButton1" : { image: "./Home_Hp_highlighted.png", rollover: "./Home_HRp_highlightedOver.png", w: 120, h: 56 },
	"NavigationButton2" : { image: "./Minecraft_Np_regular.png", rollover: "./Minecraft_NRp_regularOver.png", w: 120, h: 56 },
	"NavigationButton3" : { image: "./Contact_Np_regular.png", rollover: "./Contact_NRp_regularOver.png", w: 120, h: 56 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar1", rollover: true, autoClose: true });
	$("#NavigationBar1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar1 ul").hide();
});


// End Navigation Bars

