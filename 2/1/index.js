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

	return input.reduce((total, entry) => total + Number(validatePassword(entry)), 0);
};

if (require.main === module) {
	console.log(module.exports());
}
