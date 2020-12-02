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