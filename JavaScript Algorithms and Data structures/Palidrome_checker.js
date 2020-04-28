function palindrome(str) {
	let list = str.toLowerCase().split('').filter((i) => /[a-zA-Z0-9]/.test(i));

	let out = list.reduce((acc, cur, id, src) => {
		if (cur != src[src.length - (1 + id)]) {
			acc.push(cur);
		}
		return acc;
	}, []);

	if (out.length <= 1) return true;
	else return false;
}
