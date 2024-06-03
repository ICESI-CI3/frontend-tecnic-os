"use client"
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogout";

export default function Profile() {
  const { user: currentUser } = useCurrentUser();
  const { logout } = useLogout();
  const router = useRouter();

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

        <div className="w-full md:w-3/4 p-4">
          
          <div className="bg-white p-6 rounded-lg shadow-md">
          { currentUser && (
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
            )}
          </div>
          
          { currentUser && !(currentUser?.role[0] === "technician") ? (
          <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
            <p className="text-gray-600">
              Si deseas ofrecer un servicio, haz click aquí
            </p>
            <button
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Registrarme como Técnico
            </button>
          </div>
          ):( //If the user is already a technician
          <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Técnico registrado</h2>
            <p className="text-gray-600">
            ¡Gracias por unirte a nuestro equipo de técnicos! Tu dedicación y experiencia son invaluables para nosotros. ¡Esperamos con entusiasmo trabajar contigo para brindar servicios excepcionales a nuestros clientes!
            </p>
          </div>
          )
          }
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
      </div>
    </div>
  );
}
