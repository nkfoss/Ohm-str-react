const WathenFormula = (weight: number, reps: number) => {

	let numerator = weight * 100;
	let denominator = 48.8 + ( 53.8 * Math.exp(-0.075*reps) );

	let unrounded = numerator/denominator;
	return +unrounded.toFixed(2);
}
export default WathenFormula;

// This is one of many one-rep-max formulas. There are others that are equally accurate/inaccurate. 
// I've been using this formula for awhile, and it seems to work fine.