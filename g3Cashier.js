//* The Cashier Problem 
//? Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change. 
//? Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change.
// * The expected output should be: 
// * 2 x €20 // 2 twenty euro notes
// * 1 x €5 // 1 five euro note
// * 1 x €1 // 1 euro
// * 1 x €0.2 // 1 twenty cent coin
// * 1 x €0.05 // 1 five cent coin
//? Example: Price: €4.50, Paid amount: €20, Change: 15.50
// * Expected output: 
// * 1 x €10
// * 1 x €5
// * 1 x €0.5
// * Notes
// * Include outputs for exceptions e.g. price: €4, paid amount: €3. 

const cashObject = {
	'€500': 50000,
	'€100': 10000,
	'€50': 5000,
    '€20': 2000,
    '€10': 1000,
    '€5': 500,
    '€2':200,
	'€1': 100,
	'€0.50': 50,
	'€0.20': 20,
	'€0.10': 10,
    '€0.05': 5,
    '€0.01': 1
}

class Cashier {
	constructor(cash) {
		this.cash = cash;
	}

	giveChange(price, amount) {
		let change = amount - price;
		change *= 100; // change in cents
		if (price > amount) {
			return `Customer has not enough money!`
		}
		// an object that will store the number of notes given
		let changeGiven = {};
        for (let note in this.cash) {
			
			if (change >= this.cash[note]) {
				changeGiven[note] = 0;
                
                while (change >= this.cash[note] && change !== 0) {
					change -= this.cash[note];
					// adding to the notes counter:
					++changeGiven[note];
					console.log(change);
				}
			}
			// if not — go to the next iteration / next note
		}

		// calculate the change in one amount
		let totalChangeSum = 0;
		for (let note in changeGiven) {
			let noteValue = this.cash[note];
			let numOfNotes = changeGiven[note];
			let currentNoteSum = noteValue * numOfNotes;
			totalChangeSum += currentNoteSum;
		}
		totalChangeSum = Number((totalChangeSum/100).toFixed(2));

		console.log(totalChangeSum);
		return `Total change: ${totalChangeSum}`;
	}
}

let cashier = new Cashier(cashObject);
cashier.giveChange(30, 150);
