import { BasicSet } from "./BasicSet";

export interface Exercise {
	exerciseName: string,
	setType: string,
	exerciseNotes: string,
	warmupSets: BasicSet[],
	sets: BasicSet[]
}

// Note: The properties "warmupSets" "sets" could be any type that extends BasicSet[].
