import React from "react";

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const {nombre,propietario,email,fecha,sintomas,id} = paciente;

  const handleEliminar = () =>{
      const respuesta = confirm('Deseas eliminar este paciente?')
      if(respuesta){
        eliminarPaciente(id)
      }
  }
  return (
    <div className="m-5 px-5 py-10 bg-white rounded-xl shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>
      <div className="flex gap-4 mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold uppercase" onClick={()=>setPaciente(paciente)}>
          Editar
        </button>
        <button className="py-2 px-10 bg-red-400 hover:bg-red-500 text-white rounded-md font-semibold uppercase" onClick={handleEliminar}>
          Eliminar
        </button >
      </div>
    </div>
  );
};

export default Paciente;
