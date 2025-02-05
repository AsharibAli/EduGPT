"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import { Loader } from "lucide-react";

const RedirectPage = () => {
  const router = useRouter();
  const { authState, ocAuth } = useOCAuth();

  const loginSuccess = () => {
    router.push("/"); // Redirect to user or any other page
  };

  const loginError = () => {
    router.push("/error"); // Redirect to login page or show error message
  };

  useEffect(() => {
    const handleAuth = async () => {
      try {
        await ocAuth.handleLoginRedirect();
        loginSuccess();
      } catch (error) {
        loginError();
      }
    };

    handleAuth();
  }, [ocAuth]);

  if (authState.error) {
    return <div>Error Logging in: {authState.error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Loader size={48} />
      <p className="text-black mt-2">Loading...</p>
    </div>
  );
};

export default RedirectPage;
