export const password_validation = {
  name: "password",
  label: "Password",
  type: "password",
  id: "password",
  placeholder: "Enter password",
  validation: {
    required: {
      value: true,
      message: "Password is required.",
    },
    minLength: {
      value: 8,
      message: "Min 8 characters",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "Email address",
  type: "email",
  id: "email",
  placeholder: "Enter email address",
  validation: {
    required: {
      value: true,
      message: "Email address is required.",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid Email address.",
    },
  },
};
