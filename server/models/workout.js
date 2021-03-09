const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema(
	{
		bodyweight: {
			type: Number
		},
		exercises: {
			type: mongoose.Schema.Types.Mixed,
		},
		notes: {
			type: String
		}
	}
)

module.exports = mongoose.model("Workout", workoutSchema);