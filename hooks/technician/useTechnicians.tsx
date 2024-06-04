"use client"

import { useEffect, useState } from 'react';
import { Technician } from '@/interfaces/technician';
import { TechnicianService } from "@/services/technician.service";

export const useTechnicians = () => {
   const [technicians, setTechnicians] = useState<Technician[]>([]);

   useEffect(() => {
      const fetchTechnicians = async () => {
         try {
            const technicianService = new TechnicianService('https://backend-tecnic-os.onrender.com/api');
            const fetchedTechnicians = await technicianService.getTechnicians();
            setTechnicians(fetchedTechnicians);
         } catch (error) {
            console.error('Error fetching technicians:', error);
         }
      };

      fetchTechnicians();

      // Clean-up function
      return () => {
         // If needed, perform any clean-up actions here
      };
   }, []); // Empty dependency array to run effect only once

   return { technicians };
};
