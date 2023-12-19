import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: 'Dummy login'
});
export default UserContext;