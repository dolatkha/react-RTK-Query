import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="alert alert-danger mt-5">This page not found</div>
      <button className="btn-info" onClick={() => navigate("/movies")}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
