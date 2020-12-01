module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n").map(Number);

	for (let i = 0; i < input.length; i++) {
		for (let n = 0; n < input.length; n++) {
			const a = input[i];
			const c = input[n];
			if (a + c === 2020) {
				return a * c;
			}
		}
	}
};

console.log(module.exports());
