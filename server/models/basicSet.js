const mongoose = require('mongoose');

export const basicSetSchema = mongoose.Schema(
	{
		weight: Number,
		reps: Number
	}
)