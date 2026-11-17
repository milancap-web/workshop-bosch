import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module2({ user, onLogout }) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState({
    resistance: [],
    understanding: '',
  })

  const resistanceReasons = [
    { id: 1, label: 'Obava z neznáma', emoji: '😰' },
    { id: 2, label: 'Ztráta kontroly', emoji: '⚠️' },
    { id: 3, label: 'Nedostatek informací', emoji: '❓' },
    { id: 4, label: 'Zvyšující se pracovní zátěž', emoji: '😤' },
    { id: 5, label: 'Obava o zaměstnání', emoji: '📉' },
    { id: 6, label: 'Zvyk na staré způsoby', emoji: '🔄' },
  ]

  const toggleResistance = (id) => {
    setSelected({
      ...selected,
      resistance: selected.resistance.includes(id)
        ? selected.resistance.filter((r) => r !== id)
        : [...selected.resistance, id],
    })
  }

  const handleSave = () => {
    const data = {
      module: 2,
      user,
      selected,
      timestamp: new Date().toISOString(),
    }
    console.log('Uloženo:', data)
    localStorage.setItem(`module-2-${user.name}`, JSON.stringify(data))
    alert('Odpovědi byly uloženy!')
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={2} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 2: Proč se měníme - odpor vůči změně</h2>
          <p className="text-primary-200 text-lg">Čas: 60 minut</p>
        </div>

        {/* Teorie */}
        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Teoretické pozadí</h3>
          <div className="space-y-4 text-primary-100">
            <p>
              <strong>Lidé přirozeně odporují změnám.</strong> To není slabost - je to přirozená
              ochranná reakce. Když něco známe, cítíme se bezpečněji. Změna znamená nejistotu.
            </p>
            <p>
              Odpor vůči změně pochází z více zdrojů - z obav, z nedostatku informací,
              z ztráty kontroly, nebo prostě z toho, že jsme zvyklí na staré způsoby.
            </p>
            <p>
              <strong>Dobrou zprávou je:</strong> Porozuměním důvodům odporu můžeme s ním
              lépe pracovat a podpořit i sami sebe i své kolegy.
            </p>
          </div>
        </div>

        {/* Cvičení */}
        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 1: Zdroje odporu</h3>
          <p className="text-primary-200 mb-6">
            Vyberte z následujícího seznamu důvody, které vy osobně cítíte vůči změnám:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {resistanceReasons.map((reason) => (
              <button
                key={reason.id}
                onClick={() => toggleResistance(reason.id)}
                className={`p-4 rounded-lg transition border-2 text-left font-semibold ${
                  selected.resistance.includes(reason.id)
                    ? 'bg-accent-500 border-accent-400 text-white'
                    : 'bg-primary-600 border-primary-500 text-primary-100 hover:border-accent-500'
                }`}
              >
                <span className="text-2xl mr-3">{reason.emoji}</span>
                {reason.label}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-left text-primary-100 font-semibold mb-3">
              Kterému z těchto důvodů byste chtěli rozumět lépe?
            </label>
            <textarea
              value={selected.understanding}
              onChange={(e) => setSelected({ ...selected, understanding: e.target.value })}
              placeholder="Popište, jaký důvod vás nejvíce ovlivňuje..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>
        </div>

        {/* Strategie */}
        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-4">🎯 Strategie na zvládání odporu:</h3>
          <ul className="text-left space-y-3 text-primary-100">
            <li className="flex gap-3">
              <span className="text-accent-400">1.</span>
              <span><strong>Vyhledejte informace</strong> - Čím více budete vědět, tím méně budete mít obav</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-400">2.</span>
              <span><strong>Mluví o pocitích</strong> - Sdělte ostatním, co vás znepokojuje</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-400">3.</span>
              <span><strong>Zvolte malé kroky</strong> - Adaptace nemusí být skokový skok</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-400">4.</span>
              <span><strong>Najděte pozitiva</strong> - Každá změna přináší i nové příležitosti</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={() => navigate('/module-1')}
            className="btn-secondary"
          >
            ← Modul 1
          </button>
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="btn-primary"
            >
              💾 Uložit
            </button>
            <button
              onClick={() => navigate('/module-3')}
              className="btn-primary"
            >
              Modul 3 →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
