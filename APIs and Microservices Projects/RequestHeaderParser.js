//Request Header Parser Microservice
app.get('/api/whoami', function(req, res) {
	res.json({
		ipaddress: req.headers['x-forwarded-for'].split(',', 1)[0],
		language: req.headers['accept-language'],
		software: req.headers['user-agent']
	});
});

//* Hosted at: https://elite-cheerful-table.glitch.me
