var sports = prompt("What is the best sport?");
var food = prompt("What is your favorite food?");
var math = prompt("What is the most advanced math youve seen")
var house = prompt("What is your dream house");
var santa = prompt("Do you believe in santa")

function bestSport () {
  if(sports === "basketball"){
    alert("Marrry Me! You win, It is the best! HAHAH")
  } else{
    alert("WRONG BASKETBALL RULES")
  }

}

function bestFood () {
  if(food === "fries"){
    alert("Fries are the best")
  } else{
    alert("Wrong fries are the best!")
  }
}

function math () {  if(math === "1+1 "){
      alert("I agree")
  } else{
    alert("I disagrees")
  }
}

function house () {
  if(house === "mansion"){
    alert("The mansion is the best option!")
  } else{
    alert("Meh Mid tbh")
  }
}

function santa () {
  if(santa === "Yes"){
    alert("Good luck...")
  } else{
    alert("Santa is real!")
  }
}
