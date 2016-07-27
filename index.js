require("sdk/ui/button/action").ActionButton({
	id: "list-tabs",
	label: "Open a tab on sci-hub.cc",
	icon: {
	    "16": "./icon-16.png",
	    "32": "./icon-32.png",
	    "64": "./icon-64.png"
  	},
	onClick: openUrl
});

function get_domain_name(href){ 
	

}

function openUrl() {
	var tabs = require("sdk/tabs");
	var url = tabs.activeTab.url;
	var matches = url.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
	tabs.open("http://"+matches[1]+".sci-hub.cc"+matches[2]);
}