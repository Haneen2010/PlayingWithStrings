//Let's Play
var id ;

//to get  an array of questions
var questions = document.getElementsByClassName("Q")

// to get the class names of the Play buttons
var buttons = document.getElementsByClassName("Pbutton")

$( "#Ask" ).click(function() {
//to iterate the array of questions 

    var x = Math.floor(Math.random() * 17);
  	id = x.toString();
    var numberOfTheQ = document.getElementById(id).id
     console.log(numberOfTheQ)
  	if( $('#'+id).hasClass("hide")){
		 $('#'+id).addClass("show");
		 $('#'+id).removeClass("hide");
}


//to iterate the button that was clicked 
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
		if(numberOfTheQ === "16" ){
				$("input:disabled").val(InputString.length);

			if( $(".inputString1").hasClass("hide")){
				 $(".inputString1").addClass("show");
				 $(".inputString1").removeClass("hide");
				 $(".outputString1").addClass("show");
				 $(".outputString1").removeClass("hide");
		 }
	   }else{
			alert("You chose the wrong method, Try again")
		}
	
	
	}

//if the indexof button was clicked , return the index of of the second input field
	else if ( clickedButton === "indexof"){
    if(numberOfTheQ === "1" ){
	    $("input:disabled").val(InputString.indexOf(Char));

	   if( $(".inputString1").hasClass("hide")){
		 	$(".inputString1").addClass("show");
		 	$(".inputString1").removeClass("hide");
		 	$(".char1").addClass("show");
		 	$(".char1").removeClass("hide");
		 	$(".outputString1").addClass("show");
		 	$(".outputString1").removeClass("hide");
		}
	}else {
		alert("You chose the wrong method, Try again")
	}
		
		
	}
//if the lastindex button was clicked , return the last occurrence  of the second input field
	else if ( clickedButton === "lastindex"){

       if(numberOfTheQ === "8" ){ 
	        $("input:disabled").val(InputString.lastIndexOf(Char));

	        if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".char1").addClass("show");
			 	$(".char1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")

		}
	}
//if the search button was clicked , return the last index  of the second input field
	else if ( clickedButton === "search"){
      
      if(numberOfTheQ === "3" ){ 
        $("input:disabled").val(InputString.search(Char));

        if( $(".inputString1").hasClass("hide")){
		 	$(".inputString1").addClass("show");
		 	$(".inputString1").removeClass("hide");
		 	$(".char1").addClass("show");
		 	$(".char1").removeClass("hide");
		 	$(".outputString1").addClass("show");
		 	$(".outputString1").removeClass("hide");
		}
	}else{
		alert("You chose the wrong method, Try again")
		
	}
	}
