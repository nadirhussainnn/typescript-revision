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

    7. interfaces


**********/

/*****
    
permitive types
-string
-number
-boolean
-undefined
-null

 */
