// function add (n1: number, n2: number, showResult: boolean, phrase: string){
//     const result = n1 + n2
//     if(showResult){
//         console.log(phrase + result);
//     } else {
//         return result;
//     }
// }

// const number1 = 5;
// const number2 = 3.4;
// const printResult = true
// const resultPhrase = "result is: "

// add(number1, number2, printResult, resultPhrase)



//   OBJECTS IN TS
// let person : {
//     name: string;
//     age: number;
// } = {
//     name: "maxmillian",
//     age: 30,
// }

// console.log(person.name.length);


//     ARRAYS IN TS
// let person : {
//     name: string;
//     age: number;
//     hobbies: string[]
// } = {
//     name: "maxmillian",
//     age: 30,
//     hobbies: ["sport", "cooking"]
// }
// for (const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// }

// console.log(person.name.length);


//TUPPLE IN TS
// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "maxmillian",
//     age: 30,
//     hobbies: ["sport", "cooking"],
//     role: [10, "savio"]
// }
// for (const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// }
// person.role[1] = "admin"
// console.log(person.role);


//  ENUM IN TS
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person = {
//     name: "maxmillian",
//     age: 30,
//     hobbies: ["sport", "cooking"],
//     role: ADMIN
// }

// enum Role { AUTHUR, READ_ONLY, ADMIN}

// if(person.role === Role.ADMIN){
//     console.log("is an admin");
// }


//      UNIONS IN TS
function combine(input1: number | string, input2: number | string){
    let result;
0
    if (typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString();
    }
      return result  
}

const combineAges = combine(30, 36);
console.log(combineAges);

const combinedNames = combine("Savy ", "Savio")
console.log(combinedNames);