// 함수 타입 정의

function func(a: number, b: number): number {
    return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number , b: number) => a+b;

function aboutMe(name = "이유림", tall?: number) {
    console.log(`name: ${name}`);
    if (typeof tall === "number"){
        console.log(`tall: ${tall + 1}`);
    }
} // 매개변수의 타입을 직접 정의하지 않아도 기본값을 기준으로 타입을 추론함 
// 필수 매개변수는 선택적 매개변수 앞에 있어야 함

aboutMe("이유림", 165);
aboutMe("이유림");


function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it => sum += it));

    console.log(sum);
}

getSum(1,2,3);