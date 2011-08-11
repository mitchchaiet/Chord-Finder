

jQuery(document).ready(function($) {
	
	var keys = [
	    {
	        "key": "C",
	        "signature": "0",
	        "major_chords": [
	            {
	                "tonic": "C",
	                "sub_dom": "F",
	                "dom": "G7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Am",
	                "1": "Dm",
	                "2": "E7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "D7",
	                "tri_dom": "A7",
	                "dom_rel_minor": "E7"
	            }
	        ]
	    },
	    {
	        "key": "G",
	        "signature": "1#",
	        "major_chords": [
	            {
	                "tonic": "G",
	                "sub_dom": "C",
	                "dom": "D7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Em",
	                "1": "Am",
	                "2": "B7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "A7",
	                "tri_dom": "E7",
	                "dom_rel_minor": "B7"
	            }
	        ]
	    },
	    {
	        "key": "D",
	        "signature": "2#",
	        "major_chords": [
	            {
	                "tonic": "D",
	                "sub_dom": "G",
	                "dom": "A7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Bm",
	                "1": "Em",
	                "2": "F#7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "E7",
	                "tri_dom": "B7",
	                "dom_rel_minor": "F#7"
	            }
	        ]
	    },
	    {
	        "key": "A",
	        "signature": "3#",
	        "major_chords": [
	            {
	                "tonic": "A",
	                "sub_dom": "D",
	                "dom": "E7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "F#m",
	                "1": "Bm",
	                "2": "C#7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "B7",
	                "tri_dom": "F#7",
	                "dom_rel_minor": "C#7 (Db7)"
	            }
	        ]
	    },
	    {
	        "key": "E",
	        "signature": "4#",
	        "major_chords": [
	            {
	                "tonic": "E",
	                "sub_dom": "A",
	                "dom": "B7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "C#m",
	                "1": "F#m",
	                "2": "G#7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "F#7",
	                "tri_dom": "C#7 (Db7)",
	                "dom_rel_minor": "Ab7"
	            }
	        ]
	    },
	    {
	        "key": "B",
	        "signature": "5#",
	        "major_chords": [
	            {
	                "tonic": "B",
	                "sub_dom": "E",
	                "dom": "F#7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "G#m",
	                "1": "C#m",
	                "2": "D#7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "C#7 (Db7)",
	                "tri_dom": "Ab7",
	                "dom_rel_minor": "Eb7"
	            }
	        ]
	    },
	    {
	        "key": "F# (Gb)",
	        "signature": "6#(b)",
	        "major_chords": [
	            {
	                "tonic": "F# (Gb)",
	                "sub_dom": "B (Cb)",
	                "dom": "C#7 (Db7)"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "D#m",
	                "1": "G#m",
	                "2": "A#7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "Ab7",
	                "tri_dom": "Eb7",
	                "dom_rel_minor": "Bb7"
	            }
	        ]
	    },
	    {
	        "key": "Db",
	        "signature": "5b",
	        "major_chords": [
	            {
	                "tonic": "Db",
	                "sub_dom": "Gb",
	                "dom": "Ab7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Bbm",
	                "1": "Ebm",
	                "2": "F7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "Eb7",
	                "tri_dom": "Bb7",
	                "dom_rel_minor": "F7"
	            }
	        ]
	    },
	    {
	        "key": "Ab",
	        "signature": "4b",
	        "major_chords": [
	            {
	                "tonic": "Ab",
	                "sub_dom": "Db",
	                "dom": "Eb7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Fm",
	                "1": "Bbm",
	                "2": "C7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "Bb7",
	                "tri_dom": "F7",
	                "dom_rel_minor": "C7"
	            }
	        ]
	    },
	    {
	        "key": "Eb",
	        "signature": "3b",
	        "major_chords": [
	            {
	                "tonic": "Eb",
	                "sub_dom": "Ab",
	                "dom": "Bb7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Cm",
	                "1": "Fm",
	                "2": "G7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "F7",
	                "tri_dom": "C7",
	                "dom_rel_minor": "G7"
	            }
	        ]
	    },
	    {
	        "key": "Bb",
	        "signature": "2b",
	        "major_chords": [
	            {
	                "tonic": "Bd",
	                "sub_dom": "Eb",
	                "dom": "F7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Gm",
	                "1": "Cm",
	                "2": "D7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "C7",
	                "tri_dom": "G7",
	                "dom_rel_minor": "D7"
	            }
	        ]
	    },
	    {
	        "key": "F",
	        "signature": "1b",
	        "major_chords": [
	            {
	                "tonic": "F",
	                "sub_dom": "Bb",
	                "dom": "C7"
	            }
	        ],
	        "relative_minor_chords": [
	            {
	                "0": "Dm",
	                "1": "Gm",
	                "2": "A7"
	            }
	        ],
	        "accidental_chords": [
	            {
	                "dbl_dom": "G7",
	                "tri_dom": "D7",
	                "dom_rel_minor": "A7"
	            }
	        ]
	    }
	];
	console.log(keys[0].key);
	//$('body').append(chords.key.F);
});
