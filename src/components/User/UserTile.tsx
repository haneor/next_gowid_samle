import React, {FC} from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {UserInterface} from "../../model/constant/UserInterface";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

interface UserTileProps {
  data: UserInterface;
}

const UserTile:FC<UserTileProps> = (
  {data}
) => {
  const router = useRouter();
  const onClickDetail = () => {
    router.push(`/users/${data.id}`);
  }

  return (
    <>
      <Card sx={{width: 300, margin: '20px', }}>
        <CardContent>
          <Typography variant="body1">이름 : {data.name}</Typography>
          <Typography variant="body2">보유량 : {data.amount}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={onClickDetail}
          >
            자세히 보기
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default UserTile;
