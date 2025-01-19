// 클래스

let studentA = {
    name: "이유림",
    grade: "A",
    age: 26,
    study() {
        console.log("과제 중")
    },
    introduce() {
        console.log("안녕하세요!")
    },
};

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("과제 중")
    }

    introduce() {
        console.log(`안녕하세요! ${this.name}입니다`)
    }
}

class StudentDeveloper extends Student{
    // 필드
    favoriteSkill;

    // 생성자
    constructor (name, grade, age, favoriteSkill) {
        super(name,grade,age); // 부모 클래스의 생성자를 호출함
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 개발 중`)
    }
}

const studentDeveloper = new StudentDeveloper("이유림", "A", 26, "React");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체를 인스턴스라고 함
let studentB = new Student("이유림","A",26);
console.log(studentB);
studentB.study();
studentB.introduce();