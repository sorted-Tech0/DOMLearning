// innerHTML
// textContent

const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

// printing div's text content
console.log(div.textContent);  // return only text inside div
console.log(list.innerHTML);   // return whole html structure
console.log(list.textContent)  // return text inside all list

const randomVariable = "random value"

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVariable}</li>
<li>list itemAppended</li>`;

// let's append it
document.body.appendChild(ul);


div.innerHTML = 'hello world'   // div's content changed
div.innerText = 'hello people'   // again change

// NOTE: above two statement does the same work however, if you want to embedded the html then it won't work same