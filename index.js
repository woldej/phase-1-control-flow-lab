function scuberGreetingForFeet(ride){
  if(ride >2500 ){
    return 'No can do.'}
  if (ride <= 400){
    return 'This one is on me!' }
  else if(ride >= 2000){
    return 'I will gladly take your thirty bucks.'}
   if(ride >2500 ){
    return 'No can do.'}
  
  
  }
  
  function ternaryCheckCity(cityName){
    return (cityName=="NYC")?'Ok, sounds good.':'No go.';
    
    // Write your code here!
  }
  function switchOnCharmFromTip(tip){
  switch(tip){
  case 'generous':{
    return 'Thank you so much.'
    break;
  }
  case 'not as generous':
  {
    return 'Thank you.'
    break;
  }
  case 'thanks for everything':
  {
    return 'Bye.'
    break;
  
  }
  }
  }
