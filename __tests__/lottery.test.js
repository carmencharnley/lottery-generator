const lottery = require('../generator');

describe("Joe's Euromillion lottery generator", function() {
	it('should give Joe 7 numbers, 5 regular, 2 lucky', function() {
		const result = lottery.generateNumbers();

		expect(result).toHaveProperty('regular');
		expect(result).toHaveProperty('lucky');
		expect(result.regular).toHaveLength(5);
		expect(result.lucky).toHaveLength(2);
	});
	it('should contain integers 1-50 inside the regular array', function() {
		const result = lottery.generateNumbers().regular;

		result.forEach(function(regNum) {
			expect(regNum).toBeGreaterThanOrEqual(1);
			expect(regNum).toBeLessThanOrEqual(50);
			expect(regNum).toEqual(Math.floor(regNum));
		});
	});
	it('should contain integers 1-12 inside the lucky array', function() {
		const result = lottery.generateNumbers().lucky;

		result.forEach(function(luckyNum) {
			expect(luckyNum).toBeGreaterThanOrEqual(1);
			expect(luckyNum).toBeLessThanOrEqual(12);
			expect(luckyNum).toEqual(Math.floor(luckyNum));
		});
	});
	it('should not return duplicates in either the regular or lucky arrays', function() {
		const result = lottery.generateNumbers();
		const regular = result.regular;
		const lucky = result.lucky;

		regular.forEach(function(regValue, index) {
			expect(regular.indexOf(regValue)).toEqual(index);
		});

		lucky.forEach(function(luckyValue, index) {
			expect(lucky.indexOf(luckyValue)).toEqual(index);
		});
	});
	it('should order the numbers in ascending order', function() {
		const result = lottery.generateNumbers();
		const regular = result.regular;
		const lucky = result.lucky;

		regular.forEach(function(regValue, index) {
			if (index !== regular.length - 1) {
				const current = regValue;
				const next = regular[index + 1];
				expect(current).toBeLessThan(next);
			}
		});

		lucky.forEach(function(luckyValue, index, arr) {
			if (index !== lucky.length - 1) {
				const current = luckyValue;
				const next = lucky[index + 1];
				expect(current).toBeLessThan(next);
			}
		});
	});
});
