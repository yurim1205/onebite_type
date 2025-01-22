// 제네릭 인터페이스

interface KeyPair<K, V> {
    key: K,
    value: V;
}

// ***** 중요 *****
// 제네릭 인터페이스를 사용할 때는 타입으로 정의할 때 
// 타입 변수에 할당할 타입을 꺽쇠와 함께 사용해야 함
let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 0,        
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};


// 인덱스 시그니처
interface NumberMap {
    [key: string] : number;
}

let numberMap1: NumberMap = {
    key: -123,
}


interface Map<V> {
    [key: string] : V;
}

let stringMap: Map<string> = {
    key: "value",
}

let booleanMap: Map<boolean> = {
    key: true,
}


// 제네릭 타입 별칭

type Map2<V> = {
    [key: string] : V;
};

let stringMap2: Map2<string> = {
    key: "hi",
}


// 제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 / 개발자 유저

// 객체 타입들로 조합된 복잡한 객체 타입을 정의해서 사용할 때
// 제네릭 인터페이스를 사용하면 코드, 타입의 유형을 깔끔하게 분리해줄 수 있어서 유용함

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

// 제네릭 인터페이스는 변수의 타입을 정의함과 동시에 타입 변수에 할당할 타입을
// 직접 명시해줘야 함 ( User<Student>처럼 )
function goToSchool (user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);

   // goToSchool 함수에 매개변수의 타입은 User타입이고, 타입 변수 T에 Student를 할당했으니까
   // profile이 student인 유저 타입이 됨
}

const developerUser: User<Developer> = {
    name: "이유림",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};

const studentUser: User<Student> = {
    name: "이",
    profile: {
        type: "student",
        school: "순천향대학교",
    },
};