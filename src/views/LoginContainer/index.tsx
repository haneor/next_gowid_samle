import React, {FC, useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {authSlice, effLogin, LoginProps} from "../../stores/authStore";
import {useDispatch, useSelector} from "react-redux";
import {selLoginInfo, selLoginLoading, selSuccessLogin} from "../../stores/authStore/auth.selector";
import {AppDispatch} from "../../stores";
import CircleLoading from "../../components/Loading/CircleLoading";
import {useRouter} from "next/router";

const CustomPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  width: 600,
  padding: 40,
  margin: '0 auto',
  gap: 20,
  display: 'flex',
  flexDirection: 'column'
}));
const HeadText = styled('h1')({
  textAlign: 'center'
});

const { actions } = authSlice;

const LoginContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const loginInfo = useSelector(selLoginInfo);
  const isLoading = useSelector(selLoginLoading);
  const isSuccessLogin = useSelector(selSuccessLogin);

  useEffect(() => {
    /**
     * 페이지를 벗어 나면 상태를 리셋 합니다.
     */
    return (() => {
      dispatch(actions.reset());
    });
  }, []);

  useEffect(() => {
    if (isSuccessLogin) {
      router.push('/');
    }
  }, [isSuccessLogin])

  const onChangeId = (e) => {
    dispatch(actions.changeId(e.target.value));
  };
  const onChangePassword = (e) => {
    dispatch(actions.changePassword(e.target.value));
  };

  const onSubmitLogin = async () => {
    if (!loginInfo.id || !loginInfo.password) return alert('아아디 및 비밀번호는 반드시 입력해야 합니다.');
    await dispatch(effLogin(loginInfo));
  }

  return (
    <>
      <CircleLoading open={isLoading} />
      <HeadText>
        Login
      </HeadText>

      <CustomPaper>
        <TextField
          fullWidth
          error={!!loginInfo.id && isSuccessLogin === false}
          onChange={onChangeId}
        />

        <TextField
          fullWidth
          label="패스워드"
          error={!!loginInfo.password && isSuccessLogin === false}
          onChange={onChangePassword}
        />

        <Button
          variant="contained"
          onClick={onSubmitLogin}
        >
          로그인
        </Button>
      </CustomPaper>


      <HeadText>
         Example Component
      </HeadText>

      <CustomPaper elevation={5}>
        <Button variant="contained">Button111</Button>
        <Button variant="text">Button</Button>
        <Button variant="outlined">Button</Button>

        <Button variant="contained" disabled >Button</Button>
        <Button variant="text" disabled >Button</Button>
        <Button variant="outlined" disabled >Button</Button>

        <br/>
        <Button variant="outlined" size={"small"}>small</Button>
        <Button variant="outlined" size={"medium"}>medium</Button>
        <Button variant="outlined" size={"large"}>large</Button>

      </CustomPaper>
    </>
  );
};

export default LoginContainer;
