//Watch this demo to understand what you have to build

let iname = document.getElementById('name');
let imail = document.getElementById('email');
let button = document.getElementById('btn');
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', onSubmit);



function onSubmit(e) {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({
        fname: iname.value,
        fmail:imail.value
    })
    localStorage.setItem('formData', JSON.stringify(formData));
    dispData();
    e.preventDefault();
}

function dispData() {
    console.log(localStorage.getItem('member-data'));
    if(localStorage.getItem('member-data')){
        var output = document.querySelector('tbody');
        output.innerHTML = '';
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
            <tr>
                <td>${data.fname}</td>
                <td>${data.fmail}</td>
            </tr>
            `;
        });
    }
}
dispData();


