import { BasicSet } from "./BasicSet";
import { EffortSet } from "./EffortSet";

export interface DropSet extends EffortSet {
	dropSets: BasicSet[]
}