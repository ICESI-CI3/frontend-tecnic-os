"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegister } from '@/hooks/technician/registerTechnician';

const RegisterTechnician = () => {
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [minimumFee, setMinimumFee] = useState(0);
  const router = useRouter();
  const { register } = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor

    if (!tags || !description || !userId || !minimumFee) {
        alert("¡Todos los campos deben estar llenos");
      } else {
        const newTechnician = {
          tags,
          description,
          userId,
          minimum_fee: minimumFee 
        };
        
        register(newTechnician)
          .then(() => alert(`Registro exitoso!`)) // Redirigir al usuario a la página de inicio de sesión después del registro
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
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
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
