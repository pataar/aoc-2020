module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n");

	const requiredFields = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];

	const isPassportValid = passport => {
		const fields = passport.trim().split(" ");

		return requiredFields.every(requiredField => fields.some(field => field.split(":")[0] === requiredField));
	};

	let count = 0;
	for (let i = 0; i < input.length; i++) {
		let passport = "";
		while (input[i] !== "" && input[i]) {
			passport += ` ${input[i]}`;
			i++;
		}

		const valid = isPassportValid(passport);

		if (valid) {
			count++;
		}
	}

	return count;
};

if (require.main === module) {
	console.log(module.exports());
}
