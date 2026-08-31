import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email " placeholder="email"></input>
              <input type="password" placeholder="password"></input>
              <a href="#">Forgot password</a>
              <button>Login</button>
              <p>
                Not a number?
                <a href="#" onClick={() => setIsLogin(false)}>
                  signup now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email " placeholder="email"></input>
              <input type="password" placeholder="password"></input>
              <input type="password" placeholder="Confirm password"></input>
              <button>Signup</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
