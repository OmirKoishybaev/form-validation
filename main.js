const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msgname = document.querySelector("#msgname");
const msgnemail = document.querySelector("#msgemail");
const myform = document.querySelector("#myform");
const musers = document.querySelector("#users");

myform.addEventListener("submit", proverka)

function proverka(e) {
    e.preventDefault();
   
    if (name.value == "") {
        msgname.innerText = 'Name it empty';
        name.classList.add("error");
        
    } else {
        msgname.innerText = "";
        name.classList.remove("error");
        name.classList.add("uspeh");
    }

    if (email.value == "") {
        msgemail.innerText = 'Email it empty';
        email.classList.add("error");
    
    } else {
        msgemail.innerText = "";
        email.classList.remove("error");
        email.classList.add("uspeh");
    }
    
if (name.value !="" && email.value != ""){
    users.innerHTML += `<li><h2>${name.value} ${email.value} </h2></li>`;
}
}