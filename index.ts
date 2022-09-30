// let x:string ="savio"]]] -
// x = "me"
// console.log(x)

// let y:number = 10

// y = 20 + 5
// console.log(y)

// let y: number =20
// let z: number =20

// let w = y * z
// console.log(w)

// let person: boolean | string = "true";
// console.log(person)

// let Arr: (string | number | boolean | null | undefined) [] = ["goat", true, 10, null, undefined]
// console.log(Arr)
// Arr[1] = "savio"
// console.log(Arr)

// let add = [3, 6, 9, 12]0
// console.log(add.length)

// let person : {
//     name: string,
//     age: number,
//     color: "string",
//     height: number
// }

type person = {
    name : string,
    age : number,
    short : boolean,
    color : string | number,
}
type person2 = {
    headsize: number;
}

let student: person = {
    name: "finbarr",
    age: 24,
    short: true,
    color: "red",
}

let student2: person | person2 = {
    name: "savio",
    age: 20,
    short: false,
    color: 10,
    headsize: 10
}
console.log(student)
console.log(student2)

interface Mydata {
    name: string,
    age: number,
    color: string
}

interface Mydata{
    height: number,
    short: boolean
}

let data : Mydata = {
    name : "favour",
    age : 23,
    height : 140,
    color : "green",
    short : true
}

interface student extends person{
    headsize: number
}

console.log(data)
console.log(student)

type fruits = {
    name: string,
    color: string,
    qty: number,
    variety: any[]
}

interface newfruit extends fruits{
    seed: String
}

let data1:newfruit = {
    name: "mango",
    color: "green",
    qty: 20,
    seed: "oval",
    variety:[20,"manny"]
}