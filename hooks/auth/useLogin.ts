import Cookies from 'js-cookie';
import { AuthService } from "@/services/auth.service";
import {User } from '@/interfaces/user';

export const UseLogin = () => {
    const login = async (email: string, password: string) => {
        const authService = new AuthService('https://backend-tecnic-os.onrender.com/api');
        const user = await authService.login(email, password);
        console.log("Se ha ejecutado useLogin: \n", user, )
        if(user) {
            if (user.accessToken){
                Cookies.set('currentUser', JSON.stringify(user));
                localStorage.setItem('token', user.accessToken);
            }
        }
        return user as User;

    }
    return {login};

}
