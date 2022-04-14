import { useEffect } from "react";
import { authActions } from "../store/auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const ReduxComponent = () => {
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(authActions.logout());
    }, 2000);
  }, []);
  return <h1>{loggedIn ? "On" : "Off"}</h1>;
};

export default ReduxComponent;
