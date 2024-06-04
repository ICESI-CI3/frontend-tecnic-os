import  axios,  {AxiosInstance} from 'axios';
import {CreateAppointment} from '@/interfaces/create-appointment';

export class AppointmentService{

    protected readonly axios: AxiosInstance;
    public constructor(url: string, jwtToken?: string) {
        this.axios = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
                Authorization: jwtToken ? `Bearer ${jwtToken}` : undefined,
            },
            timeout: 3000,
            timeoutErrorMessage: 'Request timed out'
        });
    }

    public async createAppointment(appointmentData: CreateAppointment): Promise<CreateAppointment> {
        try {
            
            const response = await this.axios.post('/appointment/create', appointmentData);
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

}