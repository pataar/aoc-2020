const validatePassword = passwordEntry => {
	// 1-3 a: min a 1 max a 3
	let [range, char, password] = passwordEntry.split(" ");
	const [min, max] = range.split("-");
	char = char.replace(":", "");

	const count = password.split(char).length - 1;

	return count >= min && count <= max;
};

module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n");

	let count = 0;
	for (let i = 0; i < input.length; i++) {
		let entry = input[i];
		count += validatePassword(entry) ? 1 : 0;
	}

	return count;
};

if (require.main === module) {
	console.log(module.exports());
}
