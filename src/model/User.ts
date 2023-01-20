/**
 * 뷰 모델을 정의하고 불변성을 유지 할 수 있도록 처리 합니다.
 */
class User {
  /* entity 를 정의 합니다. */
  id: string;
  name: string;
  amount: string;

  /* 뷰 모델의 초기값을 세팅 합니다. */
  constructor() {
    this.id = '0';
    this.name = '무명';
    this.amount = '없음';
  }

  static createFromApi(data) {
    /* 반환 할 데이터를 주입 합니다. */
    const user = new User();
    user.id = data.id;
    user.name = data.name;
    /* 주입 시 데이터가 없을 수도 있는 객체 라면 초기값을 반환 합니다. */
    if (!!data.amount) {
      user.amount = data.amount;
    }

    return user;
  }
}

export default User;