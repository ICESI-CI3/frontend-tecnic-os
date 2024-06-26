import { Technician } from '@/interfaces/technician';
import { User } from '@/interfaces/user';
import { TechnicianService } from "@/services/technician.service";
import { UserService } from '@/services/user.service';

export const UseUsers = () => {
   const fetchUsers = async () => {
        const userService = new UserService('https://backend-tecnic-os.onrender.com/api');
        //await new Promise(resolve => setTimeout(resolve, 4000));
        const users = await userService.getUsers();
        return users as User[];
   }
   

   return { fetchUsers };

}
