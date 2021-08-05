// ParentNode : allows us to access the parent element

const heading = document.querySelector('h2');

// the idea of getting parent element

// console.log(heading.parentElement);   // <div class="second">
// console.log(heading.parentElement.parentElement);  // <div class="result">
// console.log(heading.parentElement.parentElement.parentElement);   // print body


const parent = heading.parentElement;
parent.style.color = "red";