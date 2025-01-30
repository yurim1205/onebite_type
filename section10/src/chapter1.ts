// Pick<T, k>
// -> 특정 객체 타입으로부터 특정 프로퍼티 만을 골라내는 타입

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    // 위 제약조건을 풀어서 말하면
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // 타입변수 K에 'title'과 'content'가 할당되면
    // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K] : T[key];
};

// Post타입으로부터 title,content 프로퍼티만 있는 객체 타입으로 새롭게 타입을 정의함
const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: "엣날 글",
    content: "오래된 컨텐츠",
};


// Omit<T, K>
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K  extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'니까 풀어서 말하면,
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude 'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// 위 코드 실행하면
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>와 같이 title만 제거됨

// Post에서 title속성만 뺴라는 의미
const noTitlePost: Omit<Post, 'title'> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};


// Record<K, V>
// K = key, V = value라는 의미

type Record<K extends keyof any, V> = {
    [key in K] : V
}

type Thumbnail = Record<
    "large" | "medium" | "small",
    {url: string}
>;