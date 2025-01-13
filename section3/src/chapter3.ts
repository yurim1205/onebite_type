// 기본 타입 간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입 간의 호환성

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "토끼",
    color: "white",
}

let dog: Dog = {
    name: "뽀야",
    color: "brown",
    breed: "말티즈",
}

animal = dog;

// 슈퍼
type Book = {
    name: string;
    price: number;
}

// 서브
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "자료구조",
    price: 1000,
    skill: "c",
}

book = programmingBook;