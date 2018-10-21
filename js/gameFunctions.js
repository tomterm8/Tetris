

	var canvas, canvasContext;
  var loaded = false;


  var framesPerSecond = 30;
  var score = 0;
	
function loadGame(){

  		// this section grabs the canvas
  		canvas = document.getElementById('gameCanvas');
  		canvasContext = canvas.getContext('2d');

			generateSpriteList();

  		// stops context menu on right click
  		//document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

			gridReset();

			loaded = true;
  	  startGame();
			console.log('Debug game loaded');
}


	function startGame(){

	// set up input events for keyboardHandler
	setupInput();

	spawnShape();

	// we only want this to happen once
	if (loaded) {
			setInterval(updateAll, 1000/framesPerSecond);
			loaded = true;
		}

		//updateAll();

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
