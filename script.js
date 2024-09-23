

const email = document.getElementById('email').value;
const email_display= document.getElementById('email_display');
document.addEventListener('click',function (email) {
    if (email.trim()==="") {
        email_display.innerText = "please enter a valid email";
    }
})

 