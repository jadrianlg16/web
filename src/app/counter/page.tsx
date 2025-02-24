//src/app/counter/page.tsx
'use client'

import {useState} from "react";

export default function Counter(){

const [count,setCounter] = useState(0)

const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    setCounter(count + 1);
/*     setCounter(prevCount => prevCount + 1); */

// agregar formulario para que una persona se pueda registar a la appliacion, el signup nombre, correo, contrasenia compos y botton
// validar al presionr button : todos campos al menos 1 caracter, el correro si sea un correo, al password tiene que tener letra mayuscula, ser minimo 8 letras, y un caracter especial min
// buscar como se hace en react
// la informacion del usuario se guardada en memoria (use state), usa 1 objeto y 1 sola variable
// al haber un error, popup de lo que paso alerta abajo del button
// in the topright show the persons name. in the navbar
// usar UseContext

}



    return(
        <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">{count}</h1> 
            <form onSubmit={handleSubmit}>
                <button type="submit" className="w-full bg-blue-600 text-white rounded-md px-6 py-3 hover:bg-blue-700 transition">
                    Incrementar Numero
                </button>
            </form>
        </main>
    );
}