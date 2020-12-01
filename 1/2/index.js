const fs = require("fs");
const input = fs
	.readFileSync(`${__dirname}/../input`)
	.toString()
	.split("\n")
	.map(i => Number(i));

for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < input.length; j++) {
		for (let n = 0; n < input.length; n++) {
			const a = input[i];
			const o = input[j];
			const c = input[n];
			if (a + o + c === 2020) {
				console.log(a * o * c);
				process.exit(0);
			}
		}
	}
}
process.exit(1);
