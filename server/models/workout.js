const mongoose = require('mongoose');
const basicSetSchema = require('./basicSet');

const workoutSchema = mongoose.Schema(
	{
		bodyweight: Number,

		exercises: {

			type: {
				exerciseName: String,
				setType: String,
				exerciseNotes: String,
				warmupSets: {
					type: [basicSetSchema],
					required: false
				},	
				workingSets: [{
					weight: Number, 
					reps: Number,

					percentEffort: {
						type: Number,
						required: false
					},

					restPauseSets: {
						type: [basicSetSchema],
						required: false
					},

					dropSets: {
						type: [basicSetSchema],
						required: false
					},

				}]
			},
			required: false
		},
		notes: String
		
	}
)

module.exports = mongoose.model("Workout", workoutSchema);