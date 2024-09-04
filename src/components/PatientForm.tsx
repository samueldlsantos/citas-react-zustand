import { useForm } from "react-hook-form"
import Error from "./Error";
import { PatientDraft } from "../types";
//Se importa nuestro hook personalizado
import { usePatientStore } from "../store";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PatientForm() {

    //hook personalizado con zustand
    const { addPatient, activeId, patients } = usePatientStore()

    //Register: registra un input o select y aplica reglas de validacion a los inputs
    //useForm<PatientDraft> Necesita referencia al tipo de dato que se va a manejar en el formulario.
    const { register, handleSubmit,/*resetField,*/ reset, setValue, formState: { errors } } = useForm<PatientDraft>();


    //La funcion que se le pasa al handleSubmit en automatico regresa el objeto que se ingreso al formulario
    //handleSumit(registerPatient)
    const registerPatient = (data: PatientDraft) => {
        addPatient(data)
        // resetField('name')
        // resetField('caretaker')
        // resetField('email')
        // resetField('date')
        // resetField('symptoms')
        reset()
        if (activeId) {
            toast.success("Se actualizo el paciente")
        } else {
            toast.success('Paciente agregado correctamente')
        }
    }

    useEffect(() => {
        if (activeId) {
            const patient = patients.find(patient => patient.id === activeId)
            if (patient) {
                setValue('name', patient?.name)
                setValue('caretaker', patient?.caretaker)
                setValue('email', patient.email)
                setValue('date', patient.date)
                setValue('symptoms', patient.symptoms)
            }
        }
    }, [activeId])

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register('name', {
                            required: 'El nombre del paciente es obligatorio'
                        })}
                    />
                    {errors.name &&

                        <Error>{errors.name.message}</Error>
                    }

                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register('caretaker', {
                            required: 'El propietario es obligatorio'
                        })}
                    />
                    {errors.caretaker &&

                        <Error>{errors.caretaker.message}</Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Correo no válido'
                            }
                        })}
                    />
                    {errors.email &&

                        <Error>{errors.email.message}</Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register('date', {
                            required: 'La fecha es obligatoria'
                        })}
                    />
                    {errors.date &&

                        <Error>{errors.date.message}</Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'Los sintomas son obligatorios'
                        })}
                    ></textarea>
                    {errors.symptoms &&

                        <Error>{errors.symptoms.message}</Error>
                    }
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}