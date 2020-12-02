const validatePassword = passwordEntry => {
	// 7-10 q: kqhcqqqqqqqqn
	// min 7x 'q' && max 10x 'q'
	let [range, char, password] = passwordEntry.split(" ");
	const [min, max] = range.split("-");
	char = char.replace(":", "");

	const count = password.split(char).length - 1;

	return count >= min && count <= max;
};

module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n");
	// Count the number of correct passwords using reduce
	return input.reduce((total, entry) => total + Number(validatePassword(entry)), 0);
};

if (require.main === module) {
	console.log(module.exports());
}
