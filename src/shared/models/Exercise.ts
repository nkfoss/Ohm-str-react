import { BasicSet } from "./BasicSet";
import { DropSet } from "./DropSet";
import { RestPauseSet } from "./RestPauseSet";

export interface Exercise {
	exerciseName: string,
	setType: string,
	exerciseNotes: string,
	warmupSets: BasicSet[],
	workingSets: BasicSet[] | RestPauseSet | DropSet
}

// Note: The properties "warmupSets" "sets" could be any type that extends BasicSet[].
