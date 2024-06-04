import { useState } from 'react';
import { UserService } from '@/services/user.service';

export const editUser = () => {
    const [error, setError] = useState<string | null>(null); 

    const update = async (id: string, userData: {}) => {
        const userService = new UserService('https://backend-tecnic-os.onrender.com/api');
        const user = await userService.update(id, userData);
        return user;
    };

    return { update };
};
