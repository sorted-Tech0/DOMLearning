// getAttribute();
// setAttribute();

const first = document.querySelector('.first');
const classValue = first.getAttribute('class');    
const idValue = first.getAttribute('id');        
//console.log(classValue)   // first
//console.log(idValue);     // special

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink)

const last = link.nextElementSibling;
last.setAttribute('class','first');
last.textContent = "I also have a last of first"
console.log(last)


// const link = document.querySelector('.first');
// console.log(link)