// function change(price, paidAmount) {
//   const changeTotal = (paidAmount - price).toFixed(2);
//   if (paidAmount > price) {
//     let fifty = Math.floor(changeTotal / 50) * 50;
//     if (fifty > 0) {
//       console.log(`${fifty / 50} x €50`);
//     }

//     let twenty = Math.floor((changeTotal - fifty) / 20) * 20;
//     if (twenty > 0) {
//       console.log(`${twenty / 20} x €20`);
//     }

//     let ten = Math.floor((changeTotal - fifty - twenty) / 10) * 10;
//     if (ten > 0) {
//       console.log(`${ten / 10} x €10`);
//     }

//     let five = Math.floor((changeTotal - fifty - twenty - ten) / 5) * 5;
//     if (five > 0) {
//       console.log(`${five / 5} x €5`);
//     }

//     let two = Math.floor((changeTotal - fifty - twenty - ten - five) / 2) * 2;
//     if (two > 0) {
//       console.log(`${two / 2} x €2`);
//     }

//     let one =
//       Math.floor((changeTotal - fifty - twenty - ten - five - two) / 1) * 1;
//     if (one > 0) {
//       console.log(`${one / 1} x €1`);
//     }

//     let fiftycents =
//       Math.floor((changeTotal - Math.floor(changeTotal)) / 0.5) * 0.5;

//     if (fiftycents > 0) {
//       console.log(`${fiftycents / 0.5} x €0.5`);
//     }

//     let twentycents =
//       Math.floor((changeTotal - Math.floor(changeTotal) - fiftycents) / 0.2) *
//       0.2;
//     if (twentycents > 0) {
//       console.log(`${twentycents / 0.2} x €0.2`);
//     }

//     let tencents =
//       Math.floor(
//         (changeTotal - Math.floor(changeTotal) - fiftycents - twentycents) / 0.1
//       ) * 0.1;

//     if (tencents > 0) {
//       console.log(`${tencents / 0.1} x €0.1`);
//     }

//     let fivecents =
//       Math.floor(
//         (changeTotal -
//           Math.floor(changeTotal) -
//           fiftycents -
//           twentycents -
//           tencents) /
//           0.05
//       ) * 0.05;

//     if (fivecents > 0) {
//       console.log(`${fivecents / 0.05} x €0.05`);
//     }

//     let twocents =
//       Math.floor(
//         (changeTotal -
//           Math.floor(changeTotal) -
//           fiftycents -
//           twentycents -
//           tencents -
//           fivecents) /
//           0.02
//       ) * 0.02;
//     if (twocents > 0) {
//       console.log(`${twocents / 0.02} x €0.02`);
//     }

//     let onecents =
//       Math.floor(
//         changeTotal -
//           Math.floor(changeTotal) -
//           fiftycents -
//           twentycents -
//           tencents -
//           fivecents -
//           twocents +
//           0.0001 / 0.01
//       ) * 0.01;

//     console.log(changeTotal - Math.floor(changeTotal));
//     if (onecents > 0) {
//       console.log(`${onecents / 0.01} x €0.01`);
//     }
//   } else console.log(`Your payment is not enough`);
// }

// change(3.34, 50);

function change2(price, amount) {
  let change = amount - price;
  console.log(change);
  const bills = [
    500,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
    0.5,
    0.2,
    0.1,
    0.05,
    0.02,
    0.01,
  ];
  if (change < 0) {
    return `you did not pay enough`;
  } else {
    let result = {};
    for (const item of bills) {
      let num = Math.floor(change / item);
      //   console.log(num);
      //   let total = num * item;
      change = change % item;
      //   change -= total;
      change = Number(change.toFixed(2));
      if (num > 0) console.log(`€${item}✖️${num}`);
      if (num > 0) result[item] = num;
      //   console.log("result[item]", result[item]);
    }
    console.log("reslut", result);
  }
}

change2(3.64, 50);

//////////////////////////////////////////////////

// giveChange1({ price: 3.75, paidAmount: 50 });
// function giveChange({ price, paidAmount }) {
//   let change = paidAmount - price;
//   if (change < 0) {
//     return `The paid amount is not enough`;
//   }
//   if (change === 0) {
//     return `Not need to give money back`;
//   }
//   let changeInCents = change * 100;
//   const result = {},
//     dicCashier = {
//       "€500": 50000,
//       "€100": 10000,
//       "€50": 5000,
//       "€20": 2000,
//       "€10": 1000,
//       "€5": 500,
//       "€1": 100,
//       "€0.50": 50,
//       "€0.20": 20,
//       "€0.10": 10,
//       "€0.05": 5,
//       "€0.01": 1,
//     };
//   for (const key in dicCashier) {
//     if (dicCashier[key] <= changeInCents) {
//       result[key] = 0;
//       while (dicCashier[key] <= changeInCents) {
//         changeInCents -= dicCashier[key];
//         result[key]++;
//       }
//       console.log(`${result[key]} x ${key}`);
//     }
//   }
//   /*   for (const key in result) {
//     console.log(`${result[key]} x ${key}`);
//   } */
// }
// function giveChange1({ price, paidAmount }) {
//   let change = paidAmount - price;
//   console.log(change);
//   if (change < 0) {
//     return `The paid amount is not enough`;
//   }
//   if (change === 0) {
//     return `Not need to give money back`;
//   }
//   const result = {},
//     dicCashier = {
//       "€500": 500,
//       "€100": 100,
//       "€50": 50,
//       "€20": 20,
//       "€10": 10,
//       "€5": 5,
//       "€1": 1,
//       "€0.50": 0.5,
//       "€0.20": 0.2,
//       "€0.10": 0.1,
//       "€0.05": 0.05,
//       "€0.02": 0.02,
//       "€0.01": 0.01,
//     };
//   for (const price in dicCashier) {
//     if (dicCashier[price] <= change) {
//       let billAmount = Math.floor(change / dicCashier[price]);
//       let temp = billAmount * dicCashier[price];
//       change -= temp;
//       change = Number(change.toFixed(2));
//       console.log(`${billAmount} x €${dicCashier[price]}`);
//     }
//   }
// }
