import { ReactNode } from "react"

type ErrorProps = {
    children: ReactNode
}
const Error = ({children}: ErrorProps) => {
  return (
    <div className="bg-red-600 text-white font-bold uppercase p-3 w-full text-center my-2">
      {children}
    </div>
  )
}

export default Error
