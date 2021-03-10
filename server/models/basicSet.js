const mongoose = require('mongoose');

const basicSetSchema = mongoose.Schema(
	{
		weight: Number,
		reps: Number
	}
)

module.exports = basicSetSchema;