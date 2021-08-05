// select the element or group of element the we want
// decide the effect we want to apply to the selection

// querySelector('any class')  -> selects single
// querySelectorAll('any class')  -> selects all

const result = document.querySelector('#result');
result.style.backgroundColor = "blue";

const item = document.querySelector('.special');
//console.log(item);     // will give first item only, but if we want to get all items then need to use querySelectorAll()

//accessing last item of the list

const lastItem = document.querySelector('li:last-child');
//console.log(lastItem);  // will give last item

const list = document.querySelectorAll('.special');
list.forEach(function(item){
    console.log(item);
    item.style.color = "yellow";
})

