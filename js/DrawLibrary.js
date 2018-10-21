

	// these functions allow us to draw a tileGrid
	function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		canvasContext.fillStyle = fillColor;
		canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
	}

	function colorCircle(centerX,centerY, radius, fillColor) {
		canvasContext.fillStyle = fillColor;
		canvasContext.beginPath();
		canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
		canvasContext.fill();
	}

	function colorText(showWords, textX,textY, fillColor) {
		canvasContext.fillStyle = fillColor;
		canvasContext.fillText(showWords, textX, textY);
	}

  function clearScreen(){
    	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen
  }
