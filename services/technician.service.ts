import  axios,  {AxiosInstance} from 'axios';
import { Technician } from '@/interfaces/technician';

export class TechnicianService {

    

    protected readonly axios: AxiosInstance;
    public constructor(url: string) {
        this.axios = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 3000,
            timeoutErrorMessage: 'Request timed out'
        });
    }

    public async getTechnicians(): Promise<Technician[]> {
        try{
            const response = await this.axios.get(`${this.axios.defaults.baseURL}/technicians`);
            return response.data;
        }catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
            } else {
                throw error;
            }
        }
    }

    public async register(technicianData: Technician): Promise<Technician> {
        try {
            console.log(technicianData)
            const tags = technicianData.tags;
            const description= technicianData.description;
            const userId = technicianData.id;
            const minimum_fee = technicianData.minimum_fee;
            const response = await this.axios.post(`${this.axios.defaults.baseURL}/technicians/register`, 
            {
                tags,
                description,
                userId,
                minimum_fee
            }
            );
            return response.data;
        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
            } else {
                throw error;
            }
        }
    }

    public async getTechnicianById(id: string): Promise<Technician> {
        try{
            const response = await this.axios.get(`${this.axios.defaults.baseURL}/technicians/${id}`);
            return response.data;
        }catch (error: any){
            if (error.response) {
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
            } else {
                throw error;
            }
        }
    }

}