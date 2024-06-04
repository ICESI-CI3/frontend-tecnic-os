"use client"
import { UseTechnicians } from '@/hooks/technician/useTechnicians';
import { EditTechnician } from '@/hooks/technician/editTechnician';
import React, { useState, useEffect } from 'react';
import { Technician } from '@/interfaces/technician';
import { UseTechnicianUser } from '@/hooks/technician/useTechnicianUser';

const TechniciansPage: React.FC = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [editingTechnicianId, setEditingTechnicianId] = useState<string | null>(null);
  const [editedTechnicianData, setEditedTechnicianData] = useState<Record<string, Partial<Technician>>>({});
  const { update } = editTechnician();
  const { getUserTechnician } = useTechnicianUser();

  useEffect(() => {
    let techniciansArray: any[] = []
    const fetchTechniciansData = async () => {
      const { fetchTechnicians } = useTechnicians();
      const technicians = await fetchTechnicians();
      const technicianPromises = technicians.map(async (technician) => {
        const user = await getUserTechnician(technician.id.toString());
        delete technician['id'];
        return {...technician, userId: user.id}  // Combine technician and user data
    })
    const finalTechnicians = await Promise.all(technicianPromises);

    setTechnicians(finalTechnicians);
    console.log("FINALESSSSSSSSSSSSSSSSSSSSSSSSSSSSS", finalTechnicians);
    };
    fetchTechniciansData();
  }, []);

  const handleEditTechnician = (technicianId: string) => {
    const technicianToEdit = technicians.find(technician => technician.userId === technicianId);
    if (technicianToEdit) {
      setEditingTechnicianId(technicianId);
      setEditedTechnicianData(prevData => ({
        ...prevData,
        [technicianId]: { ...technicianToEdit }
      }));
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>, technicianId: string) => {
    const { name, value } = e.target;
    setEditedTechnicianData(prevData => ({
      ...prevData,
      [technicianId]: {
        ...prevData[technicianId],
        [name]: value
      }
    }));
  };

  const confirmEditTechnician = async (technicianId: string) => {
    const editedData = editedTechnicianData[technicianId];
    if (editedData) {
      try {
        console.log("DATAAAA", editedData);
        const updatedTechnician = await update(editedData.userId?editedData.userId:"", editedData);
        setTechnicians(prevTechnicians =>
          prevTechnicians.map(technician => (technician.userId === updatedTechnician.userId ? updatedTechnician : technician))
        );
        alert('Technician edited successfully!');
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
    setEditingTechnicianId(null);
    setEditedTechnicianData(prevData => {
      const newData = { ...prevData };
      delete newData[technicianId];
      return newData;
    });
  };

  const cancelEditTechnician = (technicianId: string) => {
    setEditingTechnicianId(null);
    setEditedTechnicianData(prevData => {
      const newData = { ...prevData };
      delete newData[technicianId];
      return newData;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Tags</th>
              <th className="px-4 py-2">Minimum Fee</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {technicians.map(technician => (
              <tr key={technician.userId}>
                <td className="border px-4 py-2">{technician.userId}</td>
                <td className="border px-4 py-2">
                  {editingTechnicianId === technician.userId ? (
                    <input
                      type="text"
                      name="description"
                      value={editedTechnicianData[technician.userId]?.description || ''}
                      onChange={(e) => handleFieldChange(e, technician.userId)}
                      className="w-full"
                    />
                  ) : (
                    technician.description
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingTechnicianId === technician.userId ? (
                    <input
                      type="text"
                      name="tags"
                      value={editedTechnicianData[technician.userId]?.tags || ''}
                      onChange={(e) => handleFieldChange(e, technician.userId)}
                      className="w-full"
                    />
                  ) : (
                    technician.tags
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingTechnicianId === technician.userId ? (
                    <input
                      type="number"
                      name="minimum_fee"
                      value={editedTechnicianData[technician.userId]?.minimum_fee || ''}
                      onChange={(e) => handleFieldChange(e, technician.userId)}
                      className="w-full"
                    />
                  ) : (
                    technician.minimum_fee
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingTechnicianId === technician.userId ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => confirmEditTechnician(technician.userId)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-sm"
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={() => cancelEditTechnician(technician.userId)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEditTechnician(technician.userId)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm"
                    >
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechniciansPage;
