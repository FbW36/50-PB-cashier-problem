giveChange({ price: 3.75, paidAmount: 50 });

function giveChange({ price, paidAmount }) {
  let change = paidAmount - price;

  if (change < 0) {
    return `The paid amount is not enough`;
  }
  if (change === 0) {
    return `Not need to give money back`;
  }
  let changeInCents = change * 100;
  const result = {},
    dicCashier = {
      "€500": 50000,
      "€100": 10000,
      "€50": 5000,
      "€20": 2000,
      "€10": 1000,
      "€5": 500,
      "€1": 100,
      "€0.50": 50,
      "€0.20": 20,
      "€0.10": 10,
      "€0.05": 5,
      "€0.01": 1,
    };

  for (const key in dicCashier) {
    if (dicCashier[key] <= changeInCents) {
      result[key] = 0;
      while (dicCashier[key] <= changeInCents) {
        changeInCents -= dicCashier[key];
        result[key]++;
      }
      console.log(`${result[key]} x ${key}`);
    }
  }
  /*   for (const key in result) {
    console.log(`${result[key]} x ${key}`);
  } */
}
