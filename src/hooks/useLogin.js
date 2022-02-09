import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const getDevice = await axios.get(
        "https://devapi.dhakai.com/api/v2/deviceuid"
      );
      const deviceUuid = getDevice.data.result.deviceUuid;

      const user = {
        auth: {
          email,
          deviceUuid,
        },
        password,
      };

      const res = await axios.post(
        "https://devapi.dhakai.com/api/v2/login-buyer",
        user
      );

      if (res.data.statusCode === 200) {
        const userToken = { email, token: res.data.result };
        //   dispatch login action
        dispatch({ type: "LOGIN", payload: userToken });
      } else if (res.data.statusCode === 400) {
        setError("email or password is wrong");
        setIsPending(false);
      }

      // update state
      // if (!isCancelled) {
      //   setIsPending(false);
      //   setError(null);
      // }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isPending };
};
