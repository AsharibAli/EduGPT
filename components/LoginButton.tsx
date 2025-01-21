"use client";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import OCButton from "./OCButton";

const LoginButton: any = () => {
  const { ocAuth } = useOCAuth();

  const handleLogin = async () => {
    await ocAuth.signInWithRedirect({
      state: "opencampus",
    });
  };

  return <OCButton  onClick={handleLogin}>Connect OCID</OCButton>;
};

export default LoginButton;
