const { test } = require("zora");

function generateTest(day, puzzle, expected) {
	test(`day ${day} | puzzle ${puzzle}`, t => {
		const puzzleFn = require(`../${day}/${puzzle}`);

		t.equal(puzzleFn(), expected, `answer should be ${expected}`);
	});
}

generateTest(1, 1, 793524);
generateTest(1, 2, 61515678);
