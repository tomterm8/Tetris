// function that collapses the shape into the grid.

function collapseShapeToBackground(checkWin){

if(!waitForRespawn){
  if ( checkWin && checkEndCondition() ){
    return;
  }

   console.log('collapseShapeToBackground');


   for (var tmpRow=0;tmpRow<shapeArray.length;tmpRow++){
     for (var tmpCol=0;tmpCol<shapeArray[tmpRow].length;tmpCol++){
           //display shape on cell if shown

           	var arrayIndex = rowColToArrayIndex(shapeCol+tmpCol, shapeRow+tmpRow);

            if(shapeArray[tmpRow][tmpCol] != CELL_HIDDEN) {
                tetrisGrid[arrayIndex] = shapeArray[tmpRow][tmpCol] ;
            }
            else {
                console.log('This is a hidden value in the collapse shape')
            }

        }
      }


    checkGrid();

    console.log('About to call spawnShape');

        waitForMovement = false;
    spawnShape();

  }
}


/*
Collision detection section
*/
function collisionFloor(moveRow, collidingArray) {
  var totalHeight= moveRow + collidingArray.length;

  if ( totalHeight >= TILE_ROWS ){
    return(true);
  }

  return(false);
}

function collideWithWall(moveCol, collidingArray){

  // This is defensive programming. SpriteWidth generates the maximum width of
  // the sprite.
  var totalWidth= moveCol + spriteWidth(collidingArray);

  if (totalWidth > TILE_COLS){
    return(true);
  }

  return(false);
}

function collisionDetection(moveCol, moveRow, collidingArray){

  var arrayIndex;


  for (var tmpRow=0;tmpRow<collidingArray.length;tmpRow++){
    for (var tmpCol=0;tmpCol<collidingArray[tmpRow].length;tmpCol++){
          //display shape on cell if shown

            arrayIndex = rowColToArrayIndex(moveCol+tmpCol, moveRow+tmpRow);

           if((collidingArray[tmpRow][tmpCol] != CELL_HIDDEN)&&(tetrisGrid[arrayIndex] != CELL_HIDDEN)){
              console.log('collision detected')
               return(true);

           }

       }
     }
     // console.log('collision not detected');
     return(false);
}
