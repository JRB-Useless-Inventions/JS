const jsonPropFinder = require('./utils/json-scanner.js'); //JSON Data scanner
var menu = require('./menu.json'); //Point to JSON data to scan through

function find(menu, nameA="", nameB=""){
		var str = [nameA,nameB]; //Values to look for
		var filter = menu; //Database

  	for (index in str) {
  		var string = [str[index]]; //Push first string into array
	  	var result = string.map(function(s) {
	  	    return s.split(/\s+/).slice(0,s.length); //Break up each word within the string into index in array
	  	});
	  	

  		for (var i = 0; i < result[0].length; i++) {//Scan through each word
  			var word = "";
  			for (var x = 0; x < result[0][i].length; x++) {//Scan through each letter of i words
  				word += result[0][i][x]; //Rebuild word i from left to right
	  			if(jsonPropFinder.getObjects(menu,'',word).length > 0){ //Does the desired value exsist in the first key label
	  				console.log('String Match Found');
	  				var response = jsonPropFinder.getObjects(menu,'',word); //Get object(s) taht have matching values
	  				var keys = jsonPropFinder.getKeys(response,word);//Query Which Key Label it was that prompted a match
	  				if (keys.length == 1 || response == 1) {
	  					console.log('Only One Match');
	  				}
	  			}
	  		}
		}	
		res = response;
	}

	if (!res || res.length == 0) {
		return null;
	}
	else{
		return res;
	}
}

console.log(find(menu, "user", "one"));

console.log(find(menu, "two", ""));

console.log(find(menu, "admin", "one"));