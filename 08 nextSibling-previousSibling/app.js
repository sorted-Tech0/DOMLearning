// previousSibling
// nextSibling
// return whitespace


// selecting next node

const first = document.querySelector('.first');

// const second = first.nextSibling;
// console.log(second) // text  so we need to write like

// const second = first.nextSibling.nextSibling;
// console.log(second);  // noe we will get the expected output

// changing color for the same
const second = first.nextSibling.nextSibling.style.color="red";   // done


// selecting previous node

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);

// NOTE: if there is no sibling then it returns null
console.log(last.nextSibling.nextSibling)   // null