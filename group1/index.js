const euroArr = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

let price = 35.57;
let amountGiven = 100;

function giveChange(price, amountGiven) {
  let output = [];
  let change = amountGiven - price;
  if (amountGiven > price) {
    euroArr.map((item) => {
      if (change >= item) {
        let remainder = Math.floor(change / item);
        let minus = remainder * item;
        change -= minus;
        change = change.toFixed(2) * 1;
        output.push(`${remainder} - €${item}`);
      }
    });
  } else {
    console.log("Not enough money for price");
  }
  console.log(output.join("\n"));
}

giveChange(price, amountGiven);