const { test } = require("zora");

const d1p1 = require("../1/1");
const d1p2 = require("../1/2");

test("day 1 | puzzle 1", t => {
	t.equal(d1p1(), 793524, "answer should be 793524");
});

test("day 1 | puzzle 2", t => {
	t.equal(d1p2(), 61515678, "answer should be 61515678");
});
