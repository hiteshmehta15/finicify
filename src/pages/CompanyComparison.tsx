import { useState } from 'react'

const CompanyComparison = () => {
  const [selectedCompany, setSelectedCompany] = useState('INVEO PORTFÖY YÖNETİMİ A.Ş.')

  // Exact data from screenshot
  const tableData = [
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
    { name: 'Yapı Kredi Portföy Yönetimi A.Ş.', type: 'E', volume: '34.52', return: '23.53', rate: '23.2x', share: '23.5x' },
  ]

  const chartData = [
    { label: 'Yabancı Fonu', values: [14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65] },
    { label: 'Özsermaye Fonu', values: [14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65] },
    { label: 'Yapay Zeka Fonu', values: [14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65] },
    { label: 'Portföy Fonu', values: [14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65] },
    { label: 'Kıymetli Madenler Fonu', values: [14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 14.65, 16.65] },
  ]

  return (
    <div className="min-h-screen bg-[#0B1527] text-white p-6 relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      {/* Content - relative positioning to stay above glow */}
      <div className="relative z-10">
        <h1 className="text-2xl font-semibold mb-6">Şirket İçi Karşılaştırma</h1>
        
        {/* Toggle Buttons */}
        <div className="flex gap-3 mb-4">
          <button className="px-6 py-2 bg-[#1a2942] text-gray-300 rounded-lg hover:bg-[#243654] transition-colors text-sm">
            Şirket Seçimi ve Karşılaştırma
          </button>
          <button className="px-6 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors text-sm font-medium">
            Şirketleri Kendileri ile Güncel Karşılaştırma
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          Şirket Seçimi ile portföy yönetimi şirketinin fonları detaylı olarak analiz edin.
        </p>

      {/* Company Selection Dropdown */}
      <div className="bg-[#1E293B] rounded-lg p-4 mb-6 shadow-[0_0_20px_rgba(14,165,233,0.1)] mt-6">
        <label className="text-gray-400 text-sm mb-2 block">Analiz Edilecek Şirket</label>
        <select 
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="w-full bg-[#334155] text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
        >
          <option value="INVEO PORTFÖY YÖNETİMİ A.Ş.">INVEO PORTFÖY YÖNETİMİ A.Ş.</option>
        </select>
      </div>

      {/* Analiz Edilecek Şirket Section */}
      <div className="bg-[#1E293B] rounded-lg p-6 mb-6 shadow-[0_0_25px_rgba(14,165,233,0.12)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Analiz Edilecek Şirket</h2>
          <button className="text-blue-400 text-sm hover:text-blue-300">Sektörle Karşılaştır</button>
        </div>

        {/* Stats Grid - Exact from screenshot */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#1e3a5f] rounded-lg p-4 shadow-[0_0_15px_rgba(96,165,250,0.2)] hover:shadow-[0_0_25px_rgba(96,165,250,0.3)] transition-shadow">
            <p className="text-gray-400 text-xs mb-2">Toplam Fon Sayısı</p>
            <p className="text-3xl font-bold text-[#60A5FA]">75</p>
          </div>
          <div className="bg-[#1e3a5f] rounded-lg p-4 shadow-[0_0_15px_rgba(96,165,250,0.2)] hover:shadow-[0_0_25px_rgba(96,165,250,0.3)] transition-shadow">
            <p className="text-gray-400 text-xs mb-2">Toplam Yönetilen Miktar Büyüklüğü</p>
            <p className="text-2xl font-bold text-[#60A5FA]">75.7B TL</p>
          </div>
          <div className="bg-[#1e3a5f] rounded-lg p-4 shadow-[0_0_15px_rgba(96,165,250,0.2)] hover:shadow-[0_0_25px_rgba(96,165,250,0.3)] transition-shadow">
            <p className="text-gray-400 text-xs mb-2">Ortalama Yıllık Güncel Getiri</p>
            <p className="text-3xl font-bold text-[#60A5FA]">2.03%</p>
          </div>
          <div className="bg-[#1e3a5f] rounded-lg p-4 shadow-[0_0_15px_rgba(96,165,250,0.2)] hover:shadow-[0_0_25px_rgba(96,165,250,0.3)] transition-shadow">
            <p className="text-gray-400 text-xs mb-2">Ortalamanın % İçi Getiri</p>
            <p className="text-3xl font-bold text-[#60A5FA]">23.61%</p>
          </div>
        </div>

        {/* Şirket Bazlı Karşılaştırma Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Şirket Bazlı Karşılaştırma</h3>
          <button className="text-blue-400 text-sm hover:text-blue-300">Sektörle Karşılaştır</button>
        </div>

        {/* Table */}
        <div className="bg-[#0f1c2e] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-normal text-sm">Şirket Adı</th>
                <th className="text-center py-3 px-4 text-gray-400 font-normal text-sm">Tür (T)</th>
                <th className="text-center py-3 px-4 text-gray-400 font-normal text-sm">Toplam Hacim (T)</th>
                <th className="text-center py-3 px-4 text-gray-400 font-normal text-sm">Ortalama Getiri (%)</th>
                <th className="text-center py-3 px-4 text-gray-400 font-normal text-sm">Ortalama Yüzdesel (%)</th>
                <th className="text-center py-3 px-4 text-gray-400 font-normal text-sm">Ortalama Yüzdesel (%)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-[#1a2942]">
                  <td className="py-3 px-4 text-white text-sm">{row.name}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded text-white text-xs">
                      {row.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-white text-sm">{row.volume}</td>
                  <td className="py-3 px-4 text-center text-white text-sm">{row.return}</td>
                  <td className="py-3 px-4 text-center text-white text-sm">{row.rate}</td>
                  <td className="py-3 px-4 text-center text-white text-sm">{row.share}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>

      {/* Chart Section */}
      <div className="bg-[#1E293B] rounded-lg p-6 shadow-[0_0_25px_rgba(14,165,233,0.12)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Şirket İçi Performans Grafiği - En İyi 5 Fon</h2>
        </div>

        {/* Time Period Selector */}
        <div className="flex gap-2 mb-4 text-sm">
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">1 Hafta</button>
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">1 Ay</button>
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">3 Ay</button>
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">2025</button>
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">1 Yıl</button>
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">3 Yıl</button>
          <button className="px-3 py-1 bg-[#334155] rounded text-gray-300 hover:bg-[#475569]">5 Yıl</button>
        </div>

        {/* Chart Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded`} style={{ 
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'][index] 
              }}></div>
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Simple Bar Chart Representation */}
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm text-gray-400">Yabancı Fonu</span>
            <div className="flex-1 bg-[#0f1c2e] rounded h-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#3B82F6] rounded shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: '70%' }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">14.65</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm text-gray-400">Özsermaye Fonu</span>
            <div className="flex-1 bg-[#0f1c2e] rounded h-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#10B981] rounded" style={{ width: '85%' }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">14.65</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm text-gray-400">Yapay Zeka Fonu</span>
            <div className="flex-1 bg-[#0f1c2e] rounded h-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#F59E0B] rounded" style={{ width: '75%' }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">14.65</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm text-gray-400">Portföy Fonu</span>
            <div className="flex-1 bg-[#0f1c2e] rounded h-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#8B5CF6] rounded" style={{ width: '65%' }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">14.65</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm text-gray-400">Kıymetli M. Fonu</span>
            <div className="flex-1 bg-[#0f1c2e] rounded h-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#EC4899] rounded" style={{ width: '90%' }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">16.65</span>
              </div>
            </div>
          </div>
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between mt-4 text-xs text-gray-400 px-32">
          <span>Oca</span>
          <span>Mar</span>
          <span>Haz</span>
          <span>Tem</span>
          <span>Ağu</span>
          <span>Eyl</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CompanyComparison
