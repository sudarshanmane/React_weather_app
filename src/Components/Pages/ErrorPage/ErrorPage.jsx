import React from "react";
import "./errorPage.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_image_container">
      <img
        className="ErrorImage"
        src="https://img.freepik.com/free-vector/tiny-programmers-working-with-system-error-computer-monitor-internet-flat-vector-illustration-programming-it-digital-technology_74855-8632.jpg?w=996&t=st=1691410827~exp=1691411427~hmac=f9f45781ebfd0d7b20846ba772879061f6dbf62e91722686336bf4379b871f56"
        alt=""
      />
      <NavLink to={"/home/weather/city"}>
        <Button type="primary" style={{ backgroundColor: "yellowGreen" }}>
          Go To Home Page!
        </Button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
