import type { NextApiHandler } from 'next'

const authHandler: NextApiHandler = async (request, response) => {
  const { grantType, loginId, password } = request.body

  await new Promise((resolve) => setTimeout(resolve, 500));
  if (loginId === 'test' && password === '123') {
    response.json({result: {grantType, loginId, password}, data: true, message: '로그인 되었습니다.'});
  }else if (loginId === 'test') {
    response.json({result: {grantType, loginId, password}, data: false, message: '비밀번호가 틀렸습니다.'});
  }else {
    response.json({result: {grantType, loginId, password}, data: false, message: '없는 유저 입니다.'});
  }
}

export default authHandler;