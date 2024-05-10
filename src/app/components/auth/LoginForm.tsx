import React from "react";
import Loader from "@/app/components/Common";

const LoginForm = React.memo(function loginForm() {
  return (
    <form className="flex flex-col items-stretch justify-start gap-4">
      <div className="flex flex-col flex-input items-stretch justify-start relative">
        <div className="mb-1 flex flex-row items-center justify-between">
          <label
            htmlFor=""
            className="text-label leading-snug font-medium flex items-center"
          >
            Email address
          </label>
        </div>
        <input
          type="text"
          className="w-full px-4 py-2 text-label leading-tight font-normal border border-solid border-hr outline outline-2 outline-transparent outline-offset-2 rounded-md focus:shadow-input-focus transition-all duration-200 ease-in-out"
        />
        <div className={`input_error_box relative`}>
          <p className="mt-2 text-label text-danger leading-tight font-medium flex gap-1 absolute top-0 visible">
            Couldn't find your account.
          </p>
        </div>
      </div>
      <div className="mb-1"></div>
      <button className="w-full min-h-9 px-5 py-2 text-xs text-white leading-none tracking-wider font-semibold uppercase inline-flex items-center justify-center bottom-0 outline-0 bg-accent select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent-dark">
        Continue <Loader />
      </button>
    </form>
  );
});

LoginForm.displayName = "LoginFormComponent";

export default LoginForm;
