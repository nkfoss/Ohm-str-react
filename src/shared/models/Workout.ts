import { Exercise } from "./Exercise";

export interface iWorkout {
	bodyweight: number, 
	exercises: Exercise[],
	notes: string
};