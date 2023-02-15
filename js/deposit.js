// step1: add even handler to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step2: Get the amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    // for input field use .value to the get the inside value from the filed
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step3: Get the deposit total
    // for non input tag use INNERTEXT to get text or value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step4: add the Numbers
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step5: Get total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step6: Calculate total Balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // clear : Clear the deposit
    depositField.value = '';
})