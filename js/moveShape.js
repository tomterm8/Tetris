

/*

FUNCTION THAT ROTATES SHAPE BY 90 DEGREES

*/
function rotateShape(moveCol,moveRow)
{
  var rotatedShapeArray = rotateMatrix(shapeArray, -90);

  // prevents any other movement taking place until we update the shape.
  waitForMovement = true;


  // if we don't collide with floor, or with a background object
  if ( !(collideWithWall(moveCol, rotatedShapeArray)) &&
      !(collisionDetection(moveCol, moveRow, rotatedShapeArray))
      && !(collisionFloor(moveRow, rotatedShapeArray))
       ) {

    //we save the rotated shape in the shape array
    shapeArray = rotatedShapeArray;

    // and we recalculate the shapes dimensions
    recalculateShapeDimensions();
  }
  // otherwise, we just don't rotate the shape.


  waitForMovement = false;
};






/*

HELPER FUNCTION THAT MOVES SHAPE.

*/

// direction: -1 for left, 1 for right
function moveShapeAcross(direction,   moveCol,moveRow){
  moveCol =  outOfBounds(shapeCol+direction, 0, TILE_COLS-shapeWidth);

  if (!(collisionDetection(moveCol, moveRow, shapeArray))){
     shapeCol = moveCol;
  }
}

function moveShapeDown(moveCol,moveRow){
  if (waitForMovement){
    return;
  }
  waitForMovement = true;

  moveRow = outOfBounds(shapeRow+1, 0, TILE_ROWS-shapeHeight);


  if (collisionDetection(moveCol,moveRow, shapeArray)){
    collapseShapeToBackground(true);
    return;
  } else if (collisionFloor(moveRow, shapeArray)){
    shapeRow = moveRow;
    collapseShapeToBackground(true);
    return;
  };

  shapeRow = moveRow;


  keyHeld_drop = 0;

  waitForMovement = false;
}



   function moveShape(){

     var moveCol = shapeCol;
     var moveRow = shapeRow;
     if (waitForMovement){
       return;
     }

     if (keyHeld_Left >=  MOVEMENT_DELAY)
     {
       moveShapeAcross(-1, moveCol,moveRow);

       keyHeld_Left = 0;
     };

     if (	keyHeld_Right >= MOVEMENT_DELAY){
         moveShapeAcross(1, moveCol,moveRow);

         keyHeld_Right = 0;
     };


    if (keyHeld_Switch >= MOVEMENT_DELAY){
          rotateShape(moveCol,moveRow);
          keyHeld_Switch = 0;


      }


     // THIS IS FOR DOWNWARD MOVEMENTS
     keyHeld_drop++;


     if (	keyHeld_drop >= (MOVEMENT_DELAY*2)){
        moveShapeDown(moveCol,moveRow);

     };



   }
