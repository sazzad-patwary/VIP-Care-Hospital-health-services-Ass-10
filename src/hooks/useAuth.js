import { useContext } from "react";
import { AuthContext } from "../Contexts/authProvider";


const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;