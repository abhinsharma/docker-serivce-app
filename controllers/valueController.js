const Count = require('../model/Count');

let __Value = 0;

/**
 * Controller to retrieve the latest value 
 */
exports.value = async function (req, res) {

	let result = await Count.findOne({ id : 1 });

	res.json({ value: result.value });
	res.end();

}

/**
 * Hello World end point
 */
exports.helloWorld = function (req, res) {

	res.send("Hello World");
}

/**
 *  Function to increase the value by num.
 * @param num type Integer
 */
exports.increment = async function (req, res) {

	let num = req.body.num;
	let message = '';

	if(typeof num === "undefined" || parseInt(num) < 0 ) {
		message = 'Invalid value';
	} else {
		
		// Get the current value
		let count = await Count.findOne({ name: 'default' });

		try {
			
			let result = await count.update({ value: count.value + num }, { fields: ['value'] });

		} catch(e) {
			console.log(e)
		}
		message = "Value added ";
	}

	res.json({ message : message });
}