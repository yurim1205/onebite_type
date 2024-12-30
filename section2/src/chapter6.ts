// any 타입
// 특정 변수의 타입을 확실이 모를 때 사용하는 변수 (가능한 사용하지 않는 게 좋음)
let anyVar: any = 10;
anyVar = "hi";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// unknown 타입
// unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있다.
let unknownVar : unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};