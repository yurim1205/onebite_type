// keyof 연산자

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key]
}

const person: Person = {
    name: "이유림",
    age: 26,
};

getPropertyKey(person, "name"); // 이유림