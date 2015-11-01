var polet = require('../index');

var app = new polet.App({
	lookup: [__dirname + "/features"],
	features: [
		"hello"
	]
});

app.start();