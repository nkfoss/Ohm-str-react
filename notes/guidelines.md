# Development Guidelines

This document is a list of guidelines for development. They are more like suggestions than hard rules. It is assumed the group consensus is that following these guidelines results in a higher quality product (in the average case). No guidelines are permanent and are subject to be removed/replaced/reworded after group discussion.

## Table of Contents
- [Development Guidelines](#development-guidelines)
	- [Table of Contents](#table-of-contents)
	- [Typescript](#typescript)
			- [Type-enforcement: Props](#type-enforcement-props)
			- [Type-enforcement: State](#type-enforcement-state)
			- [Typing functional components](#typing-functional-components)
	- [Code Formatting](#code-formatting)
			- [Component-return-statements](#component-return-statements)
			- [html-tags](#html-tags)
	- [Markdown](#markdown)

## Typescript 

#### Type-enforcement: Props

As an example for **Class Components**, checkout the DayRecord.tsx file...
```Typescript


type MyProps = {
	date: any,
	workout: any,
	lbs: any,
	sets: any,
	repsPerSet: any,
	notes: any
}

// In practice, you shouldn't use type 'any'. 
// I'm doing this to make the project work for now until we figure the types we're using.

export default class DayRecord extends Component<MyProps> { 
	... 
}
```
We have a type definition for `MyProps`. This type definition enforces prop usage inside and out of this file. For example inside the file, this won't work:

```Typescript
export default class DayRecord extends Component<MyProps> { 
...
	return(
		<div> 
			<p> {props.recordMax} </p>
		</div>
	)
}
```

This is because `recordMax` is not defined in `interface MyProps`. Pretty straightforward.

Outside of the file, here's something that won't work:

```Typescript
export default class AllDayRecords extends Component {
...
	return(
		<DayRecord recordMax={this.state.recordMax} />
	)
}
```

There are two problems here. Once again, we are trying to provide a prop that doesn't exist for this component. In addition, we haven't provided the other required props for this component.

**Functional components** work similarly. Check this example:

```Typescript

type MyProps = {
	gpa: number,
	last_name: string,
	first_name: string
}

const student = (props: MyProps) => {

	let adjustedGPA = {props.gpa} * 1.2
	return (
		<div> 
			<h1> {props.first_name} {props.last_name} </h1>
			<h4> Adjusted GPA: {adjustedGPA}
		</div>
	)
}

export default student;
```

The same rules apply for inside and outside functional components.

#### Type-enforcement: State

This works similar to how type-enforcement works for props. You will write a type-definition (or interface), and then use that with the component.

```Typescript
type MyState = {
	someCounter: number
}

type MyProps = {
	first_name: string,
	onClickFunction: () => null 
	// ^^ This definition states both the type of 'onClickFunction' (function) and it's return type (null)
}


class MyComponent extends Component<MyProps, MyState> {
	//... stuff ...
}
```

Notice the order of the generics (props before state). So far I haven't found any use cases for this in our project, but I'm sure that will change.

#### Typing functional components

**Don't declare the type of a functional component:**

```Typescript
const fxnComp: React.FunctionalComponent = () => { 
	...  
}
```

Why not? Because it's unnecessary and actually has drawbacks. 
1. Implicitally defines children as type `ReactNode`. This means all components within the specified Functional Component's output will accept 'children' (even if that's illegal). Typescript won't catch this error.
2. It doesn't support generics.
3. Makes "component as namespace pattern" more awkward.
4. Doesn't work correctly with `defaultProps`

(ref: https://github.com/facebook/create-react-app/pull/8177)

For now, just don't declare the types of functional components. We can always change our minds though.

## Code Formatting

#### Component-return-statements

A component's final return statement (inside of `render()` for class-based components) should be a nice, neat summary of the JSX that's being rendered. This will help us in development, because it serves as a reliable spot for general information about the component (it's also always at the bottom which is nice). 

All return statements in `render()` and functional components should not have any contain any complex Javascript logic. It makes it harder to understand the summary. This mainly concerns array mapping (to return multiple JSX elements) and  complex tertiary expressions (or switch statements). It could also apply to array reduction or flattening. 

Here's an example of something nice:

```Typescript

export default const someFC (props: Props) => {

	let jsxArray = props.someCollection.map((el) => {
		//.... logic
		//.... more logic ...
		return <ElementToRender />
	});

	let message = "some default message";
	if (props.someBoolean) {
		// ..... do some other check to create a custom message
		message = "some custom message";
	};

	return (
		<div> 
			<h3> Some caption </h3>
			{jsxArray}
			<p> {message} </p>
		</div>
	)
}

```
#### html-tags

-    `<strong>` tags should be in place of `<b>` tags
## Markdown

All hail the Markdown-God, Michael Small ! 