function Keys(){
	// private variables
	var keys = [{key:"C",signature:"minor0",major_chords:[{tonic:[{chord:"C",modf:"major"}],sub_dom:[{chord:"F",modf:"major"}],dom:[{chord:"G",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"A",modf:"minor"}],minor1:[{chord:"D",modf:"minor"}],minor2:[{chord:"E",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"D",modf:"7"}],tri_dom:[{chord:"A",modf:"7"}],dom_rel_minor:[{chord:"E",modf:"7"}]}]},{key:"G",signature:"1#",major_chords:[{tonic:[{chord:"G",modf:"major"}],sub_dom:[{chord:"C",modf:"major"}],dom:[{chord:"D",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"E",modf:"minor"}],minor1:[{chord:"A",modf:"minor"}],minor2:[{chord:"B",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"A",modf:"7"}],tri_dom:[{chord:"E",modf:"7"}],dom_rel_minor:[{chord:"B",modf:"7"}]}]},{key:"D",signature:"2#",major_chords:[{tonic:[{chord:"D",modf:"major"}],sub_dom:[{chord:"G","modf":"major"}],dom:[{chord:"A","modf":"7"}]}],relative_minor_chords:[{minor0:[{chord:"B",modf:"minor"}],minor1:[{chord:"E",modf:"minor"}],minor2:[{chord:"F#",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"E",modf:"7"}],tri_dom:[{chord:"B",modf:"7"}],dom_rel_minor:[{chord:"F#",modf:"7"}]}]},{key:"A",signature:"3#",major_chords:[{tonic:[{chord:"A",modf:"major"}],sub_dom:[{chord:"D",modf:"major"}],dom:[{chord:"E",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"F#",modf:"minor"}],minor1:[{chord:"B",modf:"minor"}],minor2:[{chord:"C#",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"B",modf:"7"}],tri_dom:[{chord:"F#",modf:"7"}],dom_rel_minor:[{chord:"C#",modf:"7"}]}]},{key:"E",signature:"4#",major_chords:[{tonic:[{chord:"E",modf:"major"}],sub_dom:[{chord:"A",modf:"major"}],dom:[{chord:"B",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"C#",modf:"minor"}],minor1:[{chord:"F#",modf:"minor"}],minor2:[{chord:"G#",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"F#",modf:"7"}],tri_dom:[{chord:"C#",modf:"7"}],dom_rel_minor:[{chord:"Ab",modf:"7"}]}]},{key:"B",signature:"5#",major_chords:[{tonic:[{chord:"B",modf:"major"}],sub_dom:[{chord:"E",modf:"major"}],dom:[{chord:"F#",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"G#",modf:"minor"}],minor1:[{chord:"C#",modf:"minor"}],minor2:[{chord:"D#",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"C#",modf:"7"}],tri_dom:[{chord:"Ab",modf:"7"}],dom_rel_minor:[{chord:"Eb",modf:"7"}]}]},{key:"F#",signature:"6#(b)",major_chords:[{tonic:[{chord:"F#",modf:"major"}],sub_dom:[{chord:"B",modf:"major"}],dom:[{chord:"C#",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"D#",modf:"minor"}],minor1:[{chord:"G#",modf:"minor"}],minor2:[{chord:"A#",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"Ab",modf:"7"}],tri_dom:[{chord:"Eb",modf:"7"}],dom_rel_minor:[{chord:"Bb",modf:"7"}]}]},{key:"Db",signature:"5b",major_chords:[{tonic:[{chord:"Db",modf:"major"}],sub_dom:[{chord:"Gb",modf:"major"}],dom:[{chord:"Ab",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"Bb",modf:"minor"}],minor1:[{chord:"Eb",modf:"major"}],minor2:[{chord:"F",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"Eb",modf:"7"}],tri_dom:[{chord:"Bb",modf:"7"}],dom_rel_minor:[{chord:"F",modf:"7"}]}]},{key:"Ab",signature:"4b",major_chords:[{tonic:[{chord:"Ab",modf:"major"}],sub_dom:[{chord:"Db",modf:"major"}],dom:[{chord:"Eb",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"F",modf:"minor"}],minor1:[{chord:"Bb",modf:"minor"}],minor2:[{chord:"C",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"Bb",modf:"7"}],tri_dom:[{chord:"F",modf:"7"}],dom_rel_minor:[{chord:"C",modf:"7"}]}]},{key:"Eb",signature:"3b",major_chords:[{tonic:[{chord:"Eb",modf:"major"}],sub_dom:[{chord:"Ab",modf:"major"}],dom:[{chord:"Bb",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"C",modf:"minor"}],minor1:[{chord:"F",modf:"minor"}],minor2:[{chord:"G",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"F",modf:"7"}],tri_dom:[{chord:"C",modf:"7"}],dom_rel_minor:[{chord:"G",modf:"7"}]}]},{key:"Bb",signature:"2b",major_chords:[{tonic:[{chord:"Bb",modf:"major"}],sub_dom:[{chord:"Eb",modf:"major"}],dom:[{chord:"F",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"G",modf:"minor"}],minor1:[{chord:"C",modf:"minor"}],minor2:[{chord:"D",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"C",modf:"7"}],tri_dom:[{chord:"G",modf:"7"}],dom_rel_minor:[{chord:"D",modf:"7"}]}]},{key:"F",signature:"1b",major_chords:[{tonic:[{chord:"F",modf:"major"}],sub_dom:[{chord:"Bb",modf:"major"}],dom:[{chord:"C",modf:"7"}]}],relative_minor_chords:[{minor0:[{chord:"D",modf:"minor"}],minor1:[{chord:"G",modf:"minor"}],minor2:[{chord:"A",modf:"7"}]}],accidental_chords:[{dbl_dom:[{chord:"G",modf:"7"}],tri_dom:[{chord:"D",modf:"7"}],dom_rel_minor:[{chord:"A",modf:"7"}]}]}];
	
	var strings = [{"e":"1","a":"2","d":"3","g":"4","b":"5","e2":"6"}];

	//get a reference to the canvas
	var canvas = $('.fretboard canvas');
	//var chord = 0;
	//var ctx = $(canvas)[chord].getContext("2d");

	// fretboard and finger indicators
	finger = function(x, y, color,id) {
		$(canvas)[id].getContext("2d").fillStyle = color;
		$(canvas)[id].getContext("2d").beginPath();
		$(canvas)[id].getContext("2d").arc(x, y, canvas.height()*.04, 0, Math.PI*2, false); 
		$(canvas)[id].getContext("2d").closePath();
		$(canvas)[id].getContext("2d").fill();
	}
	guitarString = function(x, w, color,id) {
		$(canvas)[id].getContext("2d").lineWidth = w;
		$(canvas)[id].getContext("2d").beginPath();
	    $(canvas)[id].getContext("2d").moveTo(x,0);
	    $(canvas)[id].getContext("2d").lineTo(x,canvas.height());
		$(canvas)[id].getContext("2d").strokeStyle = color;
	    $(canvas)[id].getContext("2d").stroke();
	}
	fret = function(y, w, color,id) {
		$(canvas)[id].getContext("2d").lineWidth = w;
		$(canvas)[id].getContext("2d").beginPath();
	    $(canvas)[id].getContext("2d").moveTo(0,y);
	    $(canvas)[id].getContext("2d").lineTo(canvas.width()*2,y);
		$(canvas)[id].getContext("2d").strokeStyle = color;
	    $(canvas)[id].getContext("2d").stroke();
	}
	fingerY = function(i) {
		return ((canvas.height()/8) * i) - ((canvas.height()/8)/2)
	}
	
	// build out the fretboard
	buildFrets = function(c,m,k) {

		//$('.fretboard').show();
		canvas.attr('height', $('.fretboard').height());
		canvas.attr('width', $('.fretboard').width());
		var fretHeight = canvas.height()/8;
		var stringSpace = canvas.width()/7;
		var me = k;
		//loop through chords
		if (!m) {
			modf="";
		} else {
			modf="&modf="+escape(m);
		}
		var api_url = 'http://pargitaru.co.cc/api/?request=chords&chord='+escape(c)+modf;
		console.log(api_url);
		$.get(api_url, function(data) {
			console.log(data.chords[0]);
			// Create horizontal lines
			for (var i=1; i < 8; i++) {
				 fret(fretHeight*i, 1,"#ccc",me);
			};
			// Create vertical lines
			for (var i=1; i < 7; i++) {
				 guitarString(stringSpace*i, 4-i,"#666",me);
			};
			$.each(data.chords[0], function(i, v) {
				if(v!=0) {
					finger(stringSpace*strings[0][i], fingerY(v),"#09f",me);
				}
			});
		},'jsonp');
		
	}
	getSignature = function(id) {
		return keys[id].signature;
	}
	// ...a sloppy preloader
	loading = function(active) {
		if (active) {
			$('#preloader').fadeIn('fast');
		} else {
			$('#preloader').fadeOut('fast');
		}
	}
	
	return {
		init: function(){
			loading(true);
			// create keys
			$.each(keys, function(i, v) { 
				$('#key ul').append('<li rel="'+i+'">'+v.key+'</li>');
			});
			loading(false);
			// live event for keys
			$('#key ul li').click(function() {
				// hide/show next screen
				loading(true);
				$('#key').toggle();
				$('#results').toggle();
				// Take selected key and place it as selected on the next screen
				$('#selected-key').html($(this).text());
				// make this key selected
				$('#key').addClass('selected');
				$('#key ul li').removeClass('active');
				$(this).addClass('active');
				// set key id
				id = $(this).attr('rel');
				//Major Chords
				buildFrets(keys[id].major_chords[0].tonic[0].chord,keys[id].major_chords[0].tonic[0].modf,0);
				buildFrets(keys[id].major_chords[0].sub_dom[0].chord,keys[id].major_chords[0].sub_dom[0].modf,1);
				buildFrets(keys[id].major_chords[0].dom[0].chord,keys[id].major_chords[0].dom[0].modf,2);
				//Accidental Chords
				buildFrets(keys[id].accidental_chords[0].dbl_dom[0].chord,keys[id].accidental_chords[0].dbl_dom[0].modf,3);
				buildFrets(keys[id].accidental_chords[0].tri_dom[0].chord,keys[id].accidental_chords[0].tri_dom[0].modf,4);
				buildFrets(keys[id].accidental_chords[0].dom_rel_minor[0].chord,keys[id].accidental_chords[0].dom_rel_minor[0].modf,5);
				//Relative Chords
				buildFrets(keys[id].relative_minor_chords[0].minor0[0].chord,keys[id].relative_minor_chords[0].minor0[0].modf,6);
				buildFrets(keys[id].relative_minor_chords[0].minor1[0].chord,keys[id].relative_minor_chords[0].minor1[0].modf,7);
				buildFrets(keys[id].relative_minor_chords[0].minor2[0].chord,keys[id].relative_minor_chords[0].minor2[0].modf,8);
				// assign rel as ref to resize canvas
				canvas.attr('rel', id);
				loading(false);
			});
			$('button').click(function() {
				// hide/show next screen
				$('#key').toggle();
				$('#results').toggle();
			});
			/*
			window.onresize = function() {
				// resize canvas
				// if canvas.rel
				if (canvas.attr('rel')) {
					// build grid with canvas.rel
					buildFrets(keys[canvas.attr('rel')]);
				};
			}
			*/
		}
		
	}
	
}

// Object
var keys = new Keys();
keys.init();

