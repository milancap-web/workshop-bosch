import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin({ user, onLogout }) {
  const navigate = useNavigate()
  const [allData, setAllData] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    // Zbrat všechna data z localStorage
    const data = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('module-')) {
        const value = JSON.parse(localStorage.getItem(key))
        data.push({ key, ...value })
      }
    }
    setAllData(data)
  }, [])

  const filteredData =
    filter === 'all' ? allData : allData.filter((d) => d.module === parseInt(filter))

  const exportCSV = () => {
    const headers = ['Jméno', 'Role', 'Modul', 'Čas', 'Data']
    const rows = filteredData.map((d) => [
      d.user?.name || 'N/A',
      d.user?.role || 'N/A',
      d.module || 'N/A',
      new Date(d.timestamp).toLocaleString('cs-CZ'),
      JSON.stringify(d.responses || d.selected || d.actionPlan || {}),
    ])

    const csv = [headers, ...rows].map((r) => r.map((cell) => `"${cell}"`).join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `workshop-data-${new Date().toISOString().split('T')[0]}.csv`)
    link.click()
  }

  const exportJSON = () => {
    const json = JSON.stringify(filteredData, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `workshop-data-${new Date().toISOString().split('T')[0]}.json`)
    link.click()
  }

  // Kontrola přístupu - jen pro admin
  const isAdmin =
    user?.name?.toLowerCase().includes('milan') ||
    user?.role === 'admin' ||
    user?.email?.includes('tymovy')

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-4">Přístup odepřen</h1>
          <p className="text-primary-200 mb-6">Pouze správci mají přístup k tomuto panelu.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Zpět na dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
      <div className="bg-primary-900 border-b border-primary-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-xl">Admin Panel</h1>
            <p className="text-primary-300 text-sm">Správa dat workshopu</p>
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
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-2xl font-bold mb-4">Sbírané data</h2>
          <p className="text-primary-200 mb-6">
            Celkem {allData.length} záznamů z {new Set(allData.map((d) => d.user?.name)).size} účastníků
          </p>

          <div className="flex gap-4 mb-6 flex-wrap">
            <div>
              <label className="block text-primary-200 text-sm mb-2">Filtr podle modulu:</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 rounded-lg bg-primary-600 text-white border border-primary-500 focus:outline-none focus:border-accent-500"
              >
                <option value="all">Všechny moduly</option>
                <option value="1">Modul 1</option>
                <option value="2">Modul 2</option>
                <option value="3">Modul 3</option>
                <option value="4">Modul 4</option>
                <option value="5">Modul 5</option>
                <option value="6">Modul 6</option>
                <option value="7">Modul 7</option>
              </select>
            </div>

            <div className="flex gap-2 items-end">
              <button onClick={exportCSV} className="btn-primary">
                📥 Export CSV
              </button>
              <button onClick={exportJSON} className="btn-primary">
                📥 Export JSON
              </button>
            </div>
          </div>
        </div>

        <div className="section-card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-600">
                <th className="text-left py-3 px-4 font-semibold">Jméno</th>
                <th className="text-left py-3 px-4 font-semibold">Role</th>
                <th className="text-left py-3 px-4 font-semibold">Modul</th>
                <th className="text-left py-3 px-4 font-semibold">Čas uložení</th>
                <th className="text-left py-3 px-4 font-semibold">Stav</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-primary-300">
                    Zatím žádná data
                  </td>
                </tr>
              ) : (
                filteredData.map((entry, idx) => (
                  <tr key={idx} className="border-b border-primary-600 hover:bg-primary-700">
                    <td className="py-3 px-4">{entry.user?.name || 'N/A'}</td>
                    <td className="py-3 px-4 text-sm text-primary-200">{entry.user?.role || 'N/A'}</td>
                    <td className="py-3 px-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {entry.module}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-primary-200">
                      {new Date(entry.timestamp).toLocaleString('cs-CZ')}
                    </td>
                    <td className="py-3 px-4">
                      {entry.completed ? (
                        <span className="text-green-400">✓ Hotovo</span>
                      ) : (
                        <span className="text-primary-300">▪ Rozpracováno</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="section-card mt-6 bg-primary-600">
          <h3 className="text-lg font-semibold mb-3">📌 Informace</h3>
          <ul className="text-primary-100 space-y-2 text-sm">
            <li>• Data jsou uložena v prohlížeči (localStorage)</li>
            <li>• Export probíhá jako CSV nebo JSON soubor</li>
            <li>• Všechna data jsou anonymně dostupná (s jménem a rolí)</li>
            <li>• Pro dlouhodobý monitoring se doporučuje pravidelný export</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
