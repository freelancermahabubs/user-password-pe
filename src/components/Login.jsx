import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import "./Login.css";
import { AuthContext } from "../AutProviders/AutProviders";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { singIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control password-filed">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {passwordShown ? (
                  <EyeSlashIcon
                    onClick={togglePassword}
                    className="eye text-blue-500"
                  />
                ) : (
                  <EyeIcon
                    onClick={togglePassword}
                    className="eye text-blue-500"
                  />
                )}
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Forget Password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mb-4 ml-8">
              <Link to="/register" className="label-text-alt link link-hover">
                New to Auth Master? Please Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
