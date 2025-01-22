// 프로미스 (어려움)

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  // 게시글을 3초 뒤에 불러오는 비동기 함수
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "안뇽",
        content: "내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id;
});