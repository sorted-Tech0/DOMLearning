// select the element or group of element the we want
// decide the effect we want to apply to the selection

// getElementsByClassName('className');

// node-list = array-like object
// index, length property but not array methods

const listItems = document.getElementsByClassName('special');
//console.log(listItems);   // array of node list

listItems[1].style.color = 'blue';