import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../stores";
import {Paper, Typography} from "@mui/material";
import {effUsersList, usersSlice} from "../../stores/usersStore";
import {selUserLoading, selUsersList} from "../../stores/usersStore/users.selector";
import UserTile from "../../components/User/UserTile";
import CircleLoading from "../../components/Loading/CircleLoading";

const { actions } = usersSlice;

const UsersListContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usersList = useSelector(selUsersList);
  const isLoading = useSelector(selUserLoading);

  useEffect(() => {
    dispatch(effUsersList());
    return (() => {
      dispatch(actions.reset());
    });
  }, []);

  return (
    <>
      <CircleLoading open={isLoading} />

      <Paper
        sx={{margin: '20px', padding: '20px'}}
      >
        <Typography variant="h4" mb='20px' align="center" >사용자 목록</Typography>

        <Paper
          variant="outlined"
          sx={{padding: '20px'}}
        >
          {usersList.map(p => <UserTile key={`user-tile-${p.id}`} data={p}/>)}
        </Paper>
      </Paper>
    </>
  );
}

export default UsersListContainer;