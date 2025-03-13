// src/app/page.tsx

'use client'

import {useState} from "react";

export default function Counter(){

const [count,setCounter] = useState(0)

const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    setCounter(count + 1);


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


// crear component y pagina de buscar
// buscar nombre de cualquier ciudad
// quiero que salga un modal donde me diga la ciudad no existe intenta de nuevo y un buoton  de ok
// cuando se busca y si se encuentra entonces: 
// se enceuntra la tarjeta de la ciudad en donde en cada tarjeta aparece el nombre de la ciudad, la temperatura y una descripcion
// por cada ciudad se van sumando tarjetas y colocando hasta que haga muchas y luego se hace un carrusel para poder excrollear por las tarjetas


// los datos saldran por un hook, nosotros lo crearemos que lea de una api
//