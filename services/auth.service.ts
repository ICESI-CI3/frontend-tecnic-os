import  axios,  {AxiosInstance} from 'axios';
import { User } from '@/interfaces/user';
import { CreateUser } from '@/interfaces/create-user';

export class AuthService {
    protected readonly axios: AxiosInstance;
    public constructor(url: string) {
        this.axios = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 3000,
            timeoutErrorMessage: 'Request timed out'
        });
    }

    public async login(id: string, password: string): Promise<any> {

        try{
            const response = await this.axios.post(`${this.axios.defaults.baseURL}/auth/login`, {id, password});
            return {
                username: response.data.user.name,
                id: response.data.user.id,
                email: response.data.user.email,
                rating: response.data.user.rating,
                role: response.data.user.role,
                accessToken: response.data.token,
                expiredAt: Date.now() + 3600
            };
        }catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
            } else {
                throw error;
            }
        }

    }


    public async register(userData: CreateUser): Promise<User> {
        try {
            console.log(userData.id)
            const id = userData.id;
            const name = userData.name;
            const email = userData.email;
            const password = userData.password;
            const role = userData.role;
            const response = await this.axios.post(`${this.axios.defaults.baseURL}/auth/register`, 
            {
                id,
                name,
                email,
                password,
                role
            }
            );
            return response.data;
        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
            } else {
                throw error;
            }
        }
    }

    getMe = (userId: string) => {
        return {
            username: 'leonardo',
        }
    }
}