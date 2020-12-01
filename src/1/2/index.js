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
		for (let n = 0; n < a.length; n++) {
			const m = a[n];
			if (d + k + m === 2020) {
				console.log(d * k * m);
				process.exit(0);
			}
		}
	}
}
process.exit(1);
