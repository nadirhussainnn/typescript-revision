/**
 * @author Nadir
 * @source https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-complex-types/cheatsheet
 */

/**
 * Developed by MS in 2012 for large scale apps so that developers are informed of bugs at runtime
 * Superset of Javascript-> Supports whole syntax of javascript while provides useful features over it
 * Optionaly typed language
 * Transpiled from TS to JS with tsc (Typescript compiler)
 *
 */

/**
  
Variables assigned values at declare time are treated of that type
exp: 
let x='hello'
x=1             //Error



/*****
    
Permitive types
-string
-number
-boolean
-undefined
-null

 */

/*******
    Important topics

    1. variable Type annotation:
    Variables can be declared with specific type
    
    let x:string;
    x='hello'           ✔️
    x=5                 ❌

    2. Function parameter annotaion

    function greet(msg:string){}

    3. return type annotation
    function greet():string{
        return "string" ✔️
        return 5        ❌
    }

    4. typed arrays
    let arr1:number[]=[1,2,3,4]  ✔️
    let arr2:string[]=['1',2,3,4]  ❌

    let nums=number[][]=[arr1,arr1] ✔️

    5. Tuples

    like javascript, array can contain different type then it is known as tuple
    exp: 
    let combines=[string,boolean,number]=["Hello",true,66]✔️
    Note: We can't assign array to tuple even if they have same shape
    exp: 
    let tup=[string,string]=['a','b']
    let arr=string[]=['c','d']
    tup=arr ❌
    tup=['x','y']✔️
    tup[2]='z' ❌ bcz tuples ar fixed size unlike array
    arr[2]='z' ✔️   dynamic size

    let newVar=tup.concat(["hello"]) ✔️
    cl(newVar)      //[x,y,hello]


    6. tsconfig.json file
    Every TS project has ts.config file that defines 

    {
        compilerOptions:{
            target:'es2017',            //Support ES2017 and above
            module:'commonjs',          // import export syntaxt from common js
            strictNullChecks:true       // throw error if null found exp: null.map()
        },
        include:["** / *.ts"],          //only compile all .ts files
    }

    7. rest operator type annotation

    function smush(firstString, ...otherStrings: string[]){

    }
    can't call like smush(1,2,3,4)

    8. spread operator to accept list of different parameters for function

    

    function gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates){
        
        //These tuple type annotations guarantee that the types of the elements will be valid function parameters for gpsNavigate().
    
    }

    let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
    let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];


    exp2:

    function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if(hasFlair){
    console.log('I do it with flair!');
  }
}

let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];

danceMoves.forEach(move => performDanceMove(...move));


9. Custom types

- let myVar: compType; 

- function testFn(param: compType): returnedCompType {}
- let inferredTypeVariable = testFn(myVar); 

Enums - Define only few possible values for variable. Exp, string varaible can contain infinite strings, so we define our own type
They have default values like indices
enum Direction {
  North,                    0   
  South,                    1
  East,                     2
  West                      3
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 

whichWayToArcticOcean=5 ✔️
we can change starting number as

enum Direction {
  North = 7,
  South,
  East,
  West
}

now Direction.North,Direction.South, Direction.East,Direction.West are equal to 7 8 9 10 resp

10. Object types in TS

let aPerson: {name: string, age: number};
Then
aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property. 
aPerson = {name: 'User McCodecad', age: 22}; // Valid code. 

Incase of functions
function sayHappy(name, age){}  //name and age are descriptive variables, but
function sayHappy(personObj){}  //personObj is not descriptive , we don't know if it is object? what properties it has. So TS can help


11. Type Aliases

1.
type Coord=[number, number, string, number, number, string]

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];

2. 
type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};



12. Generic Types - Very USEFUL

type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily :Family<number>= {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily:Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily:Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};

13. Generic functions

JS function

function getFilledArray(value, n) {
  return Array(n).fill(value);
}
Well, we run into a problem when we try to specify the function’s return type. We know it should be an array of whatever
value‘s type is—do we have to write a separate type annotation for every type of value? Nope

With TS
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
The above code tells TypeScript to make sure that value and the returned array have the same type T. 
When the function is invoked, we will provide T‘s value. For example, we can invoke the function using getFilledArray<string>('cheese', 3), 
which sets T equal to string. This still evaluates to ['cheese', 'cheese', 'cheese']


14. Unions
We may need to define variable between less specific and highest specific level. exp: between any and other type like string, number
We want to store employeeId, that can be number or string. We could use anytpe, but it is better to specify types when they are more than one. So union

let ID: string | number;
 
// number
ID = 1;
 
// or string
ID = '001';

function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}


    7. interfaces


**********/
