
class Employee{
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getDetails(){
        return `${this.name}'s age is ${this.age} and his salary is ${this.salary}`;
    }
}

class Manager extends Employee{
    constructor(name, age, salary, department){
        super(name, age, salary);
        this.department = department;
        
    }
    

    getManagerDetails(){
        return `${this.getDetails()} and he is in ${this.department} department.`; 
    }
}
console.log(getDetails)

const emp = new Employee("viddhi", 24, "78K");
console.log(emp.getDetails());

const mgr = new Manager("piyuu", 25, "1 Lakh", "Information Technology");
console.log(mgr.getManagerDetails());
