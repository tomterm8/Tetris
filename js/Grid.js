const TILE_W = 20;
const TILE_H = 20;
const TILE_GAP = 2;
const TILE_COLS = 20;
const TILE_ROWS = 30;

const TOP_GAP = 150;

const TILE_NORECURSION = 2;




//	var tetrisGrid = new Array(TILE_COLS * TILE_ROWS); // shows what squares
																									// have been revealed

  var tetrisGridBackup = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									   0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								 		 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
										 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									 	 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

    var tetrisGrid;

     const FULL_GRID = 1;
		 const EMPTY_GRID = 0;

		 function gridReset(){

        tetrisGrid = tetrisGridBackup.slice();

		 }


  	function outOfBounds(val, minBound, maxBound)
  	{
  		if (val< minBound){
  			return minBound;
  		} else if (val > maxBound) {
  			return maxBound;
  		} else {
  			return val;
  		}
  	}



    //  this is a function that simply checks if the cell is within
    // the array bounds
    function isTileAtColRow(col, row) {

  		if(col >= 0 && col < TILE_COLS &&
  			row >= 0 && row < TILE_ROWS) {

  			 return true;
  		} else {
  			return false;
  		}
  	}



    // calculates the index of a specific col and row position
    	function rowColToArrayIndex(col, row) {
    		return col + TILE_COLS * row;
    	}


      // function we use to draw the grid
			function drawGrid() {

				var gridColor = '';

        // iterate through the entire grid array
				for(var eachRow=0;eachRow<TILE_ROWS;eachRow++) {
					for(var eachCol=0;eachCol<TILE_COLS;eachCol++) {

            // calculate the index of each square
						var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

            // CELL_HIDDEN means that it is not occupied by a colour square yet
						if (tetrisGrid[arrayIndex] == CELL_HIDDEN) {
							 gridColor = 'green';
						}
						else {
               // we use the colour of any occupied square in the tetris grid
							 gridColor = tetrisGrid[arrayIndex];
						}

            // simply prints out the grid square
						colorRect(TILE_W*eachCol,TILE_H*eachRow + TOP_GAP,
							TILE_W-TILE_GAP,TILE_H-TILE_GAP, gridColor);

					} // end of for each tile
				} // end of for each row
				drawShape(TOP_GAP);
			} // end of drawTiles func





      // this function draws the header above the tetris grid
      function drawHeader(){
        colorText('Score: ' + score, 20,20, 'white');
        var currentPos = 60;

        for (var i=0; i < spriteList.length; i++){
          drawSprite( spriteList[i].slice(), 40, currentPos);
          // spriteWidth(spiteList[i])*TILE_W is the actual width of the sprite
          // in pixels.
          currentPos += spriteWidth(spriteList[i])*TILE_W + TILE_W;

        }

      }

// adds a empty row to the too of the grid.
function addRowToTopOfGrid(){
    for (var eachCol=0;eachCol<TILE_COLS;eachCol++){
      tetrisGrid.unshift(EMPTY_GRID);
    }

}

// TO DO: could probably improve score method, but not essential.
// this is proof of concept.

// really need to refacor these classes.

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

//  function to remove a given row from the grid
function removeRow(row){
     var arrayIndex = rowColToArrayIndex(0, row);
     calculateScore(row);


     // get the grid in front of the row we want to delete
     var  tetrisGridFront = tetrisGrid.slice(0, arrayIndex);

     // concat the grid after the row we want to delete.
     tetrisGrid = tetrisGridFront.concat( tetrisGrid.slice( arrayIndex + TILE_COLS, tetrisGrid.length));

}

//function that actions delete row, then adds row to top of grid, and
// then actuall draws the grid.

function actionDelete(row){
  removeRow(row);
  addRowToTopOfGrid();
  drawGrid();
}

// checks the entire grid for rows that can be removed.

// ToDo: could be made more efficient by checking only rows withihin shapeHeight
function checkGrid(){
  var delRow;

  for(var eachRow=0;eachRow<TILE_ROWS;eachRow++) {
    delRow = true;


    for(var eachCol=0;eachCol<TILE_COLS;eachCol++) {

        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

        if (tetrisGrid[arrayIndex] == EMPTY_GRID) {
          delRow = false;
          break;
        }


    }

    // this will delete the specific row that we want to delete
    // and add a row to the top of the grid.
    if (delRow) {
        actionDelete(eachRow);
        delRow = false;
    }



  }

}
