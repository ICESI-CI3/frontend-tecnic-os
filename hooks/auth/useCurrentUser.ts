import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User } from "@/interfaces/user";

export const useCurrentUser = () => {
    const [user, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUser = () => {
            const user = Cookies.get('currentUser');
            if (user) {
                setCurrentUser(JSON.parse(user));
            }
            setLoading(false);
        };

        fetchUser();
    }, []);

    return { user, loading };
}
