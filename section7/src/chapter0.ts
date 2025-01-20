// 제네릭

// 제네릭 함수
// -> 타입 변수와 함께 여러 타입의 값을 인수로 받아서 범용적으로 쓸 수 있는 함수
// T: 타입을 저장하는 변수(타입 변수라고 함)
function func<T>(value: T):T {
    return value;
}

// 제네릭 함수는 타입 이름 뒤에 타입 변수를 선언하고, 
// 타입 변수에 할당되는 타입은 함수를 호출할 때 인수에 따라서 결정됨
let num = func(10);
let bool = func(true);
let str = func("string");

let arr = func<[number,number, number]>([1,2,3]);