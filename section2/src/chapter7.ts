// void
// 아무런 값도 없음을 의미하는 타입

function func1(): void {
    console.log("hi");
}

// never 타입
// 함수가 어떠한 값도 반환할 수 없는 상황일 때 사용함
function func2(): never {
    while (true) {}
}

function func3(): never {
    throw new Error();
}