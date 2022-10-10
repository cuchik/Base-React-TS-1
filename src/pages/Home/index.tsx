import React, { useEffect } from "react";
import { useActions, useIndexData } from "./selectorData";

const Home = () => {
  const { login } = useActions();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loginLoading } = useIndexData();
  useEffect(() => {
    login("luan@mail.com", "test123!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Welcome to Home page</div>;
};

export default Home;
