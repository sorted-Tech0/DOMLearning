// remove
// removeChild

// select the element
const result = document.querySelector('#result');
//removing this
//result.remove()   // whole div element will remove


// removing h1 from inside of div

// const heading = document.querySelector('h1');
// console.log(heading)   // first heading but we want to select other one so to that

const heading = result.querySelector('h1');

result.removeChild(heading)
console.log(heading)    // what we want