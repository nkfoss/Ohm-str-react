import { Exercise } from "./Exercise";

export interface iWorkout {
	date: string,
	bodyweight: number, 
	exercises: Exercise[],
	notes: string
};