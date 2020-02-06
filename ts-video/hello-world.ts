var a: (number|string) [];
var myArr: [number, number, number, string] = [1,2,3,'four']

a = [10, 45, 'string', 6456];

//Interfaces

//define a template for an object

interface Iperson {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements Iperson {
    firstName!: string;    
    lastName!: string;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName; 
    }
}

let iPerson: Iperson = new Foo();

let someObj = {
    firstName: "test",
    lastName: "test",
    getFullName: () => "Test",
    iMiddleName: "Test"
};

 iPerson = someObj;
 
 someObj.iMiddleName = "else";

 

