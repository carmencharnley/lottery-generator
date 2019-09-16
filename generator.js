// is this easy to test - YES!!!
// TODO: push to GitHub
// Additional Requirement - Joe wants the numbers for the UK lottery - 6 numbers 1 bonus ball

let lottery = {
	minNumber: 1,
	maxRegularNumber: 50,
	maxStarNumber: 12,
	regNumberCount: 5,
	starNumberCount: 2,
	generateNumbers() {
		let regular = [];
		let lucky = [];

		while (regular.length < this.regNumberCount) {
			const regNumber = this.randomNumber(
				this.minNumber,
				this.maxRegularNumber
			);
			if (!regular.includes(regNumber)) {
				regular.push(regNumber);
			}
		}
		regular.sort(this.sortNumbers);

		// abstract it out? hmmm.... oh yeah into a function?

		while (lucky.length < this.starNumberCount) {
			const luckyNumber = this.randomNumber(this.minNumber, this.maxStarNumber);
			if (!lucky.includes(luckyNumber)) {
				lucky.push(luckyNumber);
			}
		}
		lucky.sort(this.sortNumbers);
		return {
			regular,
			lucky
		};
	},
	randomNumber(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	sortNumbers(a, b) {
		return a - b;
	}
};

module.exports = lottery;
