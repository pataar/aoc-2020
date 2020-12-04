module.exports = () => {
	const fs = require("fs");
	const input = fs.readFileSync(`${__dirname}/../input`).toString().split("\n");

	const fieldTest = {
		ecl: input => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(input),
		pid: input => input.toString().length === 9 && !isNaN(input) && input > 0,
		eyr: input => input >= 2020 && input <= 2030,
		hcl: input => /^#([0-9a-f]{6})/i.test(input),
		byr: input => input >= 1920 && input <= 2002,
		iyr: input => input >= 2010 && input <= 2020,
		hgt: input => {
			const chars = input.split("");
			const ll = chars.pop();
			const fl = chars.pop();
			const unit = fl + ll;

			if (unit === "cm" && chars.join("") >= 150 && chars.join("") <= 193) {
				return true;
			}
			if (unit === "in" && chars.join("") >= 59 && chars.join("") <= 76) {
				return true;
			}

			return false;
		},
	};

	const isPassportValid = passport => {
		const fields = passport.trim().split(" ");

		const allFields = Object.keys(fieldTest).every(requiredField =>
			fields.some(field => field.split(":")[0] === requiredField),
		);

		if (!allFields) {
			return false;
		}

		return fields.every(field => {
			const [identifier, value] = field.split(":");
			if (identifier === "cid") {
				return true;
			}

			const valid = fieldTest[identifier](value);

			return valid;
		});
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
