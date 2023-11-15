import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthRoute({ children }) {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("user");
  useEffect(() => {
    const isAuth = !!localStorage.getItem("user");
    if (!isAuth) {
      navigate("/");
    }
  }, [navigate]);
  return isAuth ? <>{children}</> : null;
}

export default AuthRoute;
