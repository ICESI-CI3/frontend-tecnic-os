'use client'

import { ChangeEvent, useState } from 'react';
import { useCreateAppointment } from '@/hooks/appointment/createAppointment';
import { CreateAppointment } from '@/interfaces/create-appointment';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTechnicianUser } from '@/hooks/technician/useTechnicianUser';
import { User } from '@/interfaces/user';

const Appointment = () => {
    const searchParams = useSearchParams();
    const technicianId = searchParams.get('technicianId') ?? ''; // Provide a default value of an empty string if technicianId is null
    const { getUserTechnician } = useTechnicianUser(technicianId);

    const { createAppointment } = useCreateAppointment();

    const router = useRouter();

    const [selectedDate, setSelectedDate] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleBookAppointment = async () => {
        if (!selectedDate || !description) {
            alert("¡Todos los campos deben tener un valor!");
            return;
        }

        if (technicianId && typeof technicianId === 'string') {
            const userTechnician = await getUserTechnician(); // Await the getUserTechnician() function call to get the actual User object
            const appointmentData: CreateAppointment = {
                description,
                technicianId: userTechnician.id,
                date: selectedDate,
                initTime: new Date(selectedDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) // obtener la hora en formato HH:MM
            };

            try {
                await createAppointment(appointmentData);
                router.push("/");
            } catch (e) {
                alert(e);
            }
        } else {
            alert("No se ha podido obtener el ID del técnico o del usuario.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row"></div>
                <div className="w-full md:w-1/4 bg-gray-50 p-4">
                    <h1 className="text-xl font-semibold mb-4">Agenda tu cita</h1>
                </div>
            <div className="max-w-screen-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Agendar Cita de Servicio Técnico</h2>
                <div className="mt-4">
                    <label htmlFor="appointmentDate" className="text-sm text-gray-700">
                        Selecciona Fecha y Hora:
                    </label>
                    <input
                        type="datetime-local"
                        id="appointmentDate"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="border rounded-lg p-2 w-full mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="description" className="text-sm text-gray-700">
                        Descripción:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        className="border rounded-lg p-2 w-full mt-2"
                    />
                </div>
                <div className="mt-4">
                    <button onClick={handleBookAppointment} className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                        Agendar Ahora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
