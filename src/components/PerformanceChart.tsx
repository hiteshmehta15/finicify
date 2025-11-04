import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface PerformanceChartProps {
  data: any[]
  fundNames: string[]
  title: string
}

const PerformanceChart = ({ data, fundNames, title }: PerformanceChartProps) => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

  return (
    <div className="bg-card-bg rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
          Filtrele
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {fundNames.map((name, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            />
            <span className="text-sm text-gray-300">{name}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F1F5F9',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value1"
              stroke={colors[0]}
              strokeWidth={2}
              dot={{ fill: colors[0], r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke={colors[1]}
              strokeWidth={2}
              dot={{ fill: colors[1], r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="value3"
              stroke={colors[2]}
              strokeWidth={2}
              dot={{ fill: colors[2], r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="value4"
              stroke={colors[3]}
              strokeWidth={2}
              dot={{ fill: colors[3], r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="value5"
              stroke={colors[4]}
              strokeWidth={2}
              dot={{ fill: colors[4], r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PerformanceChart
