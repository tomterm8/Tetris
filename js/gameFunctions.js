

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


//function to check win checkWinCondition

function checkEndCondition(){
  if ( shapeRow == 0  ){
    alert('Game Over');
    gridReset();
    spawnShape();
    return(true);
  } else {
    return(false)}
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

function calculateScore(row) {
  var arrayIndex = rowColToArrayIndex(0, row);
  var scoreArray = tetrisGrid.slice( arrayIndex, arrayIndex + TILE_COLS);
  var calculatedScore = 0;
  // calculate the score for every colour
  for(var i =0; i <= scoreArray.length; i++){

    // the scoreArray contains a square with a colour in it, we add the
    // value of that colour to the score.
    switch (scoreArray[i]){
      case 'red':
        calculatedScore += SCORE_RED;
        break;
      case 'blue':
        calculatedScore += SCORE_BLUE;
        break;
      case 'brown':
          calculatedScore += SCORE_BROWN;
        break;
      case 'yellow':
        calculatedScore += SCORE_YELLOW;
        break;
      case 'purple':
          calculatedScore += SCORE_PURPLE
        break;
      };
  }

  score += calculatedScore;
}

// draw all si
function drawAll() {
  clearScreen();
	drawHeader();
 	drawGrid();
}
