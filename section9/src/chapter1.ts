// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;

let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>;

let d : StringNumberSwitch<boolean | number | string>;
// 1단계 (각각 분리한 뒤 유니언으로 묶임)
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// boolean이면 number |
// number면  string |
// string이면 number

// 결과
// number | string

// 실용적인 예제

type Exclude<T,U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never | 
// boolean

// 결과 (never는 공집합이라 합집합하면 사라지게 됨)
// number | boolean

type Extract<T,U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// never |
// string | 
// never

// 결과
// string