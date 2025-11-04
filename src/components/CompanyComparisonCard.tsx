interface CompanyComparisonCardProps {
  companyName: string
  comparisonMode: 'sector' | 'internal'
}

const CompanyComparisonCard = ({ companyName, comparisonMode }: CompanyComparisonCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <label className="text-blue-200 text-sm mb-2 block">
            {comparisonMode === 'sector' ? 'Sektörle Karşılaştırma' : 'Analiz Edilecek Şirket'}
          </label>
          <div className="bg-white bg-opacity-20 rounded-lg px-4 py-3 backdrop-blur-sm">
            <p className="text-white font-semibold">{companyName}</p>
          </div>
        </div>

        {comparisonMode === 'sector' && (
          <div className="flex-1">
            <label className="text-blue-200 text-sm mb-2 block">Karşılaştırılacak Şirket</label>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-3 backdrop-blur-sm">
              <p className="text-white font-semibold">Select Company...</p>
            </div>
          </div>
        )}

        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
          Şirketi Analizi Et ve Düzde Karşılaştırma
        </button>
      </div>
    </div>
  )
}

export default CompanyComparisonCard
