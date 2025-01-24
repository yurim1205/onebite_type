// 인덱스드 엑세스 타입

// 객체 프로퍼티의 타입 추출하기
interface Post {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
    };
  }
  
  const post: Post = {
    title: "안뇽",
    content: "게시글 본문",
    author: {
      id: 1,
      name: "이유림",
    },
  };

  function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.id} - ${author.name}`);
  }


// 배열 요소의 타입 추출하기
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}[];

function printAuthorInfo2 (author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

// 인덱스드 엑세스 타입을 사용할 때 [] 안에 number를 넣어주면
// 배열 타입으로부터 하나의 요소 타입만 가져온다는 의미
const post2: PostList[number] = {
    title: "안뇽",
    content: "게시글 내용",
    author: {
        id: 1,
        name: "이유림",
    },
};


// 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];