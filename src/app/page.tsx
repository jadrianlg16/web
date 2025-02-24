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