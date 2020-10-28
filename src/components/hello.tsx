import * as React from "react";

export interface HelloProps {
	compiler: string;
	framework: string;
}

export const Hello = (props: HelloProps) => 
	(<h1>
		Hello from {props.compiler} and {props.framework}!
		開心翻的多
	</h1>)


// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;