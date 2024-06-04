import Cookies from "js-cookie";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export const useLogout = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('useLogout debe ser utilizado dentro de un UserProvider');
    }

    const { logout } = userContext;

    console.log("se supone que funciona")

    const handleLogout = () => {
        Cookies.remove('currentUser');
        logout();
    };

    return { handleLogout };
};
