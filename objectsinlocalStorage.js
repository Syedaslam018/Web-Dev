//Now try storing the user details as an object in the local storage

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let myObj = {
        name: iname.value,
        email: imail.value
    };

    myObj_converted = JSON.stringify(myObj);
    
    localStorage.setItem('myObj', myObj_converted);



    myObj_normalised = JSON.parse(myObj_converted);
}
