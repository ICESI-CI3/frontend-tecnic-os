import { useState, useEffect } from 'react';
import { Technician } from '@/interfaces/technician';
import { TechnicianService } from "@/services/technician.service";

export const UseTechnician = (id: string) => {
   const [technician, setTechnician] = useState<Technician | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchTechnician = async () => {
         try {
            setLoading(true);
            const technicianService = new TechnicianService('https://backend-tecnic-os.onrender.com/api');
            const technicianData = await technicianService.getTechnicianById(id);
            setTechnician(technicianData);
         } catch (err:any) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      if (id) {
         fetchTechnician();
      }
   }, [id]);

   return { technician, loading, error };
};
