import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const { logout } = useAuth0(); //To log user out

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <Icon as={FiLogOut} boxSize={25} color="#353535" />
    </button>
  );
};

export default LogoutButton;
