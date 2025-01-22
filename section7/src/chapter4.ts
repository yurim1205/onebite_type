// 제네릭 클래스

class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
// 생성자에 number 타입의 배열을 전달하면 그떄의 numberList는 number타입의 리스트로 만들어짐

numberList.pop();
numberList.push(4);
numberList.print();     // [ 1, 2, 4 ]

const stringList = new List(["1","2"]);
stringList.push("hi");