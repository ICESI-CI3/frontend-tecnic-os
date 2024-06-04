"use client"
import { useUsers } from '@/hooks/users/useUsers';
import { editUser } from '@/hooks/users/editUser';
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  deletedAt?: string;
  rates_count: number;
  rating: number;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedUserData, setEditedUserData] = useState<User | null>(null);
  const { update } = editUser();

  useEffect(() => {
    const fetchUsersData = async () => {
      const { fetchUsers } = useUsers();
      const users = await fetchUsers();
      setUsers(users);
    };

    fetchUsersData();
  }, []);

  const handleEditUser = (userId: string) => {
    const userToEdit = users.find(user => user.id === userId);
    if (userToEdit) {
      setEditingUserId(userId);
      setEditedUserData({ ...userToEdit });
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editedUserData) {
      setEditedUserData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const confirmEditUser = async (userId: string) => {
    if (editedUserData) {
      try {
        const inter = editedUserData
        delete inter["deletedAt"];
        delete inter["rates_count"];
        console.log(inter)
        const updatedUser = await update(userId, inter);
        setUsers(prevUsers => prevUsers.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        alert('Usuario editado con éxito!');
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
    setEditingUserId(null);
    setEditedUserData(null);
  };

  const cancelEditUser = () => {
    setEditingUserId(null);
    setEditedUserData(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Deleted At</th>
              <th className="px-4 py-2">Rates Count</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">
                  {editingUserId === user.id ? (
                    <input type="text" name="name" value={editedUserData?.name || ''} onChange={handleFieldChange} className="w-full" />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingUserId === user.id ? (
                    <input type="text" name="email" value={editedUserData?.email || ''} onChange={handleFieldChange} className="w-full" />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="border px-4 py-2">
                {user.password}
                </td>
                <td className="border px-4 py-2">
                  {editingUserId === user.id ? (
                    <input type="text" name="role" value={editedUserData?.role || ''} onChange={handleFieldChange} className="w-full" />
                  ) : (
                    user.role
                  )}
                </td>
                <td className="border px-4 py-2">
                  {user.deletedAt}
                </td>
                <td className="border px-4 py-2">{user.deletedAt ? user.deletedAt : '-'}</td>
                <td className="border px-4 py-2">
                {user.rates_count}
                </td>
                <td className="border px-4 py-2">
                  {editingUserId === user.id ? (
                    <input type="text" name="rating" value={editedUserData?.rating || ''} onChange={handleFieldChange} className="w-full" />
                  ) : (
                    user.rating
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingUserId === user.id ? (
                    <div className="flex space-x-2">
                      <button onClick={() => confirmEditUser(user.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-sm">Confirmar</button>
                      <button onClick={cancelEditUser} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm">Cancelar</button>
                    </div>
                  ) : (
                    <button onClick={() => handleEditUser(user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm">Editar</button>
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

export default UsersPage;
