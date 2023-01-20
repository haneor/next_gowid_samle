import {NextPage} from "next";
import {useRouter} from "next/router";
import UserDetailContainer from "../../src/views/UserDetailContainer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../src/stores";
import {effUserDetail, usersSlice} from "../../src/stores/usersStore";
import {selUserDetail, selUserLoading} from "../../src/stores/usersStore/users.selector";
import CircleLoading from "../../src/components/Loading/CircleLoading";

const UserDetail: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userDetail } = router.query;
  const user = useSelector(selUserDetail);
  const isLoading = useSelector(selUserLoading);

  useEffect(() => {
    dispatch(effUserDetail(userDetail as string));
  }, [userDetail])

  return (
    <>
      <CircleLoading open={isLoading} />

      <UserDetailContainer data={user} />
    </>
  );
}

export default UserDetail;