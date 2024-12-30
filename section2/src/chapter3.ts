// object
let user: {
    id: number;
    name: string;
} = {
    id:1,
    name: "이유림",
};

let dog: {
    name: string;
    color: string;
} = {
    name: "뽀야",
    color: "brown",
}

// 선택적 프로퍼티
let user2: {
    id?: number;
    name: string;
} = {
    id:1,
    name: "이유림",
};

user2 = {
    id: 1,
    name: "이유림",
};

let config: {
     readonly apiKey: string; // apiKey는 수정되면 안 되는 프로퍼티이므로 readonly를 붙여야함
} = {
    apiKey: "MY API KEY",
};
