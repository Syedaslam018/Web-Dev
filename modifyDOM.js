//Now go head and add HEllo word before Item Lister
const newDiv = document.createElement('div');
newDiv.className = 'mediator';

let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');

const h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

//Now go head and add HEllo word before Item 1
const newDiv = document.createElement('div');
newDiv.className = 'mediator';

let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

const ul = document.querySelector('div .list-group');

const li = document.querySelector('.list-group .list-group-item');
ul.insertBefore(newDiv, li);
