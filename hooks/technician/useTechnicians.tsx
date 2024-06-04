import { Technician } from '@/interfaces/technician';
import { TechnicianService } from "@/services/technician.service";

export const useTechnicians = () => {
   const fetchTechnicians = async () => {
        const technicianService = new TechnicianService('https://backend-tecnic-os.onrender.com/api');
        const technicians = await technicianService.getTechnicians();
        return technicians as Technician[];
   }
   
   return { fetchTechnicians };

}
