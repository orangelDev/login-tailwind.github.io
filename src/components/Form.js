import React from "react";

export default function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-3xl text-center text-blue-800 ">Bienvenido</h1>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium text-blue-800">Usuario</label>
          <input type="text"
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-2 bg-transparent"
            placeholder="Ingrese usuario"
          />
        </div>
        <div>
          <label className="text-lg font-medium text-blue-800">Contraseña</label>
          <input type="password"
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-2 bg-transparent"
            placeholder="Ingrese clave"
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4"> 
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Acceder</button>
        </div>
      </div>
    </div>
  );
}