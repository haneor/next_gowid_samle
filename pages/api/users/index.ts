import {NextApiHandler} from "next";

const data = [
  {id: '1001', name: '김서준', amount: '39,408'},
  {id: '1002', name: '이도윤', amount: '37,786'},
  {id: '1003', name: '박서준', amount: '30,984'},
  {id: '1004', name: '최예준', amount: '30,060'},
  {id: '1005', name: '김시우', amount: '28,498'},
  {id: '1006', name: '이하준', amount: '27,199'},
  {id: '1007', name: '박주원', amount: '26,665'},
  {id: '1008', name: '최지호', amount: '26,130'},
  {id: '1009', name: '김지후', amount: '23,328'},
  {id: '1010', name: '이준우', amount: '22,908'},
  {id: '1011', name: '박준서', amount: '22,392'},
];

const userHandler: NextApiHandler = async (request, response) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  response.json({result: true, data, message: '유저 목록을 정상 호출하였습니다.' });
}

export default userHandler;