    import { useState } from 'react';
    import { AuthService } from '@/services/auth.service';
    import { CreateUser } from '@/interfaces/create-user';
    import { TechnicianService } from '@/services/technician.service';
    import { Technician } from '@/interfaces/technician';

    export const useRegister = () => {
        const register = async (technicianData: Technician) => {
            const technicianService = new TechnicianService('http://localhost:3000/api');
            const technician = await technicianService.register(technicianData);
            return technician;
        };

        return { register };
    };