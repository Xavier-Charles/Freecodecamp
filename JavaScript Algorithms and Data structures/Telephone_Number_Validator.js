function telephoneCheck(str) {
	if (isNaN(parseInt(str[0])) && str[0] != '(') return false;

	if (str.includes('(') && str.includes(')')) {
		if (!str.includes('(') && !str.includes(')')) return false;
		if (str.indexOf(')') - str.indexOf('(') != 4) return false;
	}

	var clr = str.split().filter((i = !/[-()]/.test(i)));

	if (clr[0] === 1 && clr.length != 11) return false;

	if (clr[0] != 1 && clr.length != 10) return false;
	return true;
}

function betterTelephoneCheck(str) {
	var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return regex.test(str);
}

// best library for this is https://github.com/google/libphonenumber
