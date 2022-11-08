import UserRoutes from "UserRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "redux/auth/auth-operations";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch])
  return (
    <UserRoutes />
  );
};
