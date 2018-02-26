var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, el){
  
  return [el, ...array];
}

function accessElementInArray(arr, idx) {
  return arr[idx];
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(arr, el) {
  
  return [...arr, el];
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  console.log(array.slice(1));
  return array;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1);
}






