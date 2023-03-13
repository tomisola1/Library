import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      style={{
        color: "white",
        backgroundColor: "#f7a027",
        padding: "10px",
        borderRadius: "30px",
        marginTop: "30px",
        width: "50%",
        fontWeight: "bold",
      }}
      onClick={() => loginWithRedirect()}
    >
      LOG IN
    </button>
  );
};

export default LoginButton;
