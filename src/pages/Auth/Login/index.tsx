import { Navigate } from "react-router-dom";
import { useActions, useIndexData } from "./selectorData";

const Login = () => {
  const { login } = useActions();
  const { loginLoading, isLoggedIn } = useIndexData();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div>
      <p>Login page</p>{" "}
      <button
        type="button"
        onClick={() => {
          login("luan@mail.com", "test123!");
        }}
      >
        Login{loginLoading && "..."}
      </button>
    </div>
  );
};

export default Login;
