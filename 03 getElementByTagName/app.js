// select the element or group of element the we want
// decide the effect we want to apply to the selection

// getElementsByTagName('tagName');
// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName('h2');
//console.log(headings);  // array of headings
//console.log(headings.length);    //2

// accessing first node 
headings[0].style.color = "red";


const items = document.getElementsByTagName('li');

// items.forEach(function(item){
//     console.log(item);
// })           // will not work because items are array-like not hte array. But for loop is valid

// but we can proceed with forEach also like

items[2].style.color = 'orange';

const betterItems = [...items];

betterItems.forEach(function(item) {
    console.log(item);     // will print each list item with tag
})

console.log(items);    // array of node-list items
console.log(betterItems);   // just an array of list