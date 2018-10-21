var spriteGeneratorArray = [
    [
      [0, 1, 0],
      [1, 1, 1] ],

    [ [1,1],
      [1,1] ],

    [ [1],
      [1],
      [1],
      [1] ],

    [ [1,0],
      [1,0],
      [1,0],
      [1,1]],

    [ [0,1],
      [0,1],
      [0,1],
      [1,1] ],

    [ [1,1,0],
      [0,1,1] ],

    [ [0,1,1],
      [1,1,0]]
] ;

var spriteList = new Array();

const NUMBER_IN_SPRITE_LIST = 3;




  function selectColour(){
    const SELECTED_RED = 0;
    const SELECTED_BLUE = 1;
    const SELECTED_YELLOW = 2;
    const SELECTED_BROWN = 3;
    const SELECTED_PURPLE = 4;
    var diceRole = Math.floor(Math.random(5)*5);
    switch (diceRole){
      case SELECTED_RED:
        return('red');
        break;
      case SELECTED_BLUE:
        return('blue');
        break;
      case SELECTED_BROWN:
        return('brown');
        break;
      case SELECTED_YELLOW:
        return('yellow');
        break;
      case SELECTED_PURPLE:
        return('purple');
        break;
      };
      console.log('Should never get here in selectColour')
  }



  function colourizeSprite(tmpSprite){
    var selectedColour;

    var tmpArray = tmpSprite.slice();

    selectedColour  = selectColour();

    for (var tmpRow=0;tmpRow<tmpArray.length;tmpRow++){
      for (var tmpCol=0;tmpCol<tmpArray[tmpRow].length;tmpCol++){
        if (tmpArray[tmpRow][tmpCol] != CELL_HIDDEN) {
          tmpArray[tmpRow][tmpCol] = selectedColour;
        }
      }
    }

    return(tmpArray);

  }

    function generateSpriteList(){

      for(var i=0; i < NUMBER_IN_SPRITE_LIST; i++){
        addSpriteToList();
      };
    }

    // helper gameFunctions
    function addSpriteToList(){
      spriteList.push(colourizeSprite(generateSprite()));
    }

    function getNextSprite(){
      var currentSprite;

      currentSprite = spriteList.shift();
      addSpriteToList();

      return(currentSprite);
    }


// function that gets a sprite from the Sprite Gnerator Array
    function generateSprite(){
    var noOfSprites = spriteGeneratorArray.length;

    var selectedSprite = Math.floor(Math.random(noOfSprites) * noOfSprites);

    return spriteGeneratorArray[selectedSprite].slice();
    }

    function drawSprite(tmpSprite,  addHeight, addWidth){
        for (var tmpRow=0;tmpRow<tmpSprite.length;tmpRow++){
          for (var tmpCol=0;tmpCol<tmpSprite[tmpRow].length;tmpCol++){
               //display shape on cell if shown
                if (tmpSprite[tmpRow][tmpCol] != CELL_HIDDEN){
                   colorRect(TILE_W*(tmpCol) +addWidth,TILE_H*(tmpRow) + addHeight,
                     TILE_W-TILE_GAP,TILE_H-TILE_GAP, tmpSprite[tmpRow][tmpCol]);

                 }
           }
       }
    }
