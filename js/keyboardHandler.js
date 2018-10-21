const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeld_Left = 0;
var	keyHeld_Right = 0;
var keyHeld_Switch = 0;
var	keyHeld_drop = 0;


function setupInput() {

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

}

/* how this works probably ought to change */


function keySet(keyEvent, setTo) {
  //used for debug
	//console.log('Key pressed ' + keyEvent.keyCode)


	if(keyEvent.keyCode == KEY_LEFT_ARROW) {
		keyHeld_Left += setTo;

	}
	if(keyEvent.keyCode == KEY_RIGHT_ARROW) {
		keyHeld_Right += setTo;
	}
	if(keyEvent.keyCode == KEY_UP_ARROW) {
		keyHeld_Switch += setTo * 1.5;
	}
	if(keyEvent.keyCode == KEY_DOWN_ARROW ) {
		keyHeld_drop += setTo * 5;
	}

 // debug code for collapseShapeToBackground
	if(keyEvent.keyCode == 87)
	{
		collapseShapeToBackground(false);
	}
//  console.log(keyHeld_Left, keyHeld_Right, keyHeld_Switch, keyHeld_drop)
}

// these handle the keypress events
function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, 1);

	evt.preventDefault();
}

function keyReleased(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, 0);
}
