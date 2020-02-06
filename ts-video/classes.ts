class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    greet() {
        console.log('Hey there');
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.firstName = lastName;
    }
    
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }    
}


var aProgrammer = new Person("Blanya", "Blanski");

console.log(aProgrammer);