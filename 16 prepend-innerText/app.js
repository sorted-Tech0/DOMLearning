// prepend
// innerText

// instead of creating new element and then appending in it, it write text for us right away

const heading = document.createElement('h2');
heading.innerText = `I am a dynamic heading`;
document.body.prepend(heading)       
//Note: previously on append operation it append the child after script tag, But prepend append before script tag and even anything else

const twice = document.createElement('h3');
twice.innerText = `I am created and expected to just before anything else`;
document.body.prepend(twice);   // appending before aything else


