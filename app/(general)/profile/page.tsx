"use client"
import { useLogout } from "@/hooks/auth/useLogout";
import { useRouter } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";
import { useTechnician } from "@/hooks/technician/useTechnician";
import { UserContext } from "@/context/UserContext";
import { User } from "@/interfaces/user";

function ProfileSkeleton() {

  return (
    <div className="min-h-screen bg-black-100">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="ml-4">
                <div className="h-6 bg-gray-300 animate-pulse rounded w-32 mb-2"></div>
                <div className="h-6 bg-gray-300 animate-pulse rounded w-48 mb-2"></div>
                <div className="h-6 bg-gray-300 animate-pulse rounded w-24"></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-300 animate-pulse rounded w-64 mb-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse rounded w-32"></div>
          </div>
          <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-6 bg-gray-300 animate-pulse rounded w-full mb-2"></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 animate-pulse rounded w-32 mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  
  const userContext = useContext(UserContext);

  if (!userContext) {
      throw new Error('useLogout debe ser utilizado dentro de un UserProvider');
  }

  const { logout, currentUser } = userContext;
  
  const id = currentUser?currentUser.id:""

  const router = useRouter();
  const { technician, loading: technicianLoading } = useTechnician(id);

  const handleButtonClick = () => {
    router.push('/technicianRegister'); // Replace '/register' with your desired route
  };

  return (
    <div className="min-h-screen bg-black-100">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-gray-50 p-4">
          <h2 className="text-xl font-semibold mb-4">Mi cuenta</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                Compras
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                Ventas
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                Suscripciones
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                 Bio libre
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                Facturación
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                Mi perfil
              </a>
            </li>
          </ul>
        </div>

        {false ? (
          <ProfileSkeleton />
        ) : (
          <div className="w-full md:w-3/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
                  {currentUser?.username.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{currentUser?.username}</h3>
                  <p className="text-gray-600">{currentUser?.email}</p>
                  <p className="text-blue-500">
                    {currentUser?.rating === -1 ? "No has sido calificado aún" : "Rating actual: " + currentUser?.rating}
                  </p>
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Cargando</div>}>
              {!(currentUser?.role[0] === "technician") ? (
                <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                  <p className="text-gray-600">
                    Si deseas ofrecer un servicio, haz click aquí
                  </p>
                  <button
                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={handleButtonClick}
                  >
                    Registrarme como Técnico
                  </button>
                </div>
              ) : (
                <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Técnico registrado</h2>
                  <p className="text-gray-600">
                    ¡Gracias por unirte a nuestro equipo de técnicos! Tu dedicación y experiencia son invaluables para nosotros. ¡Esperamos con entusiasmo trabajar contigo para brindar servicios excepcionales a nuestros clientes!
                    <br></br><br></br>
                  </p>
                  {!technicianLoading && technician && (
                    <>
                      <p><strong>Tags:</strong> {technician.tags}</p>
                      <p><strong>Descripción:</strong> {technician.description}</p>
                    </>
                  )}
                </div>
              )}
            </Suspense>
            <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Mi información</h4>
              <div className="mb-2"><strong>Nombre:</strong> {currentUser?.username}</div>
              <div className="mb-2"><strong>ID:</strong> {currentUser?.id}</div>
              <div className="mb-2"><strong>Correo:</strong> {currentUser?.email}</div>
              <div className="mb-2"><strong>Rating:</strong> {currentUser?.rating === -1 ? "Sin calificar aún" : currentUser?.rating}</div>
              <div className="mb-2"><strong>Rol:</strong> {currentUser?.role.join(", ") === "user" ? "Cliente" : currentUser?.role.join(", ") === "technician" ? "Técnico" : "Administrador"}</div>
            </div>
            <button
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Salir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
