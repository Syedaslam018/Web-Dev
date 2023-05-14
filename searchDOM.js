// When we type on the input box show me those items from the list which match my search string
// Now go ahead and take description of the item too in the input box where you are creating the item. Watch this demo video.
// When you are displaying the item show the description of the item below that. [If stuck for long watch hint 1]
// Now when we try to search, check both the name of the item and the description. If search string is found in any place show the item. Watch this demo video.

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
let des = document.getElementById('description');

itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function removeItem(e) {
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault(); 

    let inputVal = document.getElementById('item').value + document.getElementById('description').value;

    let newItem = document.createElement('li');

    let li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(inputVal));

    let delBtn = document.createElement('button');

    let editBtn = document.createElement('button');

    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-dark btn-sm float-right edit';

    delBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('EDIT'));

    li.appendChild(editBtn);

    li.appendChild(delBtn);

    itemList.appendChild(li );

}

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    
    let items = document.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        itemName = item.firstChild.textContent.toLowerCase();
         let itemDes = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) != -1 || itemDes.indexOf(item) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}
