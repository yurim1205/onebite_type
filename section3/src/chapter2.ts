// unknown 타입 (모든 타입의 슈퍼 타입)
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hi";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
}

// never 타입 (모든 타입의 서브 타입)
function neverExam() {
    function neverFunc(): never{
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

// void 타입
function voidExam() {
    function voidFunc():void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

// any 타입
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;
    undefinedVar = anyVar;
}