/* global _,Pages,SMF,Application,load*/
var keys = {
	page: {
		showNavigationBar : true,
		showStatusBar : false,
		touchEnabled : true,
		onKeyPress : function (e) {
			if (e.keyCode === 4) {
				if (this.name === "Page1") {
					Application.exit();
				} else {
					Pages.back();
				}
			}
		}
	}
};
