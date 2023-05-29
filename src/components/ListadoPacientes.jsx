import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (

        <>
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra a tus {''}
              <span className="text-indigo-600 font-bold">Mascotas y Citas</span>
            </p>

          {/* no necesita el "return{}" porque no se realiza nada antes de este */}
          { pacientes.map( paciente => 
            
              <Paciente
                key = {paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              />
            
          )}
        </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando a tus mascotas y {''}
              <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
            </p>
          </>
        )}
    </div>
    
  )
}

export default ListadoPacientes