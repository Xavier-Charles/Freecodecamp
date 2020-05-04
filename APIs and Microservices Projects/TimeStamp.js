// https://curse-arrow.glitch.me/api/timestamp/2015-12-25
//
// { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
//
//Hosted at:
//https://pacific-atom-detail.glitch.me

function Dater(url) {
	var rgx = /[^stamp]*$/;
	let date = url.toString().match(rgx)[0].replace('/', '');
	var out;

	if (date == '') {
		return { unix: new Date().getTime(), utc: new Date().toUTCString() };
	} else if (date.includes('-')) {
		out = {
			unix: new Date(date).getTime(),
			utc: new Date(date).toUTCString()
		};
	} else {
		out = {
			unix: new Date(parseInt(date)).getTime(),
			utc: new Date(parseInt(date)).toUTCString()
		};
	}
	console.log(out);
	if (!out.unix) return { error: 'Invalid Date' };
	return out;
}

//time endpoint...
// app.get('/api/timestamp/:date_string?', function(req, res) {
// 	let d = Dater(req.originalUrl);
// 	res.json(d);
// 	// res.json
// });
