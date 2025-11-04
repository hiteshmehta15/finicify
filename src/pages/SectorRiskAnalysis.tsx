import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const SectorRiskAnalysis = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Exact data from screenshot
  const sectorData = [
    { label: 'Çok Yüksek', value: 49.3, color: '#EF4444', displayPercent: '%49,3' },
    { label: 'En Düşük', value: 3, color: '#10B981', displayPercent: '%3' },
    { label: 'Düşük', value: 8, color: '#84CC16', displayPercent: '%8' },
    { label: 'Orta', value: 14, color: '#F59E0B', displayPercent: '%14' },
    { label: 'Yüksek', value: 12.53, color: '#0EA5E9', displayPercent: '%12,53' },
  ]

  const fundsData = [
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
    { fund: 'Atlas Portföy Yönetimi Fonu', company: 'Deniz Portföy Yönetimi A.Ş.', category: 'Borçlanma Araçları', oneYear: '10.0333', threeYear: '22.53', risk: 'Çok Düşük' },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Çok Düşük': return 'bg-green-500'
      case 'Düşük': return 'bg-lime-500'
      case 'Orta': return 'bg-yellow-500'
      case 'Yüksek': return 'bg-orange-500'
      case 'Çok Yüksek': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1527] text-white p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Sektör Risk Analizi</h1>

      <div className="grid grid-cols-1 gap-6">
        {/* Top Section: Pie Chart and Stats */}
        <div className="grid grid-cols-2 gap-6">
          {/* Pie Chart Section */}
          <div className="bg-[#1E293B] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sektör Fonları Risk Analizi</h2>
              <div className="flex gap-2">
                <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3" />
                  </svg>
                </button>
                <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button className="text-blue-400 text-sm hover:text-blue-300">Filtrele</button>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend Grid with Glowing Effect */}
            <div className="grid grid-cols-5 gap-3 mt-6">
              {sectorData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative rounded-xl p-4 overflow-hidden backdrop-blur-sm"
                  style={{ 
                    backgroundColor: item.color + '15',
                    boxShadow: `0 0 20px ${item.color}40, inset 0 0 20px ${item.color}20`
                  }}
                >
                  {/* Glowing gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30 0%, transparent 60%)`
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-xs text-gray-400 mb-2">{item.label}</p>
                    <p className="text-2xl font-bold text-white drop-shadow-lg">{item.displayPercent}</p>
                  </div>
                  
                  {/* Bottom glow accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 blur-sm"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section Placeholder for Second Chart */}
          <div className="bg-[#1E293B] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Additional Analytics</h2>
            </div>
            <div className="h-96 flex items-center justify-center text-gray-500">
              Chart placeholder
            </div>
          </div>
        </div>

        {/* Bottom Table Section */}
        <div className="bg-[#1E293B] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Sektörde En İyi Performans Gösteren Fonlar</h2>
            <div className="flex gap-2">
              <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="text-blue-400 text-sm hover:text-blue-300">Sırala</button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Fon adı, kurucu, kategori ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f1c2e] text-white px-4 py-2.5 pr-10 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
            />
            <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Table */}
          <div className="bg-[#0f1c2e] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-normal">Fon Adı</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-normal">Kurucu</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-normal">Kategori</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-normal">1 Yıl (%)</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-normal">3 Yıl (%)</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-normal">5 Yıl (%)</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-normal">Risk Seviyesi</th>
                </tr>
              </thead>
              <tbody>
                {fundsData.map((fund, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-[#1a2942] transition-colors">
                    <td className="py-3 px-4 text-white">{fund.fund}</td>
                    <td className="py-3 px-4 text-center text-white">{fund.company}</td>
                    <td className="py-3 px-4 text-center text-white">{fund.category}</td>
                    <td className="py-3 px-4 text-center text-white">{fund.oneYear}</td>
                    <td className="py-3 px-4 text-center text-white">{fund.threeYear}</td>
                    <td className="py-3 px-4 text-center text-white">23.53</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${getRiskColor(fund.risk)}`}>
                        {fund.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectorRiskAnalysis
