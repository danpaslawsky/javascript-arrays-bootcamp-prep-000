var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  //var newArray = array;
  return [element,...array];
}

function addElementToEndOfArray(array, element){
 return [...array,element];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}   

function accessElementInArray(){
  
}
   
   
   
   