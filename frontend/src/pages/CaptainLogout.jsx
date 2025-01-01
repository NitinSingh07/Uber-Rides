import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("captain-token");

  axios
    .get(`${import.meta.env.VITE__BASE_URI}/captain/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("captain-token");
        navigate("/captain-login");
      }
    });
  return <div>Captain Logout</div>;
};

export default CaptainLogout;
