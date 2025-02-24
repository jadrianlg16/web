'use client';

import { useState } from "react";
import { useUser } from "../Components/UserContext";

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;

export default function Signup() {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all fields have at least one character
    if (!formData.name || !formData.email || !formData.password) {
      setError("Todos los campos son requeridos.");
      return;
    }

    // Validate email format
    if (!emailRegex.test(formData.email)) {
      setError("El correo no es válido.");
      return;
    }

    // Validate password: at least one uppercase letter, minimum 8 characters, and one special character
    if (!passwordRegex.test(formData.password)) {
      setError("La contraseña debe tener al menos 8 letras, una letra mayúscula y un caracter especial.");
      return;
    }

    // If validations pass, clear error and set the user in context
    setError(null);
    setUser({
      name: formData.name,
      email: formData.email,
    });

    // Optionally, show a success message or redirect the user
    alert("Registro exitoso!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)]">
      <h1 className="text-3xl font-bold mb-6">Signup</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        <div>
          <label className="block mb-1">Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        <div>
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-6 py-3 hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
        {error && (
          <div className="text-red-600 mt-2">
            {error}
          </div>
        )}
      </form>
    </main>
  );
}
