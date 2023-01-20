import ApiService from './ApiService';

class AuthApiService extends ApiService {
  async login(loginId: string, password: string) {
    return this.post(
      ``,
      new URLSearchParams({
        grantType: 'password',
        loginId: loginId,
        password: password,
      }),
      { headers: { 'content-type': 'application/x-www-form-urlencoded' }, isAuthRequired: false }
    );
  }

  async logout () {
    return this.post(`/signout`);
  }

  async createAuthenticode (formData) {
    return this.post(`/code`, formData, { isAuthRequired: false });
  }
  async validateAuthenticode (formData) {
    return this.post(`/validate/code`, formData, { isAuthRequired: false });
  }
  async updatePassword (formData) {
    return this.post(`/password`, formData, { isAuthRequired: false });
  }
}

export default new AuthApiService('/api/auth');
