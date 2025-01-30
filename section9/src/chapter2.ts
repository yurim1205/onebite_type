// infer (어려움)
// -> 조건부 타입 내에서 특정 타입을 추론하는 문법

type FuncA = () => string;

type FuncB = () => number;

// () => R : 조건식을 참으로 추론하도록 만들게 동작함
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

// 예제

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;