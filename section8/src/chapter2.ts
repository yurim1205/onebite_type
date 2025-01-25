// 맵드 타입(중요)
// -> interface에서는 사용 불가능, 타입 별칭으로만 사용 가능

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser() : User{
    return {
        id: 1,
        name: "이유림",
        age: 26,
    };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser (user: PartialUser) {
}

updateUser({
    id: 1,
    name: "이유림",
    age: 24,
});