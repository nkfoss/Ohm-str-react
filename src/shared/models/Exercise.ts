import { BasicSet } from "./BasicSet";
import { DropSet } from "./DropSet";
import { EffortSet } from "./EffortSet";
import { RestPauseSet } from "./RestPauseSet";

export interface Exercise {
	date: string,  // date.toDateString()
	exerciseName: string,
	setType: string,
	exerciseNotes: string,
	warmupSets: BasicSet[],
	workingSets: BasicSet[] | EffortSet[] | RestPauseSet[] | DropSet[]
}

// Note: The properties "warmupSets" "sets" could be any type that extends BasicSet[].
