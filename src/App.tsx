import { useState } from 'react'
import CompanyComparison from './pages/CompanyComparison'
import RiskMetricsHeatmap from './pages/RiskMetricsHeatmap'
import SectorRiskAnalysis from './pages/SectorRiskAnalysis'

function App() {
  const [activeView, setActiveView] = useState<'company' | 'heatmap' | 'sector'>('company')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const menuItems = [
    { id: 'anasayfa', label: 'Anasayfa', icon: '🏠', hasSubmenu: false },
    { id: 'hisse', label: 'Hisse Senetleri', icon: '📊', hasSubmenu: true },
    { id: 'yatirim', label: 'Yatırım Fonları', icon: '💼', hasSubmenu: true, active: true },
    { id: 'kripto', label: 'Kripto', icon: '₿', hasSubmenu: true },
    { id: 'emtia', label: 'Emtia', icon: '📦', hasSubmenu: false },
    { id: 'tahvil', label: 'Tahvil', icon: '📄', hasSubmenu: false },
    { id: 'forex', label: 'Forex', icon: '💱', hasSubmenu: false },
    { id: 'finicify', label: 'Finicify AI', icon: '🤖', hasSubmenu: false },
    { id: 'hesap', label: 'Hesap Makinesi', icon: '🧮', hasSubmenu: false },
    { id: 'raporlama', label: 'Raporlama', icon: '📈', hasSubmenu: false },
    { id: 'ayarlar', label: 'Ayarlar', icon: '⚙️', hasSubmenu: false },
  ]

  const subMenuItems = [
    'Yatırım Fonları Detaylı Analizi',
    'İki/Üç/Dört/Beşleri/Altılar',
    'NYSE Şirket Bazlı Analizi',
    'Sektör Risk Analizi',
    'Yatırım Fonu Karşılaştırmalı Risk Analizi',
    'Yatırım Fonu Performans Karşılaştırmalı Analizi',
    'Portföy Dağıtım Analizi',
    'Fon Model Portfolio Karşılaştırmalı Analizi',
  ]

  return (
    <div className="flex min-h-screen bg-[#0B1527]">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-[#0f1c2e] border-r border-gray-800 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-gray-800 relative overflow-hidden">
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent blur-xl"></div>
          
          <div className="flex items-center gap-2 relative z-10">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            {sidebarOpen && <span className="text-white font-semibold">finicify</span>}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto text-gray-400 hover:text-white relative z-10"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all relative overflow-hidden ${
                  item.active 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                    : 'text-gray-300 hover:bg-[#1a2942]'
                }`}
              >
                {item.active && <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>}
                <span className="text-lg relative z-10">{item.icon}</span>
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-left relative z-10">{item.label}</span>
                    {item.hasSubmenu && <span className="relative z-10">▼</span>}
                  </>
                )}
              </button>
              
              {/* Submenu for Yatırım Fonları */}
              {item.active && sidebarOpen && (
                <div className="bg-[#0a1525] py-2">
                  <button
                    onClick={() => setActiveView('company')}
                    className={`w-full text-left px-8 py-2 text-xs transition-colors ${
                      activeView === 'company'
                        ? 'text-blue-400 bg-[#1a2942]' 
                        : 'text-gray-400 hover:text-white hover:bg-[#1a2942]'
                    }`}
                  >
                    Şirket Karşılaştırma
                  </button>
                  <button
                    onClick={() => setActiveView('heatmap')}
                    className={`w-full text-left px-8 py-2 text-xs transition-colors ${
                      activeView === 'heatmap'
                        ? 'text-blue-400 bg-[#1a2942]' 
                        : 'text-gray-400 hover:text-white hover:bg-[#1a2942]'
                    }`}
                  >
                    Risk Metrikleri Heatmap
                  </button>
                  <button
                    onClick={() => setActiveView('sector')}
                    className={`w-full text-left px-8 py-2 text-xs transition-colors ${
                      activeView === 'sector'
                        ? 'text-blue-400 bg-[#1a2942]' 
                        : 'text-gray-400 hover:text-white hover:bg-[#1a2942]'
                    }`}
                  >
                    Sektör Risk Analizi
                  </button>
                  {subMenuItems.slice(3).map((subItem, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-8 py-2 text-xs transition-colors text-gray-400 hover:text-white hover:bg-[#1a2942]"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar with Futuristic Glow Effect */}
        <header className="h-16 bg-[#0f1c2e] border-b border-gray-800 flex items-center justify-between px-6 relative overflow-hidden">
          {/* Ultra Cinematic Glowing Light Streak Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Main bright neon streak - ultra bright */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#00CFFF] to-transparent opacity-90 animate-pulse-glow shadow-[0_0_30px_rgba(0,207,255,0.8),0_0_60px_rgba(42,111,255,0.4)]"></div>
            
            {/* Intense wide glow spreading down - very prominent */}
            <div className="absolute -top-8 left-1/4 right-1/4 h-40 bg-gradient-to-b from-[#00CFFF]/40 via-[#2A6FFF]/25 to-transparent blur-3xl animate-glow-drift"></div>
            
            {/* Left accent glow - bright cyan */}
            <div className="absolute top-0 left-0 w-1/2 h-32 bg-gradient-to-r from-[#00CFFF]/35 via-[#2A6FFF]/20 to-transparent blur-2xl animate-glow-pulse"></div>
            
            {/* Right accent glow - bright cyan */}
            <div className="absolute top-0 right-0 w-1/2 h-32 bg-gradient-to-l from-[#00CFFF]/35 via-[#2A6FFF]/20 to-transparent blur-2xl animate-glow-pulse-delayed"></div>
            
            {/* Cinematic reflection/refraction effect */}
            <div className="absolute top-4 left-1/3 right-1/3 h-16 bg-gradient-to-b from-[#00CFFF]/20 via-[#2A6FFF]/10 to-transparent blur-xl animate-breath"></div>
            
            {/* Fast moving light particles */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 animate-light-sweep shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            
            {/* Additional glow layers for depth */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#2A6FFF]/15 to-transparent blur-2xl"></div>
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <span className="text-xs">?</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <span className="text-xs">🔔</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <span className="text-xs">⚙</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="text-right">
                <div className="text-sm text-white">John Doe</div>
                <div className="text-xs text-gray-400">john.doe@example.com</div>
              </div>
              <span className="text-gray-400">▼</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto relative">
          {activeView === 'company' && <CompanyComparison />}
          {activeView === 'heatmap' && <RiskMetricsHeatmap />}
          {activeView === 'sector' && <SectorRiskAnalysis />}
          
          {/* Floating Chat Button */}
          <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0EA5E9] rounded-full shadow-lg flex items-center justify-center hover:bg-[#0284C7] transition-colors z-50">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </main>
      </div>
    </div>
  )
}

export default App
