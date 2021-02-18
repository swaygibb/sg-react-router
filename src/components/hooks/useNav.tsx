export const useNav = () => {
  const userLoggedIn = () => {
    let auth_token = localStorage.getItem("auth_token");
    return (
      typeof auth_token !== "undefined" &&
      auth_token !== null &&
      auth_token.length > 0
    );
  };

  const logout = () => {
    localStorage.setItem("auth_token", "");
    localStorage.setItem("auth_role", "");
    location.href = "/";
  };

  const businessRole = () => {
    let auth_role = localStorage.getItem("auth_role");

    console.log(auth_role);

    return (
      typeof auth_role !== "undefined" &&
      auth_role !== null &&
      auth_role.length > 0 &&
      auth_role == "business"
    );
  };

  return { userLoggedIn, logout, businessRole };
};
