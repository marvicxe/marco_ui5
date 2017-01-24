sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller,JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampwebApps1.controller.App", {
		onInit : function () {
				var oData = {
					field : {
						username : "username"
					}
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
				var i18nModel = new ResourceModel({
					bundleName : "sap.ui.bootcampwebApps1.i18n.i18n"
				});
				this.getView().setModel(i18nModel,"i18n");
			},
		onLoginPress: function(){
		 //   var oTextField = this.getView().byId("username");
		 //   // sap.m.MessageToast.show("Hello World" + oTextField.getValue());
		 //   var oTextpwd = this.getView().byId("password");
		 //   // sap.m.MessageToast.show("Hello World" + oTextpwd.getValue());
			// // sap.m.MessageToast.show("Hello PAPA");
			
		
			// if (oTextField.getValue() === " " && oTextpwd.getValue() === " "){
			// 	sap.m.MessageToast.show("user name & Password Not Null");
			// }
			// else if (oTextField.getValue() === " "){
			// 	sap.m.MessageToast.show("user name not null");
			// }
			// else if  (oTextpwd.getValue() === " "){
			//     sap.m.MessageToast.show("password not null");
			// }
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username/");
			var sMsg = oBundle.getText("helloMsg",[sRecipient]);
			
			sap.m.MessageToast.show(sMsg);
			
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampwebApps1.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampwebApps1.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampwebApps1.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampwebApps1.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});