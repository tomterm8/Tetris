// Shape is an active sprite on the screen, i.e. a tetrino

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






   // helper function to calculate the current dimensions of shape
   //
   function recalculateShapeDimensions(){
      shapeWidth = shapeArray[0].length;
      shapeHeight = shapeArray.length;
   }
