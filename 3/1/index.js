module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n");
	let j = 1;
	let currentIndex = 0;
	let treeCount = 0;
	for (let i = 0; i < input.length; i++) {
		const line = input[i].repeat(j);

		if (i === 0) {
			continue;
		}

		currentIndex += 3;

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
