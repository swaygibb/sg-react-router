export const useApp = () => {
  const userLoggedIn = () => {
    let auth_token = localStorage.getItem("auth_token");
    return (
      typeof auth_token !== "undefined" &&
      auth_token !== null &&
      auth_token.length > 0
    );
  };

  return { userLoggedIn };
};
