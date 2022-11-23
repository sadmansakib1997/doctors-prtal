import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, settoken] = useState("");
  useEffect(() => {
    if (email) {
      // fetch(` https://doctors-portal-server-three-kohl.vercel.app/jwt?email=${email}`)
      fetch(
        ` https://doctors-portal-server-three-kohl.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accestoken) {
            localStorage.setItem("accessToken", data.accestoken);
            settoken(data.accestoken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
