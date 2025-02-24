//src/app/page2/page.tsx

'use client'

import Rectangle from "../Components/Rectangle";
import {useState} from "react";


export default function page2() {
const[Rcolor, setColor] = useState('green')

/* const handleSubmit = (e: React.FormEvent) => {

  e.preventDefault();
  setColor('red');


} */

  return (
    <div className="grid grid-flow-col grid-col-8 gap-4">
        <div className="col-span-8 bg-red-00 h-20 w-full">

        </div>
        <div className="col-span-2 col-start-4 row-start-3 ">
        <div><Rectangle color ={Rcolor} /></div>

        </div>
        <div className="col-span-1 col-start-4 row-start-5">
        
            <button onClick={() => setColor('red')} className="w-full bg-red-600 text-white rounded-md px-6 py-3 hover:bg-gray-700 transition">
                Rojo
            </button>
          
        </div>  
        <div className="col-span-1 col-start-5 row-start-5">
        
          <button onClick={() => setColor('blue')} className="w-full bg-blue-600 text-white rounded-md px-6 py-3 hover:bg-gray-700 transition">
              Azul
          </button>
          
        </div>  
      <div className="col-span-1 col-start-4 row-start-6">
        <button 
          onClick={() => setColor('green')}
          className="w-full bg-green-600 text-white rounded-md px-6 py-3 hover:bg-gray-700 transition"
        >
          Verde
        </button>
      </div>
        <div className="col-span-1 col-start-5 row-start-6">
          

            <button onClick={() => setColor('yellow')} className="w-full bg-yellow-600 text-white rounded-md px-6 py-3 hover:bg-gray-700 transition">
                Amarrilo
            </button>
          
        </div>  






      </div>    
  );
}
