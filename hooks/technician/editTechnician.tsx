import { useState } from 'react';
import { TechnicianService } from '@/services/technician.service';

export const editTechnician = () => {
    const [error, setError] = useState<string | null>(null); 

    const update = async (id: string, userData: {}) => {
        const technicianService = new TechnicianService('http://localhost:3000/api');
        const technician= await technicianService.update(id, userData);
        return technician;
    };

    return { update };
};