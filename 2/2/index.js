const validatePassword = passwordEntry => {
	// 7-10 q: kqhcqqqqqqqqn
	// index 6 = 'q' || index 9 = 'q'
	let [range, char, password] = passwordEntry.split(" ");
	const [pos1, pos2] = range.split("-");
	char = char.replace(":", "");

	return (
		(password[pos1 - 1] === char && password[pos2 - 1] !== char) ||
		(password[pos2 - 1] === char && password[pos1 - 1] !== char)
	);
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
