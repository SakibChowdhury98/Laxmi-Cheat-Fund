// set up event handler
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    //get the phone number and pin number
const phoneNo = document.getElementById('phone-no').value;
const pinNo = document.getElementById('pin-no').value;
console.log(phoneNo, pinNo)

//validate user id
if(phoneNo === '01746561163' && pinNo === '123456'){
    console.log('login successful');
    window.location.href='./home.html';
}else{
    alert('login failed');
}
})


