// 함수 타입 호환성
// -> 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1). 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; 

// 기준 2). 매개변수가 호환되는가
// 2-1 매개변수의 갯수가 같을 때
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;

// 2-2 매개변수의 갯수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;