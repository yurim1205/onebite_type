// 서로소 유니온 타입
// -> 교집합이 없는 타입들을 모아 만든 유니온 타입

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point} 모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 오셨습니다.

function login(user: User) {
    switch (user.tag) {
        case "ADMIN" : {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }
}

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: "LOADING"
}

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패시 -> 에러메시지 출력
// 성공시 -> 데이터 출력
function processResult(task: AsyncTask) {
    switch(task.state){
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공: ${task.response.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~입니다."
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~",
    },
};

// 동시에 여러가지 상태를 표현해야 되는 객체의 타입을 정의할 때는
// 선택적 프로퍼티를 사용하는 것보다는, 상태에 따라서 타입들을 각각 쪼개어 
// 위와 같이 state, tag같은 프로퍼티들을 추가해서 
// 서로소 유니온 타입으로 만들어주는 게 훨씬 좋음