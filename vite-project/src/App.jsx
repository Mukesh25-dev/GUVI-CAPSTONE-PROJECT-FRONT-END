import { useDispatch } from "react-redux";
import Layout from "./layouts/Layout";
import { Outlet, useLoaderData } from "react-router";
import { useEffect } from "react";
import { clearUser, setUser } from "../redux/features/auth/userSlice";

const App = () => {
  const user = useLoaderData();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  }, [user]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
