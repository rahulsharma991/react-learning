import { useEffect, useState } from "react"

const useUserInfo = () => {
    const [uesrInfo, setUserInfo] = useState({});

     useEffect(() => {
        fetchUserInfo();
    },[]);

   const  fetchUserInfo = async () => {
     const data = await fetch('https://api.github.com/users/rahulsharma991');
      const json = await data.json();
      setUserInfo(json);
   }
   return uesrInfo;
}
export default useUserInfo;