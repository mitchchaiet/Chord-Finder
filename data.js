function Keys(){
	// private variables
	var use_storage = false;
	
	var keys = [{"chords":[{"chord":"C","modf":"major","type":"Tonic"},{"chord":"F","modf":"major","type":"Sub Dominant"},{"chord":"G","modf":"7","type":"dom"},{"chord":"D","modf":"7","type":"Double Dominant"},{"chord":"A","modf":"7","type":"Triple Dominant"},{"chord":"E","modf":"7","type":"dom_rel_minor"},{"chord":"A","modf":"minor","type":"Minor 1"},{"chord":"D","modf":"minor","type":"Minor 2"},{"chord":"E","modf":"7","type":"Minor 3"}],"key":"C","signature":"0"},{"chords":[{"chord":"G","modf":"major","type":"Tonic"},{"chord":"C","modf":"major","type":"Sub Dominant"},{"chord":"D","modf":"7","type":"dom"},{"chord":"A","modf":"7","type":"Double Dominant"},{"chord":"E","modf":"7","type":"Triple Dominant"},{"chord":"B","modf":"7","type":"dom_rel_minor"},{"chord":"E","modf":"minor","type":"Minor 1"},{"chord":"A","modf":"minor","type":"Minor 2"},{"chord":"B","modf":"7","type":"Minor 3"}],"key":"G","signature":"1#"},{"chords":[{"chord":"D","modf":"major","type":"Tonic"},{"chord":"G","modf":"major","type":"Sub Dominant"},{"chord":"A","modf":"7","type":"dom"},{"chord":"E","modf":"7","type":"Double Dominant"},{"chord":"B","modf":"7","type":"Triple Dominant"},{"chord":"F#","modf":"7","type":"dom_rel_minor"},{"chord":"B","modf":"minor","type":"Minor 1"},{"chord":"E","modf":"minor","type":"Minor 2"},{"chord":"F#","modf":"7","type":"Minor 3"}],"key":"D","signature":"2#"},{"chords":[{"chord":"A","modf":"major","type":"Tonic"},{"chord":"D","modf":"major","type":"Sub Dominant"},{"chord":"E","modf":"7","type":"dom"},{"chord":"B","modf":"7","type":"Double Dominant"},{"chord":"F#","modf":"7","type":"Triple Dominant"},{"chord":"C#","modf":"7","type":"dom_rel_minor"},{"chord":"F#","modf":"minor","type":"Minor 1"},{"chord":"B","modf":"minor","type":"Minor 2"},{"chord":"C#","modf":"7","type":"Minor 3"}],"key":"A","signature":"3#"},{"chords":[{"chord":"E","modf":"major","type":"Tonic"},{"chord":"A","modf":"major","type":"Sub Dominant"},{"chord":"B","modf":"7","type":"dom"},{"chord":"F#","modf":"7","type":"Double Dominant"},{"chord":"C#","modf":"7","type":"Triple Dominant"},{"chord":"Ab","modf":"7","type":"dom_rel_minor"},{"chord":"C#","modf":"minor","type":"Minor 1"},{"chord":"F#","modf":"minor","type":"Minor 2"},{"chord":"G#","modf":"7","type":"Minor 3"}],"key":"E","signature":"4#"},{"chords":[{"chord":"B","modf":"major","type":"Tonic"},{"chord":"E","modf":"major","type":"Sub Dominant"},{"chord":"F#","modf":"7","type":"dom"},{"chord":"C#","modf":"7","type":"Double Dominant"},{"chord":"Ab","modf":"7","type":"Triple Dominant"},{"chord":"Eb","modf":"7","type":"dom_rel_minor"},{"chord":"G#","modf":"minor","type":"Minor 1"},{"chord":"C#","modf":"minor","type":"Minor 2"},{"chord":"D#","modf":"7","type":"Minor 3"}],"key":"B","signature":"5#"},{"chords":[{"chord":"F#","modf":"major","type":"Tonic"},{"chord":"B","modf":"major","type":"Sub Dominant"},{"chord":"C#","modf":"7","type":"dom"},{"chord":"Ab","modf":"7","type":"Double Dominant"},{"chord":"Eb","modf":"7","type":"Triple Dominant"},{"chord":"Bb","modf":"7","type":"dom_rel_minor"},{"chord":"D#","modf":"minor","type":"Minor 1"},{"chord":"G#","modf":"minor","type":"Minor 2"},{"chord":"A#","modf":"7","type":"Minor 3"}],"key":"F#","signature":"6#(b)"},{"chords":[{"chord":"Db","modf":"major","type":"Tonic"},{"chord":"Gb","modf":"major","type":"Sub Dominant"},{"chord":"Ab","modf":"7","type":"dom"},{"chord":"Eb","modf":"7","type":"Double Dominant"},{"chord":"Bb","modf":"7","type":"Triple Dominant"},{"chord":"F","modf":"7","type":"dom_rel_minor"},{"chord":"Bb","modf":"minor","type":"Minor 1"},{"chord":"Eb","modf":"major","type":"Minor 2"},{"chord":"F","modf":"7","type":"Minor 3"}],"key":"Db","signature":"5b"},{"chords":[{"chord":"Ab","modf":"major","type":"Tonic"},{"chord":"Db","modf":"major","type":"Sub Dominant"},{"chord":"Eb","modf":"7","type":"dom"},{"chord":"Bb","modf":"7","type":"Double Dominant"},{"chord":"F","modf":"7","type":"Triple Dominant"},{"chord":"C","modf":"7","type":"dom_rel_minor"},{"chord":"F","modf":"minor","type":"Minor 1"},{"chord":"Bb","modf":"minor","type":"Minor 2"},{"chord":"C","modf":"7","type":"Minor 3"}],"key":"Ab","signature":"4b"},{"chords":[{"chord":"Eb","modf":"major","type":"Tonic"},{"chord":"Ab","modf":"major","type":"Sub Dominant"},{"chord":"Bb","modf":"7","type":"dom"},{"chord":"F","modf":"7","type":"Double Dominant"},{"chord":"C","modf":"7","type":"Triple Dominant"},{"chord":"G","modf":"7","type":"dom_rel_minor"},{"chord":"C","modf":"minor","type":"Minor 1"},{"chord":"F","modf":"minor","type":"Minor 2"},{"chord":"G","modf":"7","type":"Minor 3"}],"key":"Eb","signature":"3b"},{"chords":[{"chord":"Bb","modf":"major","type":"Tonic"},{"chord":"Eb","modf":"major","type":"Sub Dominant"},{"chord":"F","modf":"7","type":"dom"},{"chord":"C","modf":"7","type":"Double Dominant"},{"chord":"G","modf":"7","type":"Triple Dominant"},{"chord":"D","modf":"7","type":"dom_rel_minor"},{"chord":"G","modf":"minor","type":"Minor 1"},{"chord":"C","modf":"minor","type":"Minor 2"},{"chord":"D","modf":"7","type":"Minor 3"}],"key":"Bb","signature":"2b"},{"chords":[{"chord":"F","modf":"major","type":"Tonic"},{"chord":"Bb","modf":"major","type":"Sub Dominant"},{"chord":"C","modf":"7","type":"dom"},{"chord":"G","modf":"7","type":"Double Dominant"},{"chord":"D","modf":"7","type":"Triple Dominant"},{"chord":"A","modf":"7","type":"dom_rel_minor"},{"chord":"D","modf":"minor","type":"Minor 1"},{"chord":"G","modf":"minor","type":"Minor 2"},{"chord":"A","modf":"7","type":"Minor 3"}],"key":"F","signature":"1b"}];
	
	var strings = [{"e":"1","a":"2","d":"3","g":"4","b":"5","e2":"6"}];
	
	var modifiers = {"major":"","minor":"m","7":"7"};

	//get a reference to the canvas
	var canvas = $('.fretboard canvas');
	
	// build complete
	buildComplete = function(){
		//center_preloader();
		
		var ready = $('.fretboard canvas.ready').length;
		if (ready == canvas.length) {
			loading(false);
		};
	}

	// fretboard and finger indicators
	finger = function(x, y, color, id) {
		canvas[id].getContext("2d").fillStyle = color;
		canvas[id].getContext("2d").beginPath();
		canvas[id].getContext("2d").arc(x, y, canvas.height()*.04, 0, Math.PI*2, false); 
		canvas[id].getContext("2d").closePath();
		canvas[id].getContext("2d").fill();
	}
	guitarString = function(x, w, color, id) {
		canvas[id].getContext("2d").lineWidth = w;
		canvas[id].getContext("2d").beginPath();
	    canvas[id].getContext("2d").moveTo(x,0);
	    canvas[id].getContext("2d").lineTo(x,canvas.height());
		canvas[id].getContext("2d").strokeStyle = color;
	    canvas[id].getContext("2d").stroke();
	}
	fret = function(y, w, color, id) {
		canvas[id].getContext("2d").lineWidth = w;
		canvas[id].getContext("2d").beginPath();
	    canvas[id].getContext("2d").moveTo(0,y);
	    canvas[id].getContext("2d").lineTo(canvas.width()*2,y);
		canvas[id].getContext("2d").strokeStyle = color;
	    canvas[id].getContext("2d").stroke();
	}
	fingerY = function(i) {
		return ((canvas.height()/8) * i) - ((canvas.height()/8)/2);
	}
	
	// build out the fretboard
	buildFrets = function(c,m,k,id,n) {

		//$('.fretboard').show();
		canvas.attr('height', $('.fretboard').height());
		canvas.attr('width', $('.fretboard').width());
		var fretHeight = canvas.height()/8;
		var stringSpace = canvas.width()/7;
		var me = k;

		if (sessionStorage.getItem(id+'-'+n) && use_storage) {
			//console.log(JSON.parse(sessionStorage.getItem(id+'-'+n)));

			$.each(JSON.parse(sessionStorage.getItem(id+'-'+n)), function(i, v) {
				if(v!=0) {
					finger(stringSpace*strings[0][i], fingerY(v), "#09f", me);
				}
			});
		} else {	
			// modifier
			var modf = (m) ? "&modf="+escape(m) : "";
			// api url
			var api_url = 'http://pargitaru.co.cc/api/?request=chords&chord='+escape(c)+modf;
			$.get(api_url, function(data) {
				// set storage
				sessionStorage.setItem(id+'-'+n, JSON.stringify(data.chords[0]));
				//console.log(JSON.parse(sessionStorage.getItem(id+'-'+n)));
				
				// Create horizontal lines
				for (var i=1; i < 8; i++) {
					fret(fretHeight*i, 1,"#ccc", me);
				};
				// Create vertical lines
				for (var i=1; i < 7; i++) {
					 guitarString(stringSpace*i, 4-i,"#666", me);
				};
				
				//loop through chords
				$.each(data.chords[0], function(i, v) {
					if(v!=0) {
						finger(stringSpace*strings[0][i], fingerY(v),"#09f", me);
					}
				});
				// change canvas to ready
				$('.fretboard canvas:eq('+k+')').addClass('ready');
				buildComplete();
				
			},'jsonp');
		};
		
	}
	
	// If something's loading, show the dang preloader, silly! For your health...
	loading = function(active) {
		$('html, body').animate({ scrollTop: 0 }, 0);
		center_preloader();
		if (active) {
			$('#preloader-bg').css({display:'inherit'});
			$('#preloader').css({display:'inherit'});
		} else {
			$('#preloader-bg').css({display:'none'});
			$('#preloader').css({display:'none'});
		}
	}
	center_preloader = function() {  
	    var winH = $(window).height();
	    var winW = $(window).width();
	    var bgH = $(document).height();
	    var m1 =  (winH/2) - ($('#preloader').height()/2);
	    var pre_top = $(document).scrollTop() + m1;    
	    var pre_left = (winW/2) - ($('#preloader').width()/2); 
	    $('#preloader-bg').css({height:bgH, width:winW}); 
	    $('#preloader').css({top:pre_top, left:pre_left});
	}
	
	return {
		init: function(){
			// create keys
			$.each(keys, function(i, v) { 
				$('#key ul').append('<li rel="'+i+'">'+v.key+'</li>');
			});
			
			// live event for keys
			$('#key ul li').click(function() {
				// hide/show next screen
				loading(true);
				$('#key').toggle();
				$('#results').toggle();
				$('.chord').removeClass('hidden');
				$('.fretboard').removeClass('visible');
				// Take selected key and place it as selected on the next screen
				$('#selected-key').html($(this).text());
				// make this key selected
				$('#key').addClass('selected');
				$('#key ul li').removeClass('active');
				$(this).addClass('active');
								
				// set key id
				id = $(this).attr('rel');
				
				// loop through the chords and build fretboards
				for(var i=0; i<9; i++) {
					buildFrets(keys[id].chords[i].chord,keys[id].chords[i].modf,i,keys[id].chords[i].type);
					//console.log(modifiers[);
					$('.chord:eq('+i+')').html(keys[id].chords[i].chord+modifiers[keys[id].chords[i].modf]);
				}

				
			});
			
			$('ul.chord-set li .chord-holder').click(function(){
				$(this).find('.chord').toggleClass('hidden');
				$(this).find('.fretboard').toggleClass('visible');
			});
			
			$('button').click(function() {
				// hide/show next screen
				$('#key').toggle();
				$('#results').toggle();
				$('html, body').animate({ scrollTop: 0 }, 0);
			});
			
			window.onresize = function() {
				center_preloader();
			}
		}
		
	}
	
}

// Object
var keys = new Keys();
// Center the preloader
keys.init();

