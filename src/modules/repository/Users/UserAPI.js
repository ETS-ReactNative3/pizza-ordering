import BaseApi from '../../../core/services/BaseApi';

class UserAPI {
  async signIn(loginData) {
    let response = await BaseApi.post('', loginData);
    return response;
  }

  async signUpUser(signUpData) {
    let response = await BaseApi.post('', signUpData);
    return response;
  }
}

export default UserAPI;
