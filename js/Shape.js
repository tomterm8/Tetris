// first tetris shape

// to do: rotation movement checker
// to do: add score

// To Do: refactor me.
// To Do: Test me.




const CELL_HIDDEN = 0;
//const CELL_SHOWN = 1;


var shapeArray;

var shapeCol = 0;
var shapeRow = 0;
var shapeWidth;
var shapeHeight;
var shapeDirection = 0;

var waitForMovement = false;
var waitForRespawn = false;

const MOVE_LEFT = 1;
const MOVE_RIGHT = 2;
const MOVE_DOWN = 3;

 const MOVEMENT_DELAY = 10;


// Function that automatically respawns the shape sprite

function spawnShape(){

    //shapeArray = generateSprite();
    console.log('called spawn shape')
    shapeArray = getNextSprite();

   shapeWidth = shapeArray[0].length;
   shapeCol = Math.floor(Math.random() * (TILE_COLS-3));
   shapeRow = 0;
   shapeHeight = shapeArray.length;
   shapeDirection = 0;
   waitForMovement = false;
   waitForRespawn = false;

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



/*
          FUNCTION THAT DRAWS THE SHAPE
*/

   function drawShape(addHeight){

       for (var tmpRow=0;tmpRow<shapeArray.length;tmpRow++){
         for (var tmpCol=0;tmpCol<shapeArray[tmpRow].length;tmpCol++){
              //display shape on cell if shown
               if (shapeArray[tmpRow][tmpCol] != CELL_HIDDEN){
                  colorRect(TILE_W*(shapeCol+tmpCol),TILE_H*(shapeRow+tmpRow) + addHeight,
                    TILE_W-TILE_GAP,TILE_H-TILE_GAP, shapeArray[tmpRow][tmpCol]);

                }
          }
      }

   }







/*

FUNCTION THAT ROTATES SHAPE BY 90 DEGREES

*/


function recalculateShapeDimensions(){
   shapeWidth = shapeArray[0].length;
   shapeHeight = shapeArray.length;
}


// heloer function to rotate the shape.
function rotateShape(moveCol,moveRow)
{
  var rotatedShapeArray = rotateMatrix(shapeArray, -90);

  // prevents any other movement taking place until we update the shape.
  waitForMovement = true;


  // toDo: what about collide with the wall on either side.
  // left side is always OK, but right side we can go off the grid...



  // if we don't collide with floor, or with a background object
  if ( !(collisionDetection(moveCol, moveRow, rotatedShapeArray))
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


    // TODO check collision here
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
