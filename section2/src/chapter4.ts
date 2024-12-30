// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  };
  
  let user: User = {
    id: 1,
    name: "이유림",
    nickname: "yurm",
    birth: "2000.12.05",
    bio: "hi",
    location: "평택시",
  };
  
  let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "yurm",
    birth: "2000.12.05",
    bio: "안녕하세요",
    location: "평택시",
  };

  // 인덱스 시그니처
  type countryCodes = {
    [key: string] : string;
  }

  let countryCodes: countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
  }

  type countryNumberCodes = {
    [key: string] : number;
  }

  let countryNumberCodes: countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
  }