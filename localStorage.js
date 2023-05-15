//Write logic to store the details entered by the user in the local storage when he clicks on submit

let iname = document.getElementById('name');
let imail = document.getElementById('email');
let button = document.getElementById('btn');
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    localStorage.setItem('name',iname.value);
    localStorage.setItem('email',imail.value);
}
