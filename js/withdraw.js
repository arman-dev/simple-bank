// step1: add even handler to withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step2: Get the amount from the withdraw field
    const depositField = document.getElementById('withdraw-field');
    // for input field use .value to the get the inside value from the filed
    const newWithdrawAmountString = depositField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step3: Get the withdraw total
    // for non input tag use INNERTEXT to get text or value
    const depositTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = depositTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step4: add the Numbers
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    depositTotalElement.innerText = currentWithdrawTotal;

    // step5: Get total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step6: Calculate total Balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // clear : Clear the withdraw
    depositField.value = '';
})