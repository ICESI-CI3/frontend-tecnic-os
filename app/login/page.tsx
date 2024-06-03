"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/useLogin";
import Error from "next/error";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const router = useRouter();
  const onSubmit = () => {
    if (!name || !password) {
      alert("¡Todos los campos deben tener un valor!");
    } else {
      login(name, password)
        .then(() => router.push("/profile"))
        .catch((e: Error) => alert(e));
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit flex flex-col gap-2">
        <p className="text-2xl font-bold">Inicio de sesión</p>
        <label>Nombre de usuario</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="username"
        />
        <label className="mt-4">Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="password"
          type="password"
        />
        <button
          onClick={onSubmit}
          className="h-10 w-80 mt-8 bg-black rounded text-white"
        >
          Iniciar
        </button>
        {/* Agregar enlace a la página de registro */}
        <p className="mt-4">¿No tienes una cuenta? <a href="/register" className="text-blue-500">Regístrate</a></p>
      </div>
    </div>
  );
  
}