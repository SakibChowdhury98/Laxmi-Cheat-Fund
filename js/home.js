//toggle button
document.getElementById('deposit').addEventListener('click', function(){
    document.getElementById('deposit-form').classList.remove('hidden');
    document.getElementById('withdrawal-form').classList.add('hidden');
})
document.getElementById('withdraw').addEventListener('click', function(){
    document.getElementById('deposit-form').classList.add('hidden');
    document.getElementById('withdrawal-form').classList.remove('hidden');
})

//setup withdrawal event handler
document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();

//get withdrawal amount and pin
const withdrawalAmount = document.getElementById('withdrawal-amount').value;
const pinNo = document.getElementById('pin-no').value;


//validation
if(pinNo === '123456'){
    const currentBalance = document.getElementById('current-balance').innerText;
    const balance = parseFloat(currentBalance);
    const withdraw = parseFloat(withdrawalAmount);
    //balance reduction
    const newBalance = balance - withdraw;

    //update dashboard
    document.getElementById('current-balance').innerText = newBalance;
}else{
    alert('something went wrong')
}

})


//setup deposit event handler
document.getElementById('deposit-btn').addEventListener('click', function(event){
    event.preventDefault();

//get withdrawal amount and pin
const depositAmount = document.getElementById('deposit-amount').value;
const pinNo = document.getElementById('pin-no').value;


//validation
if(pinNo === '123456'){
    const currentBalance = document.getElementById('current-balance').innerText;
    const balance = parseFloat(currentBalance);
    const depositBalance = parseFloat(depositAmount);
    //balance reduction
    const newBalance = balance + depositBalance;

    //update dashboard
    document.getElementById('current-balance').innerText = newBalance;
}else{
    alert('something went wrong')
}
})