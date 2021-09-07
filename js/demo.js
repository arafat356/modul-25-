
// handle depodit buttn event 
document.getElementById('deposite-button').addEventListener('click',function(){
    console.log('deposite button clicked');
    const depositeInput = document.getElementById('depotit-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(depositeAmount);

    // update deposit total 
    const depositeTotal = document.getElementById('deposite-total');
const PreciousDepositAmountText =depositeTotal.innerText;
const PreciousDepositAmount = parseFloat(PreciousDepositAmountText);


const newDepositeTotal = parseFloat(PreciousDepositAmount)+parseFloat(newDepositeAmount);
    depositeTotal.innerText = newDepositeTotal;
// update account blance 
const balanceTotal = document.getElementById('total-balance');

const balanceTotalText = balanceTotal.innerText;

const previousBalanceTotal = parseFloat(balanceTotalText);

const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

balanceTotal.innerText = newBalanceTotal;
    // clear the deposite input field 
    depositeInput.value="";
})


// handle withdraw event haldler

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(withdrawAmountText);


    console.log(withdrawAmountText);

    // set withdrawTotal 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // clear withdraw input 

    withdrawInput.value= '';

    // update balance 

    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal =  parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;

// clear balance total 
blance
})
