$(document).ready(function() {
	var w=0;
	var h =0;
	var canvas = document.getElementById('CodeCanvas');
	var context = canvas.getContext('2d');

	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		w = parseInt(window.innerWidth);
		h = parseInt(window.innerHeight);
		/**
		 * Your drawings need to be inside this function otherwise they will be reset when
		 * you resize the browser window and the canvas goes will be cleared.
		 */
		drawStuff(w,h);
	}

	resizeCanvas();

	function drawStuff(w,h) {
		
		var text  ;

		var lineHeight = 15;
		 wrapText(context,text,0,0,w,lineHeight);
	
	
	}
	
	function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }
	
	

});
