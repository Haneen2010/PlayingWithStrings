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

//if the Lenght button was clicked , return the length of the input string
	if ( clickedButton === "Length"){
		
	//to get the String from the input field
        var InputString = document.getElementsByClassName("inputString")[0].value
		console.log(InputString);
	//to get the class name of the output field and put the result inside 
		var outputResult= document.getElementsByClassName("outputString")
		$(".outputResult").val(InputString);
        console.log(outputResult);
	}

	//if the indexof button was clicked , return the length of the input string
	if ( clickedButton === "indexof"){

		var InputString = document.getElementsByClassName("inputString")[0].value;
		console.log(InputString);
	}


}