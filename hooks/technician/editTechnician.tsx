import { useState } from 'react';
import { TechnicianService } from '@/services/technician.service';

export const EditTechnician = () => {
    const [error, setError] = useState<string | null>(null); 

    const update = async (id: string, userData: {}) => {
        const technicianService = new TechnicianService('https://backend-tecnic-os.onrender.com/api');
        const technician= await technicianService.update(id, userData);
        return technician;
    };

    return { update };
};
