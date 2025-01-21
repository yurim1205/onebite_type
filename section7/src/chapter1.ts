// 타입 변수 응용하기 (헷갈림)

// 사례 1
function swap<T, U>(a: T, b: U) {
    return [b,a];
}

const [a, b] = swap("1", 2);


// 사례 2
function returnFirstValue<T> (data: [T, ...unknown[]]) {
    return data[0]; // data의 0번째 인덱스를 반환함
}

let num = returnFirstValue([0,1,2]);

let str = returnFirstValue(["hi","mynameis"]);


// 사례 3
function getLength<T extends {length: number}> (data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);     // 3
let var2 = getLength("12345");       // 5
let var3 = getLength({ length: 10}); // 10

// <T extends {length: number}>는 아래 코드랑 같은 기능의 코드임
interface InterfaceA {
    length: number;
}

interface InterfaceB extends InterfaceA {}

// T라는 타입은 length가 number인 프로퍼티를 가지고 있는 객체를 확장하는 타입이기 때문에,
// 무조건 length라는 프로퍼티를 가지고 있는 타입이어야 함