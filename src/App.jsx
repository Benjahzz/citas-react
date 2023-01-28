import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente,setPaciente] = useState({})
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])
  const eliminarPaciente = (id) =>{
    if(id){
      const pacientesActualizados = pacientes.filter((pacienteElement) => pacienteElement.id !== id)
      setPacientes(pacientesActualizados);
    }
  }
  return (
    <div className="container mx-auto">
      <Header />

      <div className="mt-12 md:flex">

        <Formulario setPacientes={setPacientes} paciente={paciente} pacientes={pacientes} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>

      </div>
    </div>
  );
}

export default App;