//if the slice button was clicked ,  returns the extracted part in a new string.
	else if ( clickedButton === "slice"){

     if(numberOfTheQ === "5" ){    
	        $("input:disabled").val(InputString.slice(start, end));

	        if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".end1").addClass("show");
			 	$(".end1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		}
		
	}
//if the slice2 button was clicked ,it  will slice out the rest of the string
	else if ( clickedButton === "slice2"){

		if(numberOfTheQ === "6" ){  
      
	      	$("input:disabled").val(InputString.slice(start));

	      	if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		}
		
	}
//if the substring button was clicked ,it returns the extracted part in a new string
	else if ( clickedButton === "substring"){

		if(numberOfTheQ === "10" ){  
			$("input:disabled").val(InputString.substring(start, end));

			if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".end1").addClass("show");
			 	$(".end1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		}
		
	}
//if the substring2 button was clicked ,it will slice out the rest of the string.
	else if ( clickedButton === "substring2"){
  
     if(numberOfTheQ === "11" ){ 
			$("input:disabled").val(InputString.substring(start));

			if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")

		}
		
	}
//if the sub button was clicked ,substr() is similar to slice()
//The difference is that the second parameter specifies the length of the extracted part.
	else if ( clickedButton === "sub"){
       if(numberOfTheQ === "14" ){ 
	        $("input:disabled").val(InputString.substr(start,lengthOf)); 

	        if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".length111").addClass("show");
			 	$(".length111").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		} 

       
	}
//if the sub2 button was clicked ,it will slice out the rest of the string.
	else if ( clickedButton === "sub2"){
		if(numberOfTheQ === "15" ){ 
	        $("input:disabled").val(InputString.substr(start));

	        if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		}
		
		
	}
//if the replace button was clicked ,it will replace a specified value with another value in a string.
	else if ( clickedButton === "replace"){
       if(numberOfTheQ === "4" ){
			$("input:disabled").val(InputString.replace(Char , replaceString));

			if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".char1").addClass("show");
			 	$(".char1").removeClass("hide");
			 	$(".replaced1").addClass("show");
			 	$(".replaced1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		}
		
	}
//if the upper button was clicked , the string is converted to upper case 
	else if ( clickedButton === "upper"){

		  if(numberOfTheQ === "2" ){
				$("input:disabled").val(InputString.toUpperCase());

				if( $(".inputString1").hasClass("hide")){
				 $(".inputString1").addClass("show");
				 $(".inputString1").removeClass("hide");
				 $(".outputString1").addClass("show");
				  $(".outputString1").removeClass("hide");
				}
			}else{
				alert("You chose the wrong method, Try again")
			}
		
	}
//if the Lower button was clicked , the string is converted to lower case 
	else if ( clickedButton === "Lower"){
        if(numberOfTheQ === "7" ){
	        $("input:disabled").val(InputString.toLowerCase());

	        if( $(".inputString1").hasClass("hide")){
			 $(".inputString1").addClass("show");
			 $(".inputString1").removeClass("hide");
			 $(".outputString1").addClass("show");
			  $(".outputString1").removeClass("hide");
			}
		}else{
			alert("You chose the wrong method, Try again")
		}
		
	}
 //if the concat button was clicked , it joins two or more strings 
	else if ( clickedButton === "concat"){
          if(numberOfTheQ === "0" ){
				$("input:disabled").val(InputString.concat(" ", Char));

				if( $(".inputString1").hasClass("hide")){
				 	$(".inputString1").addClass("show");
				 	$(".inputString1").removeClass("hide");
				 	$(".char1").addClass("show");
				 	$(".char1").removeClass("hide");
				 	$(".outputString1").addClass("show");
				 	$(".outputString1").removeClass("hide");
				}
			}else{
				alert("You chose the wrong method, Try again")
			}
		
	}
//if the charat button was clicked , it returns the character at a specified index
	else if ( clickedButton === "charat"){
        if(numberOfTheQ === "9" ){
			$("input:disabled").val(InputString.charAt(start));

			if( $(".inputString1").hasClass("hide")){
			 	$(".inputString1").addClass("show");
			 	$(".inputString1").removeClass("hide");
			 	$(".start1").addClass("show");
			 	$(".start1").removeClass("hide");
			 	$(".outputString1").addClass("show");
			 	$(".outputString1").removeClass("hide");
			}
		}else{

			 alert("You chose the wrong method, Try again")
		}
		
	}
//if the codeAt button was clicked , it returns the unicode of the character at a specified index in a string
	else if ( clickedButton === "codeAt"){
   if(numberOfTheQ === "12" ){
		$("input:disabled").val(InputString.charCodeAt(start));

		if( $(".inputString1").hasClass("hide")){
		 	$(".inputString1").addClass("show");
		 	$(".inputString1").removeClass("hide");
		 	$(".start1").addClass("show");
		 	$(".start1").removeClass("hide");
		 	$(".outputString1").addClass("show");
		 	$(".outputString1").removeClass("hide");
		}
	}else{
		alert("You chose the wrong method, Try again")
	}
		
		
	}
//if the split button was clicked , it converts a string to an array
	else if ( clickedButton === "split"){
     if(numberOfTheQ === "13" ){
		$("input:disabled").val(InputString.split(Char));

		if( $(".inputString1").hasClass("hide")){
		 	$(".inputString1").addClass("show");
		 	$(".inputString1").removeClass("hide");
		 	$(".char1").addClass("show");
		 	$(".char1").removeClass("hide");
		 	$(".outputString1").addClass("show");
		 	$(".outputString1").removeClass("hide");
		}
	} else{

		alert("You chose the wrong method, Try again")
	}
	}



}

});


$( ".submit" ).click(function() {


	 if( $('#'+id).hasClass("show")){
	 	 $('#'+id).addClass("hide");
	 	 $('#'+id).removeClass("show");
		 
}
    
    if($(".inputString1").hasClass("show")){
	    $(".inputString1").removeClass("show");
		$(".inputString1").addClass("hide");
}

    if($(".char1").hasClass("show")){
		$(".char1").removeClass("show");
		$(".char1").addClass("hide");
}
    
    if($(".outputString1").hasClass("show")){
		$(".outputString1").removeClass("show");
		$(".outputString1").addClass("hide");
	}

	if($(".start1").hasClass("show")){
		$(".start1").removeClass("show");
	    $(".start1").addClass("hide");
	}

	if($(".replaced1").hasClass("show")){
	    $(".replaced1").removeClass("show");
	    $(".replaced1").addClass("hide");
	}

	if($(".end1").hasClass("show")){
	    $(".end1").removeClass("show");
	    $(".end1").addClass("hide");
	}

	if($(".length111").hasClass("show")){
		$(".length111").removeClass("show");
		$(".length111").addClass("hide");
	}



});