export type Patient = {
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    symptoms: string
}

//Hace copia de todas las propiedades de Patient omitiendo el id
export type PatientDraft = Omit<Patient, 'id'>