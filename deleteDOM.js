let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);

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

//On clicking the delete button we should be able to remove the newly created li tag
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault(); 

    let inputVal = document.getElementById('item').value;

    let newItem = document.createElement('li');

    let li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(inputVal));

    let delBtn = document.createElement('button');

    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    delBtn.appendChild(document.createTextNode('X'));

    li.appendChild(delBtn);

    itemList.appendChild(li);

   
   
}

