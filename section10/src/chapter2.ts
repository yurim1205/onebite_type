// Exclude<T, U>
// -> T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 결과
// string (합집합하면 never는 공집합이라 사라짐)
 
type A = Exclude<string | boolean, boolean>;


// Extract<T ,U>
// -> T에서 U를 추출하는 타입

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>


// ReturnType
// -> 함수의 반환값 타입을 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R 
    ? R :
    never;

function funcA() {
    return "hi";
}

function funcB() {
    return 10;
}

// funcA함수의 반환값 타입인 string타입을 추출해서 ReturnA에 할당
type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;