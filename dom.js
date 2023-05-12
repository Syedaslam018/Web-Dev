let titleHead = document.getElementById("header-title");
titleHead.textContent = "Namaste";
let head = document.getElementById("main-header");
head.style.borderBottom = '3px solid black'
let addItems = document.getElementsByClassName("title");
//console.log(addItems);
addItems[0].style.fontWeight = 'bold';
addItems[0].style.color = 'green';
const items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = 'green';
for (let item of items) {
    item.style.fontWeight = 'bold';
}
GET ELEMENTS BY TAG NAME:

const li = document.getElementsByTagName('li')
for (let item of li) {
    item.style.fontWeight = 'bold';
}
