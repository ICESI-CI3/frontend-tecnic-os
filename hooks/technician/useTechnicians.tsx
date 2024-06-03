import { TechnicianService } from "@/services/technician.service";
import { Technician } from '@/interfaces/technician';

export const useTechnicians = () => {
   const fetchTechnicians = async () => {
        const technicianService = new TechnicianService('http://localhost:3000/api');
        //await new Promise(resolve => setTimeout(resolve, 4000));
        const technicians = await technicianService.getTechnicians();
        return technicians as Technician[];
   }

   return { fetchTechnicians };

}