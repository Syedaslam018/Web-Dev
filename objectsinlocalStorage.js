//Now try storing the user details as an object in the local storage

let myForm = document.getElementById('myForm');
let ul = document.getElementById('users');

//event listener
myForm.addEventListener('submit',onSubmit);

//empty array for storing arrays
let listUsers = [];

//action event function
function onSubmit(e){
    //adding data to localStroage
    let ipname = document.getElementById('name');
    let ipmail = document.getElementById('email');
    e.preventDefault();
    let myObj = {
        fname: ipname.value,
        fmail: ipmail.value
    };
localStorage.setItem('users', JSON.stringify(myObj));

//adding data to website
let li = document.createElement('li');
li.innerHTML = ipname.value + ' ' + ipmail.value;
let butt = document.createElement('input');
butt.type = 'button';
butt.value = 'delete';
butt.className = btn;
butt.id = 'delete';
let edit = document.createElement('input');
edit.type = 'button';
edit.value = 'edit';
edit.className = btn;
edit.id = 'edit';
li.appendChild(butt);
li.appendChild(edit);
ul.appendChild(li);
butt.onclick = function(){
    ul.removeChild(li);
    localStorage.removeItem('users');
};
edit.onclick = function(){
    ul.removeChild(li);
    localStorage.removeItem('users');
    ipname.value = myObj.fname;
    ipmail.value = myObj.fmail;
};
document.myForm.reset();
}



