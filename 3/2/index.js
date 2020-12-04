module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n");

	return (
		slopeCalculator(input, 1, 1) *
		slopeCalculator(input, 3, 1) *
		slopeCalculator(input, 5, 1) *
		slopeCalculator(input, 7, 1) *
		slopeCalculator(input, 1, 2)
	);
};

const slopeCalculator = (input, right = 3, down = 1) => {
	let j = 1;
	let currentIndex = 0;
	let treeCount = 0;
	for (let i = 0; i < input.length; i = i + down) {
		const line = input[i].repeat(j);

		if (i === 0) {
			continue;
		}

		currentIndex += right;

		if (currentIndex > line.length * 0.8) {
			// When we're close to the ending of the line; add another one
			j++;
		}

		if (line[currentIndex] === "#") {
			treeCount++;
			line[currentIndex] = "X";
		} else {
			line[currentIndex] = "O";
		}
		input[i] = line;
	}

	return treeCount;
};

if (require.main === module) {
	console.log(module.exports());
}
