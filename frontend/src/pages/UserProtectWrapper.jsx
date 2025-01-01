import React, { useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    }
  }, [token]);

  return <>{children} </>;
};

export default UserProtectWrapper;