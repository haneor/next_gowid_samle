import {Typography} from "@mui/material";
import {UserInterface} from "../../model/constant/UserInterface";
import Paper from "@mui/material/Paper";

interface UserDetailContainerProps {
  data: UserInterface;
}

const UserDetailContainer = (
  {data}: UserDetailContainerProps
) => {
  return (
    <>
      <Paper
        sx={{margin: '50px auto', textAlign: 'center', padding: '50px'}}
      >
        <Typography lineHeight="2">아이디 : {data?.id}</Typography>
        <Typography lineHeight="2">이름 : {data?.name}</Typography>
        <Typography lineHeight="2">보유량 : {data?.amount}</Typography>
      </Paper>
    </>
  );
}

export default UserDetailContainer;