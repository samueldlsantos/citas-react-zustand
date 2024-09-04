
import { create } from 'zustand'
import { Patient, PatientDraft } from './types'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
    patients: Patient[],
    activeId: Patient['id'],
    addPatient: (patient: PatientDraft) => void,
    deletePatient: (id: Patient['id']) => void,
    setActiveid: (id: Patient['id']) => void
}

const createPatient = (patient: PatientDraft): Patient => {
    return {
        ...patient,
        id: uuidv4()
    }
}

//creacion de Hook para el store global de la aplicacion
export const usePatientStore = create<PatientState>()
(devtools(
    persist((set) => ({
    patients: [],
    activeId: '',
    addPatient: (patient) => {
        set((state) => (
            state.activeId ?
                {
                    patients: state.patients.map(currentPatient => currentPatient.id === state.activeId ? { ...patient, id: state.activeId } : currentPatient),
                    activeId: ''
                }
                :
                { patients: [...state.patients, createPatient(patient)] }
        )
        )
    },
    deletePatient: (id) => {
        set((state) => ({ patients: state.patients.filter((patient) => patient.id !== id) }))
    },
    setActiveid: (id) => {
        set((state) => ({ ...state, activeId: id }))
    }
}),{
    name: 'patient-storage'
})))