import { useState } from 'react'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')

  const roles = [
    'Business Development Manager',
    'Servisní manažer',
    'Koordinátor servisních techniků',
    'SAP Key User',
    'Obchodní koordinátor',
    'Technický referent',
    'Vedoucí obchodního týmu',
    'Specialista online prodeje',
    'Ostatní',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !role.trim()) {
      setError('Vyplňte prosím všechna pole')
      return
    }
    onLogin({ name, role, timestamp: new Date().toISOString() })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Workshop Bosch</h1>
          <p className="text-primary-200 text-lg">Zvládání změn a adaptace</p>
          <p className="text-primary-300 text-sm mt-2">LifeScale Business - Modul 05</p>
        </div>

        <div className="section-card">
          <h2 className="text-2xl font-semibold text-white mb-6">Přihlášení</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-left text-primary-100 font-medium mb-2">
                Vaše jméno
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Zadejte vaše jméno"
                className="card-input"
              />
            </div>

            <div>
              <label className="block text-left text-primary-100 font-medium mb-2">
                Vaše pracovní pozice
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="card-input"
              >
                <option value="">Vyberte pozici...</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full mt-6">
              Začít workshop
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-primary-600">
            <p className="text-primary-200 text-sm mb-2">Délka workshopu: 8 hodin</p>
            <p className="text-primary-300 text-xs">
              Tento workshop vám pomůže pochopit a zvládat změny v pracovním prostředí.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
