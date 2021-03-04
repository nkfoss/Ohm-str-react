import { Exercise } from "../../shared/models/Exercise";

const exerciseArray: Exercise[] = [
  {
    exerciseName: "Bench Press",
    setType: "mtor",
    exerciseNotes: "Good form. Feel free to add weight.",
    warmupSets: [
      { weight: 45, reps: 20 },
      { weight: 135, reps: 10 },
    ],
    workingSets: [{ weight: 170, reps: 4 }],
  },
  {
    exerciseName: "Pull ups",
    setType: "regular",
    exerciseNotes: "Try to beat 10 next time.",
    warmupSets: [],
    workingSets: [{ weight: 170, reps: 10, percentEffort: 0.89 }],
  },
  {
    exerciseName: "Back squat",
    setType: "myo",
    exerciseNotes: "Try lowering the weight, or change set-type.",
    warmupSets: [
      { weight: 170, reps: 8 },
      { weight: 200, reps: 6 },
    ],
    workingSets: [{
        weight: 220,
        reps: 10,
        percentEffort: 1.1,
        restPauseSets: [
          { weight: 220, reps: 3 },
          { weight: 220, reps: 3 },
          { weight: 220, reps: 1 },
        ],
      }],
  },
];

export default exerciseArray;
