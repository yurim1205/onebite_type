// 사용자 정의 타입 가드 (헷갈림)

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal:Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}
// 반환값의 타입으로 animal is Dog 를 정의하면,
// 이 함수가 true를 반환하면 조건문 내부에서는 이 값이 Dog 타입임을 보장한다는 의미가 됨

function isCat(animal:Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

// warning 함수에서 isDog 함수를 호출해 매개변수의 값이 Dog 타입인지 확인하고 
// 타입을 좁힐 수 있음 
function warning(animal: Animal) {
    if (isDog(animal)) {
        animal;
    } else if (isCat(animal)) {
        animal;
    }
}