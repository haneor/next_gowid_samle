import ApiService from "./ApiService";

class UsersApiService extends ApiService {
  async getUserList () {
    return this.get('/');
  }
  async getUserDetail (id) {
    return this.get(`/${id}`);
  }
}

export default new UsersApiService('/api/users');