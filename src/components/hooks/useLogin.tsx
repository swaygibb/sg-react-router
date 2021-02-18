import * as React from "react";
import { useHistory } from "react-router-dom";

export const useLogin = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [accountCreated, setAccountCreated] = React.useState<boolean>(false);

  React.useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let accountCreated = urlParams.get("account_created");
    typeof accountCreated !== "undefined" && accountCreated == "true"
      ? setAccountCreated(true)
      : setAccountCreated(false);
  }, []);

  const history = useHistory();
  const closeLogin = () => {
    history.push("/");
    setOpen(false);
  };

  const login = (event: any) => {
    event.preventDefault();
    setError("");

    fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((result) => result.json())
      .then((result) => {
        if (typeof result.error !== "undefined") {
          setError(result.error.user_authentication);
        } else {
          localStorage.setItem("auth_token", result.auth_token);
          localStorage.setItem("auth_role", result.role);
          location.href = "/";
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    open,
    email,
    password,
    setEmail,
    setPassword,
    error,
    accountCreated,
    closeLogin,
    login,
  };
};
