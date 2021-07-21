"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };
    
    $("#generate").click(function() {
        $("#password").val( "" ); // clear previous entry
        var len = $("#num").val();
        if(typeof len == 'number'||isNaN(len)){
        	alert("Please enter a valid number");
        }
        else{
        	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        	var max = chars.length;
        	var pass ="";
        	for(var i = 0; i < len; ++i){
        		var num = getRandomNumber(max-1);
        		pass += chars[num];
        	}
        	$("#password").val(pass);
        }
        
    }); // end click()
    
    $("#clear").click(function() {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()