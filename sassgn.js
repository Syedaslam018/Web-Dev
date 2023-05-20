//adding required variable values
let formRef = document.getElementById('myForm');
let addBtn = document.getElementById('butto');
let inAmount = document.getElementById('expAmount');
let inDesc = document.getElementById('desc');
let inCategory = document.getElementById('category');
let ul = document.getElementById('myList');





let myArray = [];






//styling the button
addBtn.style.backgroundColor = 'lightgrey';
addBtn.style.color = 'black';

//adding button event
formRef.addEventListener('submit', addExp);


//function to store values in local storage
function addExp(e){
    let catVal = inCategory.options[inCategory.selectedIndex].text;
    e.preventDefault();
    myObj = {
        amount: inAmount.value,
        description: inDesc.value,
        category: catVal
    }
    myArray.push(myObj);
    localStorage.setItem('myArray', JSON.stringify(myArray));





    // console.log(myArray);
    //  console.log(myObj);
    // console.log(catVal);

    //displaying the content on webpage
    let li = document.createElement('li');
    li.innerHTML = `${inAmount.value} ${inDesc.value} ${catVal}`;
    ul.appendChild(li);

    //create delete button for li
    let delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener('click',delItem);
    li.appendChild(delBtn);


    //create edit button for li
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click',editItem);
    li.appendChild(editBtn);

    //function to edit item
    function editItem(e){
        e.preventDefault();
        li.remove();
        myArray.splice(myArray.indexOf(myObj),1);
        localStorage.setItem('myArray', JSON.stringify(myArray));
        inAmount.value = myObj.amount;
        inDesc.value = myObj.description;
    }

    //function to delete item
    function delItem(e){
        e.preventDefault();
        li.remove();
        myArray.splice(myArray.indexOf(myObj),1);
        localStorage.setItem('myArray', JSON.stringify(myArray));
    }
    //clearing the form
    formRef.reset();


}
