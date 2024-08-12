/*
    STACK-Using  Array
 */
var stackArray = [];
var currentSize = stackArray.length;
var currentTop = 0;
var maxSize = 7;
var currentBottom = 0;

function addElement(newValue) {
  if (checkOverFlow() === true) {
    stackArray[currentSize] = newValue;
    currentSize += 1;
    currentBottom = stackArray[0];
    currentTop = stackArray[stackArray.length - 1];
  }
  return stackArray;
}
function removeElement() {
  if (checkUnderFlow() === true) {
    stackArray.pop();
    currentSize--;
    currentBottom = stackArray[0];
    currentTop = stackArray[currentSize -1];
  }
  console.log("Top Is: " + currentTopElement());
  console.log("Bottom Is: " + currentBottomElement());
  return stackArray;
}

function checkOverFlow() {
  if (stackArray.length >= maxSize) {
    console.log("OOps, Overflow occure...");
    return false;
  }
  if (stackArray.length < maxSize) {
    return true;
  }
}

function checkUnderFlow() {
  if (stackArray.length === 0) {
    return false;
  } else {
    return true;
  }
}
function currentTopElement() {
  if (stackArray.length <= 0) {
    return (currentTop = undefined);
  } else {
    return currentTop;
  }
}

function currentBottomElement() {
  if (stackArray.length <= 0) {
    return (currentBottom = undefined);
  } else {
    return currentBottom;
  }
}

function showValues() {
  console.log(stackArray);
}

addElement(20);
addElement(2);
addElement(12);
addElement(7);
addElement(40);
showValues();
console.log(removeElement());
