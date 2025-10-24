gdjs.code_32generatorCode = {};
gdjs.code_32generatorCode.localVariables = [];
gdjs.code_32generatorCode.idToCallbackMap = new Map();
gdjs.code_32generatorCode.GDdevice_9595idObjects1= [];
gdjs.code_32generatorCode.GDdevice_9595idObjects2= [];
gdjs.code_32generatorCode.GDdevice_9595idObjects3= [];
gdjs.code_32generatorCode.GDNewSpriteObjects1= [];
gdjs.code_32generatorCode.GDNewSpriteObjects2= [];
gdjs.code_32generatorCode.GDNewSpriteObjects3= [];
gdjs.code_32generatorCode.GDcodeObjects1= [];
gdjs.code_32generatorCode.GDcodeObjects2= [];
gdjs.code_32generatorCode.GDcodeObjects3= [];
gdjs.code_32generatorCode.GDBlueButtonObjects1= [];
gdjs.code_32generatorCode.GDBlueButtonObjects2= [];
gdjs.code_32generatorCode.GDBlueButtonObjects3= [];
gdjs.code_32generatorCode.GDdeleteObjects1= [];
gdjs.code_32generatorCode.GDdeleteObjects2= [];
gdjs.code_32generatorCode.GDdeleteObjects3= [];
gdjs.code_32generatorCode.GDJumpButtonObjects1= [];
gdjs.code_32generatorCode.GDJumpButtonObjects2= [];
gdjs.code_32generatorCode.GDJumpButtonObjects3= [];


gdjs.code_32generatorCode.userFunc0xfe45a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Get the Text object named "device_id"
const deviceTextObj = runtimeScene.getObjects("device_id")[0];

if (deviceTextObj) {
  // Get current text from the object
  const deviceText = deviceTextObj.getString();

  // Convert text to integer
  const deviceNumber = parseInt(deviceText, 10);

  if (!isNaN(deviceNumber)) {
    // Multiply by 1985
    const multipliedValue = deviceNumber * 1985;

    // Convert to string for Base64 encoding
    const multipliedStr = multipliedValue.toString();

    // Base64 encode
    const encodedStr = btoa(multipliedStr);

    // Update the text object with the Base64 encoded string
    deviceTextObj.setString(encodedStr);
  } else {
    // Optionally clear text or handle error if input is not a number
    deviceTextObj.setString("");
  }
}

};
gdjs.code_32generatorCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.code_32generatorCode.GDdevice_9595idObjects1 */
{for(var i = 0, len = gdjs.code_32generatorCode.GDdevice_9595idObjects1.length ;i < len;++i) {
    gdjs.code_32generatorCode.GDdevice_9595idObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


};gdjs.code_32generatorCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 1 :Araindamar Spear of Immortal", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("device_id"), gdjs.code_32generatorCode.GDdevice_9595idObjects2);
{for(var i = 0, len = gdjs.code_32generatorCode.GDdevice_9595idObjects2.length ;i < len;++i) {
    gdjs.code_32generatorCode.GDdevice_9595idObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.random(1000) + gdjs.random(1000)) + gdjs.evtTools.common.toString(gdjs.random(100)));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.toNumber((( gdjs.code_32generatorCode.GDdevice_9595idObjects2.length === 0 ) ? "" :gdjs.code_32generatorCode.GDdevice_9595idObjects2[0].getBehavior("Text").getText())));
}
}

}


{


gdjs.code_32generatorCode.userFunc0xfe45a8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("device_id"), gdjs.code_32generatorCode.GDdevice_9595idObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.code_32generatorCode.GDdevice_9595idObjects1.length === 0 ) ? "" :gdjs.code_32generatorCode.GDdevice_9595idObjects1[0].getBehavior("Text").getText()));
}

{ //Subevents
gdjs.code_32generatorCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.code_32generatorCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 1 :Araindamar Spear of Immortal", false);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("activation", "activated", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}

}


};gdjs.code_32generatorCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("activation", "activated", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}

{ //Subevents
gdjs.code_32generatorCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.code_32generatorCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.code_32generatorCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.code_32generatorCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.code_32generatorCode.GDBlueButtonObjects1[k] = gdjs.code_32generatorCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.code_32generatorCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.code_32generatorCode.GDcodeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.code_32generatorCode.GDcodeObjects1.length === 0 ) ? "" :gdjs.code_32generatorCode.GDcodeObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}

{ //Subevents
gdjs.code_32generatorCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


};

gdjs.code_32generatorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.code_32generatorCode.GDdevice_9595idObjects1.length = 0;
gdjs.code_32generatorCode.GDdevice_9595idObjects2.length = 0;
gdjs.code_32generatorCode.GDdevice_9595idObjects3.length = 0;
gdjs.code_32generatorCode.GDNewSpriteObjects1.length = 0;
gdjs.code_32generatorCode.GDNewSpriteObjects2.length = 0;
gdjs.code_32generatorCode.GDNewSpriteObjects3.length = 0;
gdjs.code_32generatorCode.GDcodeObjects1.length = 0;
gdjs.code_32generatorCode.GDcodeObjects2.length = 0;
gdjs.code_32generatorCode.GDcodeObjects3.length = 0;
gdjs.code_32generatorCode.GDBlueButtonObjects1.length = 0;
gdjs.code_32generatorCode.GDBlueButtonObjects2.length = 0;
gdjs.code_32generatorCode.GDBlueButtonObjects3.length = 0;
gdjs.code_32generatorCode.GDdeleteObjects1.length = 0;
gdjs.code_32generatorCode.GDdeleteObjects2.length = 0;
gdjs.code_32generatorCode.GDdeleteObjects3.length = 0;
gdjs.code_32generatorCode.GDJumpButtonObjects1.length = 0;
gdjs.code_32generatorCode.GDJumpButtonObjects2.length = 0;
gdjs.code_32generatorCode.GDJumpButtonObjects3.length = 0;

gdjs.code_32generatorCode.eventsList3(runtimeScene);
gdjs.code_32generatorCode.GDdevice_9595idObjects1.length = 0;
gdjs.code_32generatorCode.GDdevice_9595idObjects2.length = 0;
gdjs.code_32generatorCode.GDdevice_9595idObjects3.length = 0;
gdjs.code_32generatorCode.GDNewSpriteObjects1.length = 0;
gdjs.code_32generatorCode.GDNewSpriteObjects2.length = 0;
gdjs.code_32generatorCode.GDNewSpriteObjects3.length = 0;
gdjs.code_32generatorCode.GDcodeObjects1.length = 0;
gdjs.code_32generatorCode.GDcodeObjects2.length = 0;
gdjs.code_32generatorCode.GDcodeObjects3.length = 0;
gdjs.code_32generatorCode.GDBlueButtonObjects1.length = 0;
gdjs.code_32generatorCode.GDBlueButtonObjects2.length = 0;
gdjs.code_32generatorCode.GDBlueButtonObjects3.length = 0;
gdjs.code_32generatorCode.GDdeleteObjects1.length = 0;
gdjs.code_32generatorCode.GDdeleteObjects2.length = 0;
gdjs.code_32generatorCode.GDdeleteObjects3.length = 0;
gdjs.code_32generatorCode.GDJumpButtonObjects1.length = 0;
gdjs.code_32generatorCode.GDJumpButtonObjects2.length = 0;
gdjs.code_32generatorCode.GDJumpButtonObjects3.length = 0;


return;

}

gdjs['code_32generatorCode'] = gdjs.code_32generatorCode;
