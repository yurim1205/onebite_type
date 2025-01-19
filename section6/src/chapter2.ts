// 접근 제어자
// private : 클래스 내부에서만 접근 가능
// proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
// public : 모든 범위에서 접근 가능

class Employee {
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // private: 내부에서는 접근 가능
  }
}

class ExecutiveOfficer extends Employee {
  // 메서드
  func() {
    this.age; // proteced: 파생클래스에서 사용 가능
  }
}

const employee = new Employee("이유림", 26, "developer");
employee.position = "디자이너";

console.log(employee);