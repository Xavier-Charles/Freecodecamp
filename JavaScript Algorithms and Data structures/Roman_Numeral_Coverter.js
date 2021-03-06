function convertToRoman(num) {
	let dict = {
		1000: 'M',
		900: 'CM',
		500: 'D',
		400: 'CD',
		100: 'C',
		90: 'XC',
		50: 'L',
		40: 'XL',
		10: 'X',
		5: 'V',
		9: 'IX',
		4: 'IV',
		1: 'I'
	};

	let numbers = Object.keys(dict).reverse();
	let roman = '';

	for (var i in numbers) {
		if (numbers[i] > num) continue;

		let n = Math.floor(num / numbers[i]);
		roman += dict[numbers[i]].repeat(n);
		num -= numbers[i] * n;
	}

	return roman;
}

console.log(convertToRoman(3999));
