

	var canvas, canvasContext;
  var loaded = false;


  var framesPerSecond = 30;
  var score = 0;

/* called to load all the game into memory and
   initialize all resources */

function loadGame(){

  		// this section grabs the canvas
  		canvas = document.getElementById('gameCanvas');
  		canvasContext = canvas.getContext('2d');

			// this generates the sprie list of future sprites.
			generateSpriteList();

  		// actually used to initialize the grid in this case
			gridReset();

			// game has been loaded
			loaded = true;

			// start the game
  	  startGame();

			//console.log('Debug game loaded');
}


	function startGame(){

	// set up input events for keyboardHandler
	setupInput();

	// this will spawn the main sprite
	spawnShape();

	// we only want this to happen once
	if (loaded) {
			setInterval(updateAll, 1000/framesPerSecond);
			loaded = true;
		}


}

// this simply calls drawwALl but is kept in case we need to add logic to the update.
function updateAll() {
	moveShape();
  drawAll();
}



// draw all si
function drawAll() {
  clearScreen();
	drawHeader();
 	drawGrid();
}
