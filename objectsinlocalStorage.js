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
    let ipname = document.getElementById('name').value;
    let ipmail = document.getElementById('email').value;
    e.preventDefault();
    let myObj = {
        fname: ipname,
        fmail: ipmail
    };
localStorage.setItem('users', JSON.stringify(myObj));

//adding data to website
let li = document.createElement('li');
li.innerHTML = ipname + ' ' + ipmail;
let butt = document.createElement('input');
butt.type = 'button';
butt.value = 'delete';
butt.className = btn;
butt.id = 'delete';
butt.onclick = function(){
    ul.removeChild(li);
    localStorage.removeItem('users');
};
li.appendChild(butt);
ul.appendChild(li);
document.myForm.reset();
}
