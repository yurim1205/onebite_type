// 조건부 타입 (어려움)

type A = number extends string ? string : number;

type ObjA = {
  // 슈퍼 타입
  a: number;
};

type ObjB = {
  // 서브 타입
  a: number;
  b: number;
};

// ObjB가 ObjA를 확장하면 number타입, 거짓이면 string이라는 의미
// ObjB가 ObjA를 확장하고 있으므로 참임
type B = ObjB extends ObjA ? number : string;


// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any){
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
  // replaceAll: text 문자열에서 () 안의 첫 번째 인수에 해당하는 모든 문자를 찾아서,
  // 두 번째 인수로 바꿔주는 메서드
}

let result = removeSpaces("hi im yurim");