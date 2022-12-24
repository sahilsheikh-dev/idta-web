import React from "react";

const SignUp = () => {
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
          <h1 className="text-center">Sign Up</h1>
          <hr />
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
              placeholder="Password"
              required
            />
          </div>
          <p className="mb-3">
            Already have an account? &nbsp;
            <a
              className="text-decoration-none text-custom-primary"
              href="/login"
            >
              Login
            </a>
          </p>
          <div className="text-center">
            <button
              type="button"
              className="btn bg-custom-primary text-light fw-bold w-100"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
