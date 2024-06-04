import { useState } from 'react';
import { UserService } from '@/services/user.service';

export const editUser = () => {
    const [error, setError] = useState<string | null>(null); 

    const update = async (id: string, userData: {}) => {
        const userService = new UserService('http://localhost:3000/api');
        const user = await userService.update(id, userData);
        return user;
    };

    return { update };
};