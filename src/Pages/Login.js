import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Login = () => {
  const [showSingUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSingUp);
  };

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("Customer");

  return (
    <div className="bg-info d-flex justify-content-center align-items-center vh-100">
      <div style={{ width: 25 + "rem" }} className="card p-3 shadow-lg">
        <h4 className="text-success my-3">
          {showSingUp ? "Sign Up" : "Log In"}
        </h4>
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control my-2"
              placeholder="UserId"
              value={userId}
            />
          </div>
          {showSingUp && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Username"
                  value={userName}
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control my-2"
                  placeholder="Email"      value={userEmail}
                />
              </div>
            </>
          )}

          <div className="input-group">
            <input
              type="password"
              className="form-control my-2 "
              placeholder="Password"
              value={password}
            />
          </div>
          {showSingUp && (
            <DropdownButton title={userType} variant="none" id="userType">
              <Dropdown.Item eventKey="engineer">Engeener</Dropdown.Item>
              <Dropdown.Item eventKey="customer">Customer</Dropdown.Item>
            </DropdownButton>
          )}
          <div className="input-group">
            <input
              style={{ fontWeight: "bold" }}
              type="submit"
              className="bg-success form-control my-3 text-white"
              value={showSingUp ? "Sign Up" : "Log In"}
            />
          </div>

          <div
            className="text-info"
            style={{ cursor: "pointer" }}
            onClick={toggleSignUp}
          >
            {showSingUp
              ? "Alredy have an account? Log In"
              : "Dont't have an account? Sign Up"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
