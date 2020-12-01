const { test } = require("zora");

const d1p1 = require("../1/1");
const d1p2 = require("../1/2");

test("day 1 | puzzle 1", t => {
	const expected = 793524;
	const puzzle = d1p1;

	t.equal(puzzle(), expected, `answer should be ${expected}`);
});

test("day 1 | puzzle 2", t => {
	const expected = 61515678;
	const puzzle = d1p2;

	t.equal(puzzle(), expected, `answer should be ${expected}`);
});
