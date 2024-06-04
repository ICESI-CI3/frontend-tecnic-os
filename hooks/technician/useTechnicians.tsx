import { Technician } from '@/interfaces/technician';
import { TechnicianService } from "@/services/technician.service";

export const useTechnicians = () => {
   const fetchTechnicians = async () => {
        const technicianService = new TechnicianService('http://localhost:3000/api');
        const technicians = await technicianService.getTechnicians();
        console.log("Client side ", technicians)
        return technicians as Technician[];
   }
   
   return { fetchTechnicians };

}