const assert = require("assert");

function generateTest(day, puzzle, expected) {
	describe(`day ${day} | puzzle ${puzzle}`, () => {
		const puzzleFn = require(`../${day}/${puzzle}`);

		it(`answer should be ${expected}`, () => {
			assert.strictEqual(puzzleFn(), expected);
		});
	});
}

generateTest(1, 1, 793524);
generateTest(1, 2, 61515678);
generateTest(2, 1, 560);
generateTest(2, 2, 303);
generateTest(3, 1, 292);
generateTest(3, 2, 9354744432);
generateTest(4, 1, 216);
generateTest(4, 2, 150);
