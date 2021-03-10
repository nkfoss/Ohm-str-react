const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema(
	{
		bodyweight: Number,

		exercises: {

			type: {
				exerciseName: String,
				setType: String,
				exerciseNotes: String,
				warmupSets: {
					type: [{ weight: Number, reps: Number }],
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
						type: [{
							weight: Number,
							reps: Number
						}],
						required: false
					},

					dropSets: {
						type: [{
							weight: Number,
							reps: Number
						}],
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