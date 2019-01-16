
let __Value = 0;

exports.value = function (req, res) {

	res.json({ value: __Value });
	res.end();

}

exports.helloWorld = function (req, res) {

	res.send("Hello World");
}

exports.increment = function (req, res) {

	let num = req.body.num;
	let message = '';

	if(typeof num === "undefined" || parseInt(num) < 0 ) {
		message = 'Invalid value';
	} else {
		__Value +=  num;
		message = "Value added ";
	}

	res.json({ message : message });
}