interface StatsBoxProps {
  label: string
  value: string | number
  textColor?: string
}

const StatsBox = ({ label, value, textColor = 'text-blue-400' }: StatsBoxProps) => {
  return (
    <div className="bg-dark-bg rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
    </div>
  )
}

export default StatsBox
