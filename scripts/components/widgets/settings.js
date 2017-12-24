var settings = []
function setting(setGen){
	settings.push(setGen)
}

function openSettingsWidget(){
	var settingsStr = '<div class="settings-widget">'
	for(var setting of settings) settingsStr += setting()
	settingsStr += '</div>'
	openWidget(settingsStr)
}

$(function(){
	setStyle("/styles/components/widgets/settings.css", "settings-widget")
})