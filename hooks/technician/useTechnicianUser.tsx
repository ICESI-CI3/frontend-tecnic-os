import { User } from '@/interfaces/user';
import { TechnicianService } from "@/services/technician.service";

export const useTechnicianUser = (userId: string) => {
    const getUserTechnician = async () => {
          const technicianService = new TechnicianService('http://localhost:3000/api');
          const userTechnician = await technicianService.getUserTechnician(userId);
          console.log("Client side ---> ", process.env.API_URL)
          return userTechnician as User;
    }
    
    return { getUserTechnician };

}