// nodeValue
// textContent

const item = document.getElementById('special');      // return arrayof nodes
const value = item.firstChild.nodeValue;
//console.log(value);   // null 

//console.log(item.nodeName);   // H1

// to access the node value properly we use

console.log(item.childNodes[0].nodeValue);   // this is a special content       OR
console.log(item.firstChild.nodeValue);   // same as above


// By textContent

const easyItem = item.textContent;
console.log(easyItem)    // return the same as above


// TIP: Both of them returns the same thing but you have to extra attention while using nodeValue method
