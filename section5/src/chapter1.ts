// 인터페이스 확장
// -> 하나의 인터페이스를 다른 인터페이스들이 상속받아 
// 중복된 프로퍼티를 정의하지 않도록 도와주는 문법

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
}

interface Cat extends Animal {
    isScrath: boolean;
}

interface Rabbit extends Animal {
    isRun: boolean;
}

interface DogCat extends Dog, Cat {

}

// 다중 확장
const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScrath: true,
}