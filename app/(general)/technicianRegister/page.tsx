"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { UseRegister } from '@/hooks/technician/registerTechnician';
import { UseTechnicianUser } from '@/hooks/technician/useTechnicianUser';
import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';

const RegisterTechnician = () => {
  const searchParams = useSearchParams();
  const capturedUserId:string = searchParams.get('id') || '';
  const [userId, setUserId] = useState(capturedUserId); // Aquí deberías obtener el 'id' del usuario logueado [1
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [minimumFee, setMinimumFee] = useState(0);
  const router = useRouter();
  const { register } = useRegister();

  // import de hook para obtener usuario a partir de técnico
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <div>error</div>
  }

  const { login: setCurrentUser, currentUser } = userContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor

    if (!tags || !description || !userId || !minimumFee) {
        alert("¡Todos los campos deben estar llenos");
      } else {
        const newTechnician = {
          id: userId, // Add the 'id' property here
          tags,
          description,
          minimum_fee: minimumFee 
        };

        register(newTechnician)
          .then(async () => {
            alert(`Registro exitoso!`);

            if (currentUser) {
              currentUser.role = ['technician'];
              setCurrentUser(currentUser);
            }
          }) // Redirigir al usuario a la página de inicio de sesión después del registro
          .catch((e: Error) => alert(e));
      }

    alert(`Registro exitoso!`);

    console.log({ tags, description, userId, minimumFee });

    // Navegar a otra página después de enviar el formulario
    router.push('/'); // Cambia '/' por la ruta deseada después del registro
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Registro de Técnicos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            defaultValue={userId}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
            readOnly
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="minimumFee" className="block text-sm font-medium text-gray-700">
            Minimum Fee
          </label>
          <input
            type="number"
            id="minimumFee"
            value={minimumFee}
            onChange={(e) => setMinimumFee(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Registrarme como Técnico
        </button>
      </form>
    </div>
  );
};

export default RegisterTechnician;
