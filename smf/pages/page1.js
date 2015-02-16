/* global _,key,Backbone,Pages,SMF,Application,CreatePage,header*/
//'use strict';
function CreatePage1(){
	Pages.Page1.txtButton1 = new SMF.UI.TextButton({
		//top: "10%",
		//left: "10%",
		text: "Basic Backbone Data Example",
		onPressed: function(e) {
			Pages.PageDataBasicBackbone.show();
		}
	});
	Pages.PageDataBasicBackbone = new SMF.UI.Page({
		name: "PageDataBasicBackbone",
		onKeyPress: keys.page.onKeyPress
	});
	Pages.Page1.add(Pages.Page1.txtButton1);

	Pages.PageDataBasicBackbone.Container1 = new SMF.UI.Container({
		layoutType: SMF.UI.LayoutType.linear,
		orientation: 1 //SMF.UI.Container.orientation.?
	});
	Pages.PageDataBasicBackbone.add(Pages.PageDataBasicBackbone.Container1);
	
	var UserModel = Backbone.Model.extend({});
	var UsersCollection = Backbone.Collection.extend({
		model: UserModel
	});
	var users = new UsersCollection();
	users.add([
		{name: "Alper"},
		{name: "Osman"},
		{name: "Serkan"},
		{name: "Halit"},
		{name: "Anti"},
		{name: "Doruk"},
		{name: "Gokhan"},
		{name: "Ugur"}
	]);
	
	var i = 0;
	users.each(function(obj){
		var label = new SMF.UI.Label({
			text: obj.get('name'),
			height: '40px'
		});
		Pages.PageDataBasicBackbone.Container1['Label'+i] = label;
		Pages.PageDataBasicBackbone.Container1.add(label);
		i++;
	});
}
CreatePage1();