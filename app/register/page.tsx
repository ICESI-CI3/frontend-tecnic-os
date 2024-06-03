"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRegister } from "@/hooks/auth/useRegister";
import Error from "next/error";

export default function Register() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useRegister();
  const router = useRouter();

  const onSubmit = () => {
    if (!id || !name || !email || !password) {
      alert("¡Todos los campos deben tener un valor!");
    } else {
      const newUser = {
        id,
        email,
        password,
        name,
        role: ["user"] 
      };
      
      register(newUser)
        .then(() => router.push("/login")) // Redirigir al usuario a la página de inicio de sesión después del registro
        .catch((e: Error) => alert(e));
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit flex flex-col gap-2">
        <p className="text-2xl font-bold">Crea tu cuenta</p>
        <label>Número de identificación</label>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="Número de identificación"
        />
        <label>Nombre de usuario</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="Nombre completo"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="Correo electrónico"
          type="email"
        />
        <label>Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="Contraseña"
          type="password"
        />
        <button
          onClick={onSubmit}
          className="h-10 w-80 mt-8 bg-black rounded text-white"
        >
          Regístrate
        </button>
        {/* Agregar enlace a la página de inicio de sesión */}
        <p className="mt-4">¿Ya tienes una cuenta? <a href="/login" className="text-blue-500">Inicia Sesión</a></p>
      </div>
    </div>
  );
}
