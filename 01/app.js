// similar to CSS

//Select the element or group of elements that we want to affact
// Decide the effect we want to apply to the selection

// many different ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = "yellow";
document.getElementById('btn').style.color = 'red';


// assign to the variable

const element = document.getElementById('element');
// do something


document.querySelector('element');  // do something

// window object
console.log(window);


// window object = window api
// document


// when we says window object we are talking about the window API that allows us to use the browsers features
// Thats why when the method doesn't find in the code then it will look up into window objects
// window.alert('hi');

console.log(document); // it will print te current doc file
console.dir(document);  // same as above