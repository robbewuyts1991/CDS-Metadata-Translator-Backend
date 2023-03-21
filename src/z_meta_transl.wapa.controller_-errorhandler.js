sap.ui.define(["sap/ui/base/Object","sap/m/MessageBox"],function(e,s){"use strict";return e.extend("translations.controller.ErrorHandler",{constructor:function(e){this._oResourceBundle=e.getModel("i18n").getResourceBundle();this._oComponent=e;this._oMode+
l=e.getModel("translation");this._bMessageOpen=false;this._sErrorText=this._oResourceBundle.getText("errorText");this._oModel.attachMetadataFailed(function(e){var s=e.getParameters();this._showServiceError(s.response)},this);this._oModel.attachRequestFai+
led(function(e){var s=e.getParameters();if(s.response.statusCode!=="404"||s.response.statusCode===404&&s.response.responseText.indexOf("Cannot POST")===0){this._showServiceError(s.response)}},this)},_showServiceError:function(e){if(this._bMessageOpen){re+
turn}this._bMessageOpen=true;s.error(this._sErrorText,{id:"serviceErrorMessageBox",details:e,styleClass:this._oComponent.getContentDensityClass(),actions:[s.Action.CLOSE],onClose:function(){this._bMessageOpen=false}.bind(this)})}})});                     