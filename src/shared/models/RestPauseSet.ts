import { BasicSet } from "./BasicSet";
import { EffortSet } from "./EffortSet";

export interface RestPauseSet extends EffortSet {
	restPauseSets: BasicSet[]
}