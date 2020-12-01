module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n").map(Number);

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			for (let k = 0; k < input.length; k++) {
				const a = input[i];
				const o = input[j];
				const c = input[k];
				if (a + o + c === 2020) {
					return a * o * c;
				}
			}
		}
	}
};

if (require.main === module) {
	console.log(module.exports());
}
