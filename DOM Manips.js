//Make the 2nd item have green background color
const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

//Make the 3rd item invisible
const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
const item = document.querySelectorAll('.list-group-item');
item[1].style.backgroundColor = 'green';

//Choose all the odd elements and make their background green using QuerySelectorALL
const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (let o of odd) {
    o.style.backgroundColor = 'green';
}
