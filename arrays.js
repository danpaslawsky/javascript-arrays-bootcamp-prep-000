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

function accessElementInArray(array, index){
  var numbers = array;
  return numbers[index];
}
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   var newArray = array;
   return array.shift();
 }  
 
  
 
   
   
   