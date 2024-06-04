import { useState } from 'react';
import { AppointmentService } from '@/services/appointment.service';
import { CreateAppointment } from '@/interfaces/create-appointment';
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";


export const UseCreateAppointment = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('useLogout debe ser utilizado dentro de un UserProvider');
    }

    const {currentUser} = userContext;

    const createAppointment = async (appointmentData: CreateAppointment) => {
        console.log("Client side ", currentUser?.accessToken)
        const appointmentService = new AppointmentService("https://backend-tecnic-os.onrender.com/api", currentUser?.accessToken);
        const user = await appointmentService.createAppointment(appointmentData);
        return user;
    };

    return { createAppointment };
};
