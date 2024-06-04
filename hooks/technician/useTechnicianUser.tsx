import { User } from '@/interfaces/user';
import { TechnicianService } from "@/services/technician.service";

export const useTechnicianUser = (userId: string) => {
    const getUserTechnician = async (userId: string) => {
          const technicianService = new TechnicianService('https://backend-tecnic-os.onrender.com/api');
          const userTechnician = await technicianService.getUserTechnician(userId);
          console.log("Client side ---> ", process.env.API_URL)
          return userTechnician as User;
    }

    return { getUserTechnician };

}
