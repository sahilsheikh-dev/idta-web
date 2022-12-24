import React from "react";

const Login = () => {
  return (
    <div
      className="container d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card w-100 mx-auto bg-transparent border"
        style={{ maxWidth: "500px" }}
      >
        <div className="card-body">
          <h1 className="text-center">Login</h1>
          <hr />
          <div class="mb-3">
            <input
              type="text"
              class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
              placeholder="Username"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
              placeholder="Password"
              required
            />
          </div>
          <p className="mb-3">
            Don't have an account? &nbsp;
            <a
              className="text-decoration-none text-custom-primary"
              href="/signup"
            >
              Sign Up
            </a>
          </p>
          <div className="text-center">
            <button
              type="button"
              className="btn bg-custom-primary text-light fw-bold w-100"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
