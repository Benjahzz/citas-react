import React, { useEffect, useState } from "react";
import Error from "./Error";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ setPacientes, paciente, pacientes, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length >0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !propietario || !email || !fecha || !sintomas) {
      setError(true);
      return;
    }
    setError(false);
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((element)=> element.id === paciente.id ? objetoPaciente : element )
      setPacientes(pacientesActualizados);
      setPaciente({})
      
    }else{
      objetoPaciente.id = uuidv4();
      setPacientes((result) => [...result, objetoPaciente]);
    }
    
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
    setError("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-5"
        onSubmit={handleSubmit}>
        {error && <Error>Por favor ingrese correctamente los datos</Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="mascota"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block font-bold uppercase">
            Nombre Propietario
          </label>
          <input
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="Nombre del Propietario"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block font-bold uppercase">
            Email
          </label>
          <input
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email del Propietario"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold uppercase">
            Fecha
          </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="alta"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold uppercase">
            Síntomas
          </label>
          <textarea
            name="sintomas"
            rows="5"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 min-h-[5rem]"
            placeholder="Describe los síntomas"></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-semibold cursor-pointer hover:bg-indigo-700 transition-colors ease-in "
          value={paciente?.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
