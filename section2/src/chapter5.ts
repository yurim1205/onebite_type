// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = "ko",
    english = "en"
}

const user1 = {
    name: "이유림",
    role: Role.ADMIN,
    language: Language.korean
}

const user2 = {
    name: "박",
    role: Role.USER
}

const user3 = {
    name: "김",
    role: Role.GUEST
}