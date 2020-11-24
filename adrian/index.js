function giveChange({ price, paidAmount }) {
  let rest = paidAmount - price;
  if (rest < 0) {
    return `The paid amount is not enough`;
  }
  if (rest === 0) {
    return `Not need to give money back`;
  }
  const result = {};
  if (rest / 20 >= 1) {
    result["€20"] = Math.trunc(rest / 20);
    rest = Number((rest % 20).toFixed(2));
  }

  if (rest / 10 >= 1) {
    result["€10"] = Math.trunc(rest / 10);
    rest = Number((rest % 10).toFixed(2));
  }
  if (rest / 5 >= 1) {
    result["€5"] = Math.trunc(rest / 5);
    rest = Number((rest % 5).toFixed(2));
  }
  if (rest >= 1) {
    result["€1"] = Math.trunc(rest);
    rest = Number((rest - Math.trunc(rest)).toFixed(2));
  }
  if (rest > 0) {
    rest = Number(rest.toString().split(".")[1]);
    if (rest / 50 >= 1) {
      result["€0.5"] = Math.trunc(rest / 50);
      rest = Math.trunc(rest % 50);
    }
    if (rest / 20 >= 1) {
      result["€0.2"] = Math.trunc(rest / 20);
      rest = Math.trunc(rest % 20);
    }
    if (rest / 10 >= 1) {
      result["€0.1"] = Math.trunc(rest / 10);
      rest = Math.trunc(rest % 10);
    }

    if (rest / 5 >= 1) {
      result["€0.5"] = Math.trunc(rest / 5);
      rest = Math.trunc(rest % 5);
    }
    if (rest >= 1) {
      result["€0.1"] = rest;
    }
  }
  for (const key in result) {
    console.log(`${result[key]} x ${key}`);
  }
  return result;
}
giveChange({ price: 3.75, paidAmount: 50 });
