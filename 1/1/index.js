const fs = require("fs");
const a = fs
	.readFileSync(`${__dirname}/../input`)
	.toString()
	.split("\n")
	.map(i => Number(i));

for (let i = 0; i < a.length; i++) {
	const k = a[i];
	for (let j = 0; j < a.length; j++) {
		const d = a[j];
		if (d + k === 2020) {
			console.log(d * k);
			process.exit(0);
		}
	}
}

process.exit(1);
