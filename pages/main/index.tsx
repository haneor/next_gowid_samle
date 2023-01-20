import {NextPage} from "next";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => router.push('/login')}
      >
        로그인
      </Button>

      <Button
        variant="contained"
        onClick={() => router.push('/users/list')}
      >
        사용자 리스트
      </Button>
    </>
  );
}

export default HomePage;