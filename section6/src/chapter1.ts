// 타입스크립트의 클래스

const employee = {
    name: "이유림",
    age: 26,
    position: "developer",
    work() {
        console.log("일하는 중");
    },
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일하는 중");
    }
}

class ExecutiveOfficer extends Employee{
    // 필드
    officeNumber: number;

    // 생성자
    constructor (name: string, age: number, position: string, officeNumber:number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}


const employeeB = new Employee("이유림", 26, "developer");
console.log(employeeB);