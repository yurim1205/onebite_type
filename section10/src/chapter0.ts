// Partial<T>
// -> 기존 객체 타입에 정의된 프로퍼티들 중 일부분만 사용할 수 있도록 도와주는 타입

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 임시저장 게시글
const draft: Partial<Post> = {
    title: "임시글",
    content: "내용",
};


// Required<T>
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
    title: "강의 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
}


// Readonly<T>
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
}