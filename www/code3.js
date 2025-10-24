gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode = {};
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.localVariables = [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.idToCallbackMap = new Map();
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects3= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects3= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects3= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects3= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects3= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects3= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2= [];
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects3= [];


gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2);
{for(var i = 0, len = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2[i].ActivateControl(false, null);
}
}
}

}


};gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.mapOfGDgdjs_9546chapter_9595321_959532_959558Araindamar_959532Spear_959532of_959532ImmortalCode_9546GDFlatDarkJoystickObjects2Objects = Hashtable.newFrom({"FlatDarkJoystick": gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2});
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Touch controls", 0, 0, 0);
}

{ //Subevents
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.mapOfGDgdjs_9546chapter_9595321_959532_959558Araindamar_959532Spear_959532of_959532ImmortalCode_9546GDFlatDarkJoystickObjects2Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2 */
{for(var i = 0, len = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2[i].TeleportAndPress(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2[k] = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8952484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2 */
{for(var i = 0, len = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2[i].setColor("74;74;74");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1[k] = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9683980);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1 */
{for(var i = 0, len = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1[i].setColor("255;255;255");
}
}
}

}


};gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Red_Hat_Boy"), gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("bottomchecker"), gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1.length;i<l;++i) {
    if ( gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1[i].getX() >= (( gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1.length === 0 ) ? 0 :gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1[0].getPointX("")) - 500 ) {
        isConditionTrue_0 = true;
        gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1[k] = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1[i];
        ++k;
    }
}
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "bagan1", (( gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1.length === 0 ) ? 0 :gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1[0].getPointX("")), (( gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1.length === 0 ) ? 0 :gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1[0].getPointY("")), 0);
}
{for(var i = 0, len = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1.length ;i < len;++i) {
    gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects3.length = 0;

gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.eventsList2(runtimeScene);
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDBackgroundObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDRed_9595Hat_9595BoyObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDbottomcheckerObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDNewScreenOrientationCheckerObjects3.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects1.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects2.length = 0;
gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode.GDJumpButtonObjects3.length = 0;


return;

}

gdjs['chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode'] = gdjs.chapter_321_32_58Araindamar_32Spear_32of_32ImmortalCode;
