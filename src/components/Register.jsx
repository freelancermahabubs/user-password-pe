import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../AutProviders/AutProviders";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                    Already Have an Account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
