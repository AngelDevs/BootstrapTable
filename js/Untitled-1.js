let numberOne = -15;
let numberTwo = 0;

function add(numberOne, numberTwo) {
	let result = 0;
	let sum = 0;

	if (numberOne === numberTwo) {
		return numberOne;
	} else if (numberOne > numberTwo) {
		result = numberOne - numberTwo;
		for (let i = 0; i <= result; i++) {
			sum += numberTwo + i;
			return sum;
		}
	} else if (numberTwo > numberOne) {
		result = numberTwo - numberOne;
		for (let i = 0; i <= result; i++) {
			sum += numberOne + i;
			return sum;
		}
	}
}

console.log(add(numberOne, numberTwo));
