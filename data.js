function Keys(){
	// private variables
	var keys = [{"key":"C","signature":"0","major_chords":[{"tonic":"C","sub_dom":"F","dom":"G7"}],"relative_minor_chords":[{"0":"Am","1":"Dm","2":"E7"}],"accidental_chords":[{"dbl_dom":"D7","tri_dom":"A7","dom_rel_minor":"E7"}]},{"key":"G","signature":"1#","major_chords":[{"tonic":"G","sub_dom":"C","dom":"D7"}],"relative_minor_chords":[{"0":"Em","1":"Am","2":"B7"}],"accidental_chords":[{"dbl_dom":"A7","tri_dom":"E7","dom_rel_minor":"B7"}]},{"key":"D","signature":"2#","major_chords":[{"tonic":"D","sub_dom":"G","dom":"A7"}],"relative_minor_chords":[{"0":"Bm","1":"Em","2":"F#7"}],"accidental_chords":[{"dbl_dom":"E7","tri_dom":"B7","dom_rel_minor":"F#7"}]},{"key":"A","signature":"3#","major_chords":[{"tonic":"A","sub_dom":"D","dom":"E7"}],"relative_minor_chords":[{"0":"F#m","1":"Bm","2":"C#7"}],"accidental_chords":[{"dbl_dom":"B7","tri_dom":"F#7","dom_rel_minor":"C#7"}]},{"key":"E","signature":"4#","major_chords":[{"tonic":"E","sub_dom":"A","dom":"B7"}],"relative_minor_chords":[{"0":"C#m","1":"F#m","2":"G#7"}],"accidental_chords":[{"dbl_dom":"F#7","tri_dom":"C#7","dom_rel_minor":"Ab7"}]},{"key":"B","signature":"5#","major_chords":[{"tonic":"B","sub_dom":"E","dom":"F#7"}],"relative_minor_chords":[{"0":"G#m","1":"C#m","2":"D#7"}],"accidental_chords":[{"dbl_dom":"C#7","tri_dom":"Ab7","dom_rel_minor":"Eb7"}]},{"key":"F#","signature":"6#(b)","major_chords":[{"tonic":"F#","sub_dom":"B","dom":"C#7"}],"relative_minor_chords":[{"0":"D#m","1":"G#m","2":"A#7"}],"accidental_chords":[{"dbl_dom":"Ab7","tri_dom":"Eb7","dom_rel_minor":"Bb7"}]},{"key":"Db","signature":"5b","major_chords":[{"tonic":"Db","sub_dom":"Gb","dom":"Ab7"}],"relative_minor_chords":[{"0":"Bbm","1":"Ebm","2":"F7"}],"accidental_chords":[{"dbl_dom":"Eb7","tri_dom":"Bb7","dom_rel_minor":"F7"}]},{"key":"Ab","signature":"4b","major_chords":[{"tonic":"Ab","sub_dom":"Db","dom":"Eb7"}],"relative_minor_chords":[{"0":"Fm","1":"Bbm","2":"C7"}],"accidental_chords":[{"dbl_dom":"Bb7","tri_dom":"F7","dom_rel_minor":"C7"}]},{"key":"Eb","signature":"3b","major_chords":[{"tonic":"Eb","sub_dom":"Ab","dom":"Bb7"}],"relative_minor_chords":[{"0":"Cm","1":"Fm","2":"G7"}],"accidental_chords":[{"dbl_dom":"F7","tri_dom":"C7","dom_rel_minor":"G7"}]},{"key":"Bb","signature":"2b","major_chords":[{"tonic":"Bd","sub_dom":"Eb","dom":"F7"}],"relative_minor_chords":[{"0":"Gm","1":"Cm","2":"D7"}],"accidental_chords":[{"dbl_dom":"C7","tri_dom":"G7","dom_rel_minor":"D7"}]},{"key":"F","signature":"1b","major_chords":[{"tonic":"F","sub_dom":"Bb","dom":"C7"}],"relative_minor_chords":[{"0":"Dm","1":"Gm","2":"A7"}],"accidental_chords":[{"dbl_dom":"G7","tri_dom":"D7","dom_rel_minor":"A7"}]}];
	// x,y cordinates
	var yCord = [{"y":"75"},{"y":""},{"y":""},{"y":""},{"y":""},{"y":""}];

	//get a reference to the canvas
	var canvas = $('#results canvas');
	var canvasW = canvas.width();
	var canvasH = canvas.height();
	var ctx = $(canvas)[0].getContext("2d");

	// private functions
	circle = function(x, y, color) {
		ctx.fillStyle = 'grey';
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, Math.PI*2, true); 
		ctx.closePath();
		ctx.fill();
	}
	vline = function(x, w, color) {
	
		ctx.lineWidth = w;
		ctx.beginPath();
	    ctx.moveTo(x,0);
	    ctx.lineTo(x,canvas.height());
		ctx.strokeStyle = "black";
	    ctx.stroke();
	}
	buildGrid = function(k) {
		// Get api placement
		
		$('#results').show();
		
		// print canvas
		// Create horizontal lines
		
		// Create horizontal lines
		for (var i=1; i < 6; i++) {
			 vline((canvas.width()/12)*i, 6-i);
		};
		//loop through chords
		circle(canvas.width()/12, 50);
	   
	    console.log(canvas.height());
		
		
	}
	getSignature = function(id) {
		return keys[id].signature;
	}
	
	return {
		init: function(){

			// create keys
			$.each(keys, function(i, v) { 
				$('#key ul').append('<li rel="'+i+'">'+v.key+'</li>');
			});
			// live event for keys
			$('#key ul li').live('click', function(event) {
				id = $(this).attr('rel');
				
				buildGrid(keys[id]);
				
				
				console.log('Key ID: '+id);
				console.log('Signature: '+getSignature(id));
				console.log(canvas.height());
			});
			/*
			window.onresize = function() {
			    var C = 0.8;        // canvas width to viewport width ratio
			    var W_TO_H = 2/1;   // canvas width to canvas height ratio

			    // For IE compatibility http://www.google.com/search?q=get+viewport+size+js
			    var viewportWidth = window.innerWidth;
			    var viewportHeight = window.innerHeight;

			}
			*/
		}
		
	}
	
}

// Object
var keys = new Keys();
keys.init();

