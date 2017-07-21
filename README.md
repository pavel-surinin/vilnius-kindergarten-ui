# RactWednesdays#2

This time we will use preconfigured project called "create-react-app" with TypeScript 

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about running tests for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

##TypeScript 

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
With tpeScript we will define all variables types, parameters types, function return types.

Lets define string array:
```
const names: string[] = ['John', 'Mike'];
```

Function with parameters:
```
    function decorate(name: string) : string {
        return `mr. ${name}`;
      }  
```

Define type:

```
type Profession = "programmer" | "qa" | "dev-ops" | "ba";

 
function decorate(prof: Profession, name: string) : string {
    return `${name} is ${prof}`;
}  
```

Define type interface: 
 
```
interface MyDate {
    year: number;
    month: number;
    day: number;
}

interface Person {
    name: string;
    lastName: string;
    birthDate: MyDate;
}

const pavel: Person = {
    name: "Pavel";
    lastName: "Surinin";
    birthDate: {
        year: 1989;
        month: 02;
        day: 26;
    }
}
```

Define react class with TypeScript:
```
interface StudentProps extends Person {
    onHandleRegisterGrade: (event: React.FormEvent<HTMLInputElement>) => void;
    school: string;
}

export class StudentComponent extends React.Component<StudentProps, {}> {
  ...
}
```
`React.Component<StudentProps, {}>` means, that props can only be fields from StudentProps interface.
Second parameter is react state definition. As this component is stateless, pass empty object to second parameter.