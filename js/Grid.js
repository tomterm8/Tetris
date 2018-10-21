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

			 	//tetrisGrid = new Array(TILE_COLS * TILE_ROWS);
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




    function isTileAtColRow(col, row) {
  		if(col >= 0 && col < TILE_COLS &&
  			row >= 0 && row < TILE_ROWS) {
  		/*	 var tileIndexUnderCoord = rowColToArrayIndex(col, row);
  			 return tileGrid[tileIndexUnderCoord]; */
  			 return true;
  		} else {
  			return false;
  		}
  	}




    	function rowColToArrayIndex(col, row) {
    		return col + TILE_COLS * row;
    	}

			function drawGrid() {

				var gridColor = '';

				for(var eachRow=0;eachRow<TILE_ROWS;eachRow++) {
					for(var eachCol=0;eachCol<TILE_COLS;eachCol++) {

						var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

						if (tetrisGrid[arrayIndex] == CELL_HIDDEN) {
							 gridColor = 'green';
						}
						else {
							 gridColor = tetrisGrid[arrayIndex];
						}
						colorRect(TILE_W*eachCol,TILE_H*eachRow + TOP_GAP,
							TILE_W-TILE_GAP,TILE_H-TILE_GAP, gridColor);

					} // end of for each tile
				} // end of for each row
				drawShape(TOP_GAP);
			} // end of drawTiles func

      function drawHeader(){
        colorText('Next Shape:', 20,20, 'white');

        drawSprite( spriteList[0].slice(), 30, 60);
        drawSprite( spriteList[1].slice(), 30, 160);
        drawSprite( spriteList[2].slice(), 30, 320);
      }

// adds a empty row to the too of the grid.
function addRowToTopOfGrid(){
    for (var eachCol=0;eachCol<TILE_COLS;eachCol++){
      tetrisGrid.unshift(EMPTY_GRID);
    }

}

//
//  function to remove a given row from the grid
function removeRow(row){
     var arrayIndex = rowColToArrayIndex(0, row);

     // get the grid in front of the row we want to delete
     var  tetrisGridFront = tetrisGrid.slice(0, arrayIndex);

     // concat the grid after the row we want to delete.
     tetrisGrid = tetrisGridFront.concat( tetrisGrid.slice( arrayIndex + TILE_COLS, tetrisGrid.length));

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

    if (delRow) {
        removeRow(eachRow);
        addRowToTopOfGrid();
        drawGrid();
        delRow = false;

    }



  }

}
