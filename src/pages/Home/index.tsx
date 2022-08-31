import React, { useEffect } from "react";
import { useActions } from "./selectorData";

const Home = () => {
  const { setUser } = useActions();
  useEffect(() => {
    setUser({
      email: "luan@mail.com",
      password: "test123!",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Welcome to Home page</div>;
};

export default Home;
