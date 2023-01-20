import store from 'store2';

const AUTH_TOKEN = 'authToken';
const ACTIVE_TIME = 'activetime';
const USERID = 'userId';

// 토큰 관리
export const getAuthToken = () => store.get(AUTH_TOKEN);
export const setAuthToken = (token: string) => store.set(AUTH_TOKEN, token, true);
export const removeAuthToken = () => store.remove(AUTH_TOKEN);
// 토큰 만료 기간
export const setAuthTokenActiveTime = (tokenRuntime: string) => store.set(ACTIVE_TIME, tokenRuntime, true);
export const getAuthTokenActiveTime = () => store.get(ACTIVE_TIME);
// 현재 사용자 아이디 관리
export const setUserId = (id) => store.set(USERID, id, true);
export const getUserId = () => store.get(USERID);
export const removeUserId = () => store.remove(USERID);