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
	'€0.02': 2,
    '€0.01': 1
}
const cashOnHand = {
	'€500': 1,
	'€50': 2,
	'€10': 3,
    '€2': 3,
	'€1': 1,
	'€0.50': 1,
	'€0.02': 5,
    '€0.01': 20
}


class Cashier {
	constructor(cash, desk) {
		this.cash = cash;
		this.desk = desk;
	}

	giveChange(price, amount) {
		// calculate change
		let originalChange = Number((amount - price).toFixed(2)); // because floats and 150 - 149.1 returns 0.9000000000000057 ¯\_(ツ)_/¯

		let change = originalChange;
		change *= 100; // change in cents
		if (price > amount) {
			// return statement ends the function, nothing else runs
			return `Customer has not enough money!`
		}

		// calculate the total cash on hand
		let totalCashOnHand = 0;
		for (let note in this.desk) {
			let numOfCurrentNotes = this.desk[note];
			let valueOfCurNote = this.cash[note];
			totalCashOnHand += numOfCurrentNotes * valueOfCurNote;
		}
		console.log('Total cash:', totalCashOnHand);

		// if we have not enough cash on hand:
		if (totalCashOnHand < change) {
			return `Not enough change :(`;
		}

        // an object that will store the number of notes given
		let changeGiven = {};
        for (let note in this.desk) {
			// console.log("current note:", note, "— num of notes", this.desk[note]);
			if (change >= this.cash[note]) {
                
				changeGiven[note] = 0;
				// while loop conditions (when we give change with the current note):
				// change should be >= the current note value
				// change is not 0
				// num of notes we give as change is smaller(!) than what we have in our desk
                while (change >= this.cash[note] && change !== 0 && changeGiven[note] < this.desk[note]) {
                    change -= this.cash[note];
                    
                    // adding to the notes counter:
                    ++changeGiven[note];
                    
				}
			}
			// if not — go to the next iteration / next note
		}
		
		let totalChangeSum = 0;
		for (let note in changeGiven) {
			let noteValue = this.cash[note];
			let numOfNotes = changeGiven[note];
			let currentNoteSum = noteValue * numOfNotes;
			totalChangeSum += currentNoteSum;
		}
		totalChangeSum = Number((totalChangeSum/100).toFixed(2));

		if (totalChangeSum < originalChange) {
			console.log("totalChangeSum", totalChangeSum, "originalChange", originalChange);
			let message = 'Not enough notes to give change...:(';
			console.log(message);
			return message;
		}

		console.log("change given:", totalChangeSum, changeGiven, "change due:", originalChange); // add a log to see the difference between the change due and change given

		// change the amount of 'cash on hand' after the change has been issued
        for (let key in changeGiven) {
        	let numOfCurrentNotesGiven = changeGiven[key];
			let numOfCurrentNotesInDesk = this.desk[key];
			this.desk[key] = numOfCurrentNotesInDesk - numOfCurrentNotesGiven;
        }

    }
}

let cashier = new Cashier(cashObject, cashOnHand); // now 2 arguments!

// cashier.giveChange(30, 130);
console.log(cashier.desk); // to check what's in the cash desk
cashier.giveChange(149.1, 150);


