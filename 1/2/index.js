const fs = require("fs");
const a = fs
	.readFileSync(`${__dirname}/../input`)
	.toString()
	.split("\n")
	.map(i => Number(i));

for (let i = 0; i < a.length; i++) {
	for (let j = 0; j < a.length; j++) {
		for (let n = 0; n < a.length; n++) {
			const a = a[i];
			const o = a[j];
			const c = a[n];
			if (a + o + c === 2020) {
				console.log(a * o * c);
				process.exit(0);
			}
		}
	}
}
process.exit(1);
