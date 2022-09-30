// class person{
//     name: string;
//     age: number;
//     score: number;

//     constructor(name: string, age: number, score: number){
//         this.name = name;
//         this.age = age;
//         this.score = score;
//     }
//     intro(){
//         console.log(`my name is ${this.name},and i scored ${this.score}`);
//     }
// }

// let student1 = new person("savio", 20, 182)
// console.log(student1);
// student1.intro()

// let student2 = new person("savy", 22, 200)
// console.log(student2);

class savio{
    name: string;
    age: number;
    stack: string;

    constructor(name: string, age: number, stack: string){
        this.name = name;
        this.age = age;
        this.stack = stack;
    }

    intro(){
        return `my age is ${this.age}`
    }

    static sum(){
        let el: number[] = [];
        el.push(savio1.age, savio2.age, savio3.age);

        return el.reduce((a, b): number => {
            return a + b
        })
    }
}

let  savio1 = new savio("savy", 20, "javascript")
// console.log(savio1);

let savio2 = new savio("money", 1000, "node")
// console.log(savio2.intro());

let savio3 = new savio("men", 800, "react")
// console.log(savio3.intro());
console.log(`sum of all the numbers in object is ${savio.sum()}`);

// class tokenkey extends savio {
//     tokenData: number;

//     constructor(token: number, name: string, age: number, stack: string){
//         super(name, age, stack)
//         this.tokenData = token
//     }

//     user(a: number){
//         if(a === this.tokenData){
//             console.log("correct token");
//         } else {
//             console.log("wrong input");
//         }
//     }
// }

// let tokenUser = new tokenkey(674644, "jude", 45, "php developer")
// console.log(tokenUser);

// tokenUser.user(674634)

// interface motoTypes{
//     name: string;
//     model: number;
//     colour: string;
//     size: number
// }

// class allCart implements motoTypes {
//     name: string;
//     model: number;
//     colour: string;
//     size: number

//     constructor(options: motoTypes){
//         this.name = options.name;
//         this.model = options.model;
//         this.colour = options.colour;
//         this.size = options.size
//     }
// }

// let newCar = new allCart({name: "toyota", model: 2019, colour: "red", size: 34})