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

cashObject = {
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
		let numOfNotes = {};
        for (let key in this.cash) {
			
			if (change >= this.cash[key]) {
				numOfNotes[key] = 0;
                
                while (change >= this.cash[key] && change !== 0) {
					change -= this.cash[key];
					// adding to the notes counter:
					++numOfNotes[key];
					console.log(change);
				}
			}
			// if not — go to the next iteration / next note
        }
		console.log(numOfNotes);
	}
}

let cashier = new Cashier(cashObject);
cashier.giveChange(30, 99)
//console.log(cashier.giveChange(30, 67.4));
