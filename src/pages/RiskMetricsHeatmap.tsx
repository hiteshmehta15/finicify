import { useState } from 'react'

const RiskMetricsHeatmap = () => {
  const [hoveredCell, setHoveredCell] = useState<{ fund: string; value: number; row: number; col: number } | null>(null)

  // Exact data from screenshot - 19 rows x 7 columns
  const fundNames = [
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
    'Atlas Portföy Yönetimi Fonu',
  ]

  // Heatmap data matrix with varied values for different risk levels
  const heatmapData = [
    [6.65, 6.45, 6.82, 5.93, 6.21, 6.75, 6.38],
    [5.87, 6.55, 6.12, 6.69, 5.45, 6.88, 6.02],
    [6.73, 5.98, 6.41, 6.15, 6.59, 5.76, 6.94],
    [6.28, 6.77, 5.82, 6.51, 6.08, 6.33, 5.69],
    [5.91, 6.19, 6.84, 5.58, 6.71, 6.46, 6.25],
    [6.52, 5.73, 6.36, 6.91, 6.04, 5.85, 6.67],
    [6.18, 6.63, 5.79, 6.29, 6.48, 6.11, 5.94],
    [6.81, 6.07, 6.54, 5.71, 6.39, 6.76, 6.22],
    [5.65, 6.42, 6.13, 6.58, 5.88, 6.31, 6.69],
    [6.49, 5.96, 6.72, 6.24, 6.56, 5.82, 6.15],
    [6.34, 6.61, 5.74, 6.47, 6.09, 6.85, 5.93],
    [5.78, 6.26, 6.53, 5.67, 6.78, 6.19, 6.41],
    [6.66, 5.89, 6.32, 6.74, 5.95, 6.28, 6.51],
    [6.14, 6.57, 5.83, 6.21, 6.44, 5.76, 6.62],
    [5.92, 6.38, 6.68, 6.05, 5.71, 6.49, 6.17],
    [6.55, 6.12, 5.86, 6.73, 6.27, 6.03, 6.45],
    [6.23, 5.97, 6.59, 5.69, 6.81, 6.36, 5.88],
    [6.47, 6.71, 6.08, 6.52, 5.79, 6.14, 6.63],
    [5.84, 6.29, 6.46, 6.18, 6.65, 5.91, 6.37],
  ]

  // More decent/muted color palette - softer blues
  const getColor = (value: number) => {
    if (value >= 6.8) return '#1e40af' // Darker blue
    if (value >= 6.6) return '#2563eb' // Medium-dark blue  
    if (value >= 6.4) return '#3b82f6' // Medium blue
    if (value >= 6.2) return '#60a5fa' // Medium-light blue
    if (value >= 6.0) return '#93c5fd' // Light blue
    if (value >= 5.8) return '#bfdbfe' // Very light blue
    if (value >= 5.6) return '#dbeafe' // Pale blue
    return '#eff6ff' // Lightest blue
  }

  // Determine text color based on background brightness
  const getTextColor = (value: number) => {
    // For lighter backgrounds (lower values), use dark text
    if (value < 6.0) return '#1e293b' // Dark gray/black for light backgrounds
    return '#ffffff' // White for darker backgrounds
  }

  return (
    <div className="min-h-screen bg-[#0B1527] text-white p-6 relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Yatırım Fonu Karşılaştırmalı Risk Analizi</h1>
        
        {/* Tab Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="px-6 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors text-sm font-medium">
            Risk Metrikleri
          </button>
          <button className="px-6 py-2 bg-[#1a2942] text-gray-300 rounded-lg hover:bg-[#243654] transition-colors text-sm">
            Korelasyon Analizi
          </button>
          <button className="px-6 py-2 bg-[#1a2942] text-gray-300 rounded-lg hover:bg-[#243654] transition-colors text-sm">
            Performans Attribution
          </button>
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="bg-[#1E293B] rounded-lg p-6 shadow-[0_0_25px_rgba(14,165,233,0.12)]">
        <h2 className="text-lg font-semibold mb-6">Risk Metrikleri Karşılaştırması</h2>

        {/* Heatmap Container with Color Scale on Right */}
        <div className="flex gap-4">
          {/* Heatmap Table */}
          <div className="flex-1 bg-[#0f1c2e] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-3 text-gray-400 font-normal text-xs bg-[#1a2942]">
                      Atlas Portföy Yönetimi Fonu
                    </th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                    <th className="text-center py-2 px-3 text-white font-normal text-xs bg-[#1a2942]">6.65</th>
                  </tr>
                </thead>
                <tbody>
                  {heatmapData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="py-2 px-3 text-white text-xs border-r border-gray-700 bg-[#1a2942]">
                        {fundNames[rowIndex]}
                      </td>
                      {row.map((value, colIndex) => (
                        <td
                          key={colIndex}
                          className="py-2 px-3 text-center text-xs font-medium cursor-pointer relative"
                          style={{ 
                            backgroundColor: getColor(value),
                            color: getTextColor(value)
                          }}
                          onMouseEnter={() => setHoveredCell({ fund: fundNames[rowIndex], value, row: rowIndex, col: colIndex })}
                          onMouseLeave={() => setHoveredCell(null)}
                        >
                          {value.toFixed(2)}
                          
                          {/* Tooltip */}
                          {hoveredCell?.row === rowIndex && hoveredCell?.col === colIndex && (
                            <div className="absolute z-10 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                              <p className="text-xs font-semibold">{fundNames[rowIndex]}</p>
                              <p className="text-sm">{value.toFixed(2)}</p>
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Vertical Color Scale */}
          <div className="flex flex-col items-center justify-center">
            <div className="h-80 w-8 rounded-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-[#EF4444]"></div>
              <div className="flex-1 bg-[#F97316]"></div>
              <div className="flex-1 bg-[#FACC15]"></div>
              <div className="flex-1 bg-[#84CC16]"></div>
              <div className="flex-1 bg-[#10B981]"></div>
              <div className="flex-1 bg-[#14B8A6]"></div>
              <div className="flex-1 bg-[#0EA5E9]"></div>
              <div className="flex-1 bg-[#3B82F6]"></div>
            </div>
            <div className="mt-2 text-xs text-gray-400 text-center">
              <div>10</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RiskMetricsHeatmap
