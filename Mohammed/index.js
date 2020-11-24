
// 1. The Cashier Problem

const moneyChunks = [100, 50, 20, 10, 5, 1, 0.50, 0.20, 0.10, 0.05 ];

let result =[];
let cost = 50;
let rest_amount = 46.25;

let fraction = rest_amount % 1;
fraction = fraction * 100;

for (let i=0; i<=moneyChunks.length; i++)
{
    if ( rest_amount >= moneyChunks[i] && moneyChunks[i] >= 1)
    {
        calculate(moneyChunks[i])
    }
    else if ( rest_amount >= moneyChunks[i]  && moneyChunks[i] <1)
    {
            calculateFraction(moneyChunks[i]*100);
    }
}
    
console.log(result);

//console.log('the rest is', 22.25 % 1);

function calculate(moneyRate, rest)
{
    
        //console.log(moneyRate, rest)
        let counter = Math.floor(rest_amount/moneyRate);
        //console.log(`${counter} x ${moneyRate}`);
        rest_amount = rest_amount - (counter * moneyRate);
        result.push({count: counter, note:moneyRate});
        
        //console.log('the rest', rest_amount);
}

function calculateFraction(moneyRate, rest)
{
    let counter = Math.floor(fraction/moneyRate);
    fraction = fraction - (counter * moneyRate);

    if (counter !== 0)
        result.push({count: counter, note:moneyRate/100});
}

// #############################################################################

// 2. Validate Arrays

const inputArray = [5,3,22,4,5,3,3,3,7];

noDuplicateArray = inputArray.filter((item, pos) => 
    inputArray.indexOf(item) == pos);

console.log(noDuplicateArray)
