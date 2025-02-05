import { useState, useEffect } from "react";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types";

const useUserInfo = () => {
  const { authState } = useOCAuth();
  const [userInfo, setUserInfo] = useState<DecodedToken | null>(null);

  useEffect(() => {
    if (authState?.idToken) {
      const decoded = jwtDecode<DecodedToken>(authState.idToken);
      setUserInfo(decoded);
    }
  }, [authState?.idToken]);

  return { userInfo };
};

export default useUserInfo;
