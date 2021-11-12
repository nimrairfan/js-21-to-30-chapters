/////////////chapter 21 to 25//////////////////
document.write("<h1>JS Objects chapters 21 to 30</h1>")
////////////question 1////////////
// var firstName = prompt("Enter Your full Name")
// var lastName = prompt("Enter your last Name")
// alert("HELLO!! " + " " +firstName+ " " +lastName )


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////QUESTION 2///////////////
// var favMob = prompt("Enter your favourite mobile Model")
// document.write("My favorite phone is: " + favMob +"<br>" + "Length of string: " + favMob.length);


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
/////////////////Question 3///////////
// var pak = "Pakistan"
// document.write("String: " +pak +"<br>" + "Index of 'n':" )
// document.write(pak.indexOf("n"))


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////question 4//////////////
// var b = "Hello World"
// document.write("String: "+ b +"<br>" + "Last index of 'l':" + b.lastIndexOf("l"))



// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////////QUESTION 5/////////////////
// var pak_2 = "Pakistan"
// document.write("String: "+pak_2 +  "<br> "+"Character at index 3:" + pak_2.charAt(3))



// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
/////////////question 6///////////////
// var firstName = prompt("Enter Your full Name")
// var lastName = prompt("Enter your last Name")
// alert("HELLO!! " + " " +firstName+ " " +lastName )


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////question 7 ///////////
// var city_rep = "Hyderabad"
// document.write("City: "+city_rep + "<br>")
// city_rep  = city_rep.replace(/Hyderabad/g , "Islamabad")
// document.write("After replacement: "+city_rep)


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
///////////////////question 8///////////////
// var message = " “Ali and Sami are best friends. They play cricket and football together.”"
// message = message.replace(/and/g , "&")
// document.write(message)


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
/////////////question 9/////////////
// var num = "472"
// document.write("Value: "+ num +"<br>" + "Type: string <br>" )
// var num2 = 472
// document.write("Value: "+ num +"<br>" + "Type: number" )


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////////question 10/////////////
// var userInput = prompt("Enter Your Name")
// userInput = userInput.toUpperCase()
// document.write(userInput)


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
///////////question 11///////////
// var firstName = prompt("Enter Your Name")
// var firstChar = firstName.slice(0,1).toUpperCase()
// var lastChar = firstName.slice(1).toLowerCase()
// firstName =firstChar+lastChar
// document.write(firstName)


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
////////////////question 12///////////////////
// var num = "35.36"
// document.write("Number: "+num+"<br>" )
// var firstnum = num.slice(0,2)
// var lastnum = num.slice(3,5)
// num = firstnum+lastnum
// document.write("Result "+num)


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
////////////////////question 13//////////////
// var userInput = prompt("Enter your Name")
// userInput = userInput.length()
// document.write(userInput)


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
/////////////////question 14//////////////
// var user_input = prompt("Enter Your Email")
// for(var i = 0 ; i<user_input.length; i++){
//     if(user_input[i].charCodeAt() === 33 ||user_input[i].charCodeAt() === 44 ||user_input[i].charCodeAt() === 46 ||user_input[i].charCodeAt() === 64 ){
//         alert("Please enter a valid username")
//     }
// }
// document.write(user_input)

        
// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////question 15////////////////
// var userPass = prompt("enter the password")
// var passVal = /^[a-zA-Z0-9!$@]{1,}$/
// if(pass !== ""){
// if(!userPass.match(passVal)){
//     alert("Enter a Valid Password")
// }else{
//     alert("Your Password is correct")
//     }
// }else{
//     alert("please fill up password field")
//     }


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
////////////////////question 16//////////////////
// let uni = "University of karachi"
// document.write(uni[0]  , "<br>")
// document.write(uni[1]  , "<br>")
// document.write(uni[2]  , "<br>")
// document.write(uni[3]  , "<br>")
// document.write(uni[4]  , "<br>")
// document.write(uni[5]  , "<br>")
// document.write(uni[6]  , "<br>")
// document.write(uni[7]  , "<br>")
// document.write(uni[8]  , "<br>")
// document.write(uni[9]  , "<br>")
// document.write(uni[10] , "<br>")
// document.write(uni[11] , "<br>")
// document.write(uni[12] , "<br>")
// document.write(uni[13] , "<br>")
// document.write(uni[14] , "<br>")
// document.write(uni[15] , "<br>")
// document.write(uni[16] , "<br>")
// document.write(uni[17] , "<br>")
// document.write(uni[18] , "<br>")
// document.write(uni[19] , "<br>")
// document.write(uni[20] , "<br>")


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////question 17///////////////////
// var user = prompt("enter any word");
// document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1))


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
//////////////////question 18/////////////////

// var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count_the = text.match(/the/g)
// document.write("Text:" +text+ "<br> There are "+count_the.length + " occurrence(s) of word 'the'")



// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
/////////////////////chapter 26 - 30 //////////////

////////////question 1///////////
// var num = prompt("Enter the positive integer number")
// var round_of = Math.round(num)
// var floor = Math.floor(num)
// var ciel = Math.ceil(num)
// document.write("number: " + num + "<br>"+"round off value: " +round_of +"<br>" +"floor value: "+ floor + "<br>" +"ciel value: "+ciel )

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

//////////////////question 2//////////////////
// var num = prompt("Enter the Negative integer")
// var round_of = Math.round(num)
// var floor = Math.floor(num)
// var ciel = Math.ceil(num)
// document.write("number: " + num + "<br>"+"round off value: " +round_of +"<br>" +"floor value: "+ floor + "<br>" +"ciel value: "+ciel )


// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

////////////////question 3/////////////
// var num = -4
// var absolute = Math.abs(num)
// document.write("The absolute value of "+num +" is " +absolute)

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

///////////////question 4/////////
// var dice = Math.floor(Math.random()* 10+1)
// document.write("random dice value: "+dice)

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

//////////////question 5////////////////
// var coin = Math.floor(Math.random()* 2 +1)
// document.write(coin)
// if(coin === 2 ){
//     document.write("<br> randon coin value: Heads")
// }
// else if(coin === 1){
//     document.write("<br> randon coin value: Tails")
// }

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

////////////////question 6////////////
// var ran_num = Math.floor(Math.random()* 100 +1)
// document.write("random number between 1 and 100: "+ran_num)

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

////////////////////question 7////////////
// var weight = prompt("Enter your Weight in kilograms")
// document.write("The weight of user is " +weight+ " Kilograms")

// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")

//////////////////question 8///////////////
// var userNum = +prompt("Enter any number between 1 to 10")
// var ran_num = Math.floor(Math.random()+5)
// if (userNum === ran_num){
//     document.write("Congrats You Win")
// }else{
//     document.write("Try again!!")
// }