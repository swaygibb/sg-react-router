import * as React from "react";
import { useHistory } from "react-router-dom";

export const useCreateAccount = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const history = useHistory();
  const closeCreate = () => {
    history.push("/");
    setOpen(false);
  };

  const validForm = () => {
    let valid = false;
    if (name && email && password && confirmPassword) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      password != confirmPassword ||
      password.length < 6 ||
      !re.test(String(email).toLowerCase())
        ? (valid = false)
        : (valid = true);
    }

    return valid;
  };

  const createAccount = (event: any) => {
    event.preventDefault();
    setError("");

    if (validForm()) {
      fetch(`${process.env.REACT_APP_API_URL}/create_account`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            name: name,
            password: password,
          },
        }),
      })
        .then((result) => result.json())
        .then((result) => {
          if (typeof result.error !== "undefined") {
            setError(result.error);
          } else {
            location.href = "/login?account_created=true";
          }
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setError(
        "Invalid entries, please check your entries and try again. NOTE: password must at least be 6 characters."
      );
    }
  };

  return {
    open,
    error,
    email,
    password,
    confirmPassword,
    name,
    setEmail,
    setName,
    setPassword,
    setConfirmPassword,
    closeCreate,
    createAccount,
  };
};
