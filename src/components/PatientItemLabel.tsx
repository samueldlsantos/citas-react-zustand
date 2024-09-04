type PatientItemLabelProps = {
    label: string,
    value: string
}

const PatientItemLabel = ({label, value}: PatientItemLabelProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}:{" "}
      <span className="font-normal normal-case">{value}</span>
    </p>
  )
}

export default PatientItemLabel
