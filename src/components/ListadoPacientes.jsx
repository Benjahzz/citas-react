import React from "react";
import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-5 md:mt-0">
      {(pacientes && pacientes.length >= 1) ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Comienza agregando pacientes y {""}
            <span className="text-indigo-600 font-bold">aparecerán en este lugar</span>
          </p>
        </>)}
      {pacientes.map((paciente) => (
        <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
