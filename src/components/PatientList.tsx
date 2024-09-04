import { usePatientStore } from "../store"
import PatientItem from "./PatientItem"
const PatientList = () => {
  const { patients } = usePatientStore()

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      {patients.length === 0 ? (
        <div>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
        </div>

      ):
      (
        <div>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {
            patients.map((patient) => {
              return (<PatientItem key={patient.id} patient={patient} />)
            })
          }

        </div>

      )}


    </div>
  )
}

export default PatientList
