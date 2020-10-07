//Let's Play


// to get the class names of the Play buttons
var buttons = document.getElementsByClassName("Pbutton")


//to get the button that was clicked 
for (var i= 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", PlayButton)
}

function PlayButton(){

var currentAddButton = event.target;
container = currentAddButton.parentElement;
// to get the name of the clicked button
var clickedButton = container.getElementsByClassName("Pbutton")[0].name;
//to get the value from the first input field
var InputString = document.getElementsByClassName("inputString")[0].value;
//to get the value from the second input field
var Char = document.getElementsByClassName("char")[0].value;
//to get the value from the third input field
var start = document.getElementsByClassName("start")[0].value;
//to get the value from the fourth input field
var end = document.getElementsByClassName("end")[0].value;
//to get the value from the fifth input field
var lengthOf = document.getElementsByClassName("length11")[0].value;
//to get the value from the sixth input field
var replaceString = document.getElementsByClassName("replaced")[0].value;


//if the Lenght button was clicked , return the length of the input string
	if ( clickedButton === "Length"){
		
		console.log(InputString.length);
	
	}

//if the indexof button was clicked , return the index of of the second input field
	else if ( clickedButton === "indexof"){

	
		console.log(InputString.indexOf(Char));
		
	}
//if the lastindex button was clicked , return the last occurrence  of the second input field
	else if ( clickedButton === "lastindex"){
       
		console.log(InputString.lastIndexOf(Char));
	}
//if the search button was clicked , return the last index  of the second input field
	else if ( clickedButton === "search"){
        
		console.log(InputString.search(Char));
	}
//if the slice button was clicked ,  returns the extracted part in a new string.
	else if ( clickedButton === "slice"){

		console.log(InputString.slice(start, end));
	}
//if the slice2 button was clicked ,it  will slice out the rest of the string
	else if ( clickedButton === "slice2"){
      
        console.log(InputString.slice(start));
		
	}
//if the substring button was clicked ,it returns the extracted part in a new string
	else if ( clickedButton === "substring"){

		console.log(InputString.substring(start, end));
	}
//if the substring2 button was clicked ,it will slice out the rest of the string.
	else if ( clickedButton === "substring2"){

		console.log(InputString.substring(start));
	}
//if the sub button was clicked ,substr() is similar to slice()
//The difference is that the second parameter specifies the length of the extracted part.
	else if ( clickedButton === "sub"){
               
       console.log(InputString.substr(start,lengthOf));
	}
//if the sub2 button was clicked ,it will slice out the rest of the string.
	else if ( clickedButton === "sub2"){

		console.log(InputString.substr(start));
		
	}
//if the replace button was clicked ,it will replace a specified value with another value in a string.
	else if ( clickedButton === "replace"){

		console.log(InputString.replace(Char , replaceString));
	}
//if the upper button was clicked , the string is converted to upper case 
	else if ( clickedButton === "upper"){

		console.log(InputString.toUpperCase());
	}
//if the Lower button was clicked , the string is converted to lower case 
	else if ( clickedButton === "Lower"){

		console.log(InputString.toLowerCase());
	}
 //if the concat button was clicked , it joins two or more strings 
	else if ( clickedButton === "concat"){

		console.log(InputString.concat(" ", Char));
	}
//if the charat button was clicked , it returns the character at a specified index
	else if ( clickedButton === "charat"){

		console.log(InputString.charAt(start));
	}
//if the codeAt button was clicked , it returns the unicode of the character at a specified index in a string
	else if ( clickedButton === "codeAt"){

		console.log(InputString.charCodeAt(start));
	}
//if the split button was clicked , it converts a string to an array
	else if ( clickedButton === "split"){

		console.log(InputString.split(Char));
	}



}