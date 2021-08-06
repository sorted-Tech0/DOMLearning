// className

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

const classValue = first.className;  
// console.log(classValue)   // colors


second.className = "colors";   // classname will be assign to second element and styling will be applied
// what if we want to add more than one class to the same element
second.className = "colors text"


// classList: It keeps adding the classes to the element

//third.classList.add('colors')   // third will have class now and styling will be applied
//third.classList.add('text')   // now it will have 'text' class too

// together
third.classList.add('colors','text');

// just like add we have remove

third.classList.remove('text');   // color 'text' will be remove

// to checking for the attribute like class

let result = third.classList.contains('colors');
if(result){
    console.log('hello world')
} else {
    console.log('does not have the class')
}


