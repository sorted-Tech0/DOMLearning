// select the element or group of element the we want
// decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
//console.log(allChildren);   // will give text+nodes

// to access only children so

const children = result.children;
console.log(children);    // array of children node

console.log(result.firstChild);   // text
console.log(result.lastChild);    // test

console.log(children[0]); // to access the actual value


// TIP: Be careful with what it is returning i.e. which method, what returning
