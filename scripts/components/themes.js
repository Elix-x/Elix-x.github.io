const themes = {
	'dark': '#212921',
	'light': '#B0FBB0'
}
const defaultTheme = 'dark'

function getTheme(){
	var theme = Cookies.get('theme')
	return theme == undefined ? defaultTheme : theme
}

function setTheme(theme = defaultTheme){
	Cookies.set('theme', theme)
	$("head").append('<link href="/themes/' + theme + '.css" rel="stylesheet" type="text/css">')
}

$(function(){
	setTheme(getTheme())
	setting(function(){
	/*
		<table class="theme-table"><tr><td><div style="background-color: aqua">&nbsp;</div></td><td><div style="background-color: yellowgreen">&nbsp;</div></td></tr></table>
	*/
		var str = '<table class="theme-table"><tr>'
		for(var theme in themes) str += '<td><div style="background-color: ' + themes[theme] + '" onClick="setTheme(\'' + theme + '\')">&nbsp;</div></td>'
		str += '</tr></table>'
		return str
	})
})