import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-black text-center md:w-2/3 md:mx-auto">Seguimiento de pacientes {' '} 
        <span className="text-indigo-700">Veterinaria</span>
      </h1>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>

      <ToastContainer />

    </div>
    </>
  )
}

export default App
