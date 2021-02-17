# Typescript and React

## Setup

The setup will depend on whether you are starting a new project, or adapting an existing project.

#### New projects

```
npx create-react-app my-app --template typescript
```

**Note:** *This command might produce an error stating that you need to uninstall your global create-react-app package. After you do this, try the command again. If it still doesn't work, trying reinstalling the global package, and then trying the command again (yeah... I know).* 
(ref: https://github.com/facebook/create-react-app/issues/10132)

#### Existing Projects

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

From here, you should rename your files to the .tsx extension.


## Practices in our project

#### Type enforcement: Props

As an example for **Class Components**, checkout the DayRecord.tsx file...
```


type Props = {
	date: any,
	workout: any,
	lbs: any,
	sets: any,
	repsPerSet: any,
	notes: any
}

// In practice, you shouldn't use type 'any'. 
// I'm doing this to make the project work for now until we figure the types we're using.

export default class DayRecord extends Component<Props> { 
	... 
}
```
We have a type definition for 'Props' (not to be confused with the keyword 'props'. We could've named it 'MyProps', or anything else reasonable instead). This type definition enforces prop usage inside and out of this file. 

For example inside the file, this won't work:

```
export default class DayRecord extends Component<Props> { 
...
	return(
		<div> 
			<p> {props.recordMax} </p>
		</div>
	)
}
```

This is because recordMax is not defined in props. Pretty straightforward.

Outside of the file, here's something that won't work:
```
export default class AllDayRecords extends Component {
...
	return(
		<DayRecord recordMax={this.state.recordMax} />
	)
}
```

There are two problems here. Once again, we are trying to provide a prop that doesn't exist for this component. In addition, we haven't provided the other requried props for this component.

**Functional components** work similarly. Check this example:

```

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

#### Type enforcement: State

This works similar to how type-enforcement works for props. You will write a type-definition (or interface), and then use that with the component.

```
type MyState = {
	someCounter: number
}

type MyProps = {
	first_name: string,
	onClickFunction: () => null 
	// ^^ This definition states both the type of 'onClickFunction' (function) and it's return type (null)
}


class MyComponent extends Component<MyProps, MyState> {
	... stuff ...
}
```

Notice the order of the generics (props before state). So far I haven't found any use cases for this in our project, but I'm sure that will change.


## Practices to avoid

#### Don't use the type 'React.FunctionalComponent' or 'React.FC'

That is, don't declare the type of a functional component:

```
const fxnComp: React.FunctionalComponent = () => { 
	...  
}
```

Why not? Because it's unnecessary and actually has drawbacks. 
1. Implicitally defines children as type 'ReactNode'. This means all components within the specified Functional Component's output will accept 'children' (even if that's illegal). Typescript won't catch this error.
2. It doesn't support generics.
3. Makes "component as namespace pattern" more awkward.
4. Doesn't work correctly with defaultProps

(ref: https://github.com/facebook/create-react-app/pull/8177)

For now, just don't declare the types of functional components. We can always change our minds though.


# Fin.

##### Additional Resources:
1. React/Typescript cheatsheets (excellent overview w/ links) - 
https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
2. React's official TS docs (not too informative, but useful for setup) - 
https://reactjs.org/docs/static-type-checking.html#typescript
3. Typescript usage in React (very informative) - 
https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=181#example/typescript-with-react
4. Overview and explanation of TS rules/syntax (helpful refresher)- 
https://2ality.com/2018/04/type-notation-typescript.html#specifying-types-via-type-expressions 
5. Typescipt generic functions - 
https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=181#example/generic-functions


