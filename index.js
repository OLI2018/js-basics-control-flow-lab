function scuberGreetingForFeet(ride){
  // Write your code here!
if (ride <= 400) {
  return "This one is on me!"; 
  }

  else if (ride > 2500) {
    return "No can do.";
  }

  else if (ride > 2000) {
    return "I will gladly take your thirty bucks.";
  }

}

function ternaryCheckCity(cityName){

  // Write your code here!
  let result = (cityName === "NYC") ? "Ok, sounds good.": "No go."; 
  return result; 
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you."; 
    
    case "thanks for everything":
      return "Bye."; 
  }
}