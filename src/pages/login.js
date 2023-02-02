import Toast from "@/components/common/Toast";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const LoginPage = () => {
  const { signIn } = useAuth();

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <main className="flex-center vh-100">
      <div className="container bg-white w-25 p-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={onClickSubmitHandler} className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
