function cashier (price, paidAmmount){
    let change = paidAmmount - price;
    const moneyOptions = [100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]
    for(option of moneyOptions){
        billAmount = Math.floor(change/option);
        change -= billAmount * option
        change = change.toFixed(2)
        if(billAmount>0){
            console.log(`${billAmount} x ${option}`);
        }
    }
}

cashier(3.75, 50)