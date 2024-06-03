import Cookies from 'js-cookie';
import { AuthService } from "@/services/auth.service";
import {User } from '@/interfaces/user';

export const useLogin = () => {
    const login = async (email: string, password: string) => {
        const authService = new AuthService('http://localhost:3000/api');
        const user = await authService.login(email, password);
        console.log("Se ha ejecutado useLogin: \n", user, )
        if(user) {
            Cookies.set('currentUser', JSON.stringify(user));
        }
        return user as User;

    }
    return {login};

}