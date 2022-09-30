var person = /** @class */ (function () {
    function person(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
    person.prototype.intro = function () {
        console.log("my name is ".concat(this.name, ",and i scored ").concat(this.score));
    };
    return person;
}());
var student1 = new person("savio", 20, 182);
console.log(student1);
student1.intro();
var student2 = new person("savy", 22, 200);
console.log(student2);
