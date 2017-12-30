hostnamePattern = new RegExp(location.host);

function getLinkDestinationType(url){  
	if(hostnamePattern.test(url) || url.slice(0, 1) == "/") return 'local'
	else if(url.slice(0, 1) == "#") return 'anchor'
	else return 'external'
}

absolutePattern = new RegExp('^(?:[a-z]+:)?//', 'i');

function isLinkAbsolute(url){
	return absolutePattern.test(url)
}