const fs = require("fs");
const a = fs
	.readFileSync(`${__dirname}/../input`)
	.toString()
	.split("\n")
	.map(i => Number(i));

for (let i = 0; i < a.length; i++) {
	for (let n = 0; n < a.length; n++) {
		const a = a[i];
		const c = a[n];
		if (a + c === 2020) {
			console.log(a * c);
			process.exit(0);
		}
	}
}

process.exit(1);
