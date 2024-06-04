import axios, { AxiosInstance } from 'axios';
import { User } from '@/interfaces/user';
import { CreateUser } from '@/interfaces/create-user';

export class UserService {

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

    public async getUsers(): Promise<User[]> {
        
        try {
            const response = await this.axios.get('/users');
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

    public async update(id: string, userData: {}): Promise<User> {
        try {
            console.log(userData)
            const response = await this.axios.patch(`${this.axios.defaults.baseURL}/users/update/$id`, userData);
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

}
