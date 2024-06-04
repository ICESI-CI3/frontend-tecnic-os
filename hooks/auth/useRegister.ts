import { useState } from 'react';
import { AuthService } from '@/services/auth.service';
import { CreateUser } from '@/interfaces/create-user';

export const useRegister = () => {
    const [error, setError] = useState<string | null>(null); // Definir explícitamente el tipo de 'error'

    const register = async (userData: CreateUser) => {
        const authService = new AuthService('https://backend-tecnic-os.onrender.com/api');
        const user = await authService.register(userData);
        return user;
    };

    return { register };
};
