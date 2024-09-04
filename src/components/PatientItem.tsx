import { Patient } from "../types"
import { usePatientStore } from "../store"
import PatientItemLabel from "./PatientItemLabel"
import { toast } from "react-toastify"

type PatientItemProps = {
    patient: Patient
}

const PatientItem = ({ patient }: PatientItemProps) => {

    const { deletePatient, setActiveid } = usePatientStore();
    return (
        <div className="mx-5 my-4 bg-white shadow-md px-5 py-10 rounded-xl">
            <PatientItemLabel label={"Nombre"} value={patient.name} />
            <PatientItemLabel label={"Propietario"} value={patient.caretaker} />
            <PatientItemLabel label={"Correo"} value={patient.email} />
            <PatientItemLabel label={"Fecha alta"} value={patient.date.toString()} />
            <PatientItemLabel label={"Sintomas"} value={patient.symptoms} />

            <div className="flex justify-between mt-5">
                <button
                    className="py-2 px-5 bg-indigo-600 rounded-md uppercase font-bold text-white hover:bg-indigo-700 cursor-pointer"
                    type="button"
                    onClick={() => setActiveid(patient.id)}
                >
                    Editar
                </button>
                <button
                    className="py-2 px-5 bg-red-600 rounded-md uppercase font-bold text-white hover:bg-red-700 cursor-pointer"
                    type="button"
                    onClick={() => {
                        deletePatient(patient.id)
                        toast.error('El paciente se ha eliminado')
                    }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientItem
