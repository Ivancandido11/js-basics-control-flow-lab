function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400){
    return "This one is on me!"
  } else if (someNumber > 2000 && someNumber <= 2500){
      return "I will gladly take your thirty bucks."
  } else if (someNumber > 2500){
      return "No can do."
  }
}

function ternaryCheckCity(city){
  const cityMessage = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  let tipMessage;
  switch (tip){
    case 'generous':
      tipMessage = "Thank you so much.";
      break;
    case 'not as generous':
      tipMessage = "Thank you.";
      break;
    case 'thanks for everything':
      tipMessage = "Bye."
      break;
  }
  return tipMessage;
}