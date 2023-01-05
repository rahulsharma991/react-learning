import { useContext } from "react";
import NavigationContext from "../context/Navigation";

const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
