import { useNavigate } from 'react-router-dom'

export default function Header({ user, onLogout, module }) {
  const navigate = useNavigate()
  const totalModules = 7
  const progress = ((module - 1) / totalModules) * 100

  return (
    <div className="bg-primary-900 border-b border-primary-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header top */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-white font-bold">Workshop Bosch - Zvládání změn</h1>
            <p className="text-primary-300 text-sm">Modul {module} / {totalModules}</p>
          </div>
          <button
            onClick={() => {
              onLogout()
              navigate('/')
            }}
            className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition text-sm font-medium"
          >
            Odhlášení
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-primary-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-accent-400 to-accent-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Module navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((m) => (
            <div
              key={m}
              className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-semibold transition ${
                m === module
                  ? 'bg-accent-500 text-white'
                  : m < module
                    ? 'bg-green-500/30 text-green-300 border border-green-500'
                    : 'bg-primary-700 text-primary-300 border border-primary-600'
              }`}
              title={`Modul ${m}`}
            >
              {m === module && '●'}
              {m < module && '✓'}
              {m > module && m}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
