import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module4({ user, onLogout }) {
  const navigate = useNavigate()
  const [responses, setResponses] = useState({
    approaches: [],
    action: '',
    support: '',
  })

  const approaches = [
    { id: 1, label: 'Přijmout situaci', desc: 'Uznat, co se děje a pracovat s realitou' },
    { id: 2, label: 'Činný přístup', desc: 'Aktivně hledat řešení a zvyšovat své dovednosti' },
    { id: 3, label: 'Vyhledávání informací', desc: 'Dozvědět se více o situaci a možnostech' },
    { id: 4, label: 'Podpora v týmu', desc: 'Spolupracovat s kolegy a vyměňovat si zkušenosti' },
    { id: 5, label: 'Vlastní péče', desc: 'Pečovat o své fyzické a duševní zdraví' },
    { id: 6, label: 'Adaptace a flexibilita', desc: 'Přizpůsobit se novým podmínkám' },
  ]

  const toggleApproach = (id) => {
    setResponses({
      ...responses,
      approaches: responses.approaches.includes(id)
        ? responses.approaches.filter((a) => a !== id)
        : [...responses.approaches, id],
    })
  }

  const handleSave = () => {
    const data = { module: 4, user, responses, timestamp: new Date().toISOString() }
    localStorage.setItem(`module-4-${user.name}`, JSON.stringify(data))
    alert('Odpovědi byly uloženy!')
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={4} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 4: Orientace v nové situaci</h2>
          <p className="text-primary-200 text-lg">Čas: 90 minut</p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Praktické způsoby přístupu</h3>
          <p className="text-primary-100">
            Když čelíme změně, máme více možností, jak se s ní vyrovnat.
            Nejlepší přístup závisí na situaci a na vás osobně.
          </p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 1: Vyberte si přístupy</h3>
          <p className="text-primary-200 mb-6">
            Která ze siguících stratégií by byla pro vaši situaci <strong>nejužitečnější</strong>?
          </p>

          <div className="space-y-3 mb-6">
            {approaches.map((approach) => (
              <button
                key={approach.id}
                onClick={() => toggleApproach(approach.id)}
                className={`w-full p-4 rounded-lg transition border-2 text-left ${
                  responses.approaches.includes(approach.id)
                    ? 'bg-accent-500 border-accent-400 text-white'
                    : 'bg-primary-600 border-primary-500 text-primary-100 hover:border-accent-500'
                }`}
              >
                <div className="font-semibold">{approach.label}</div>
                <div className="text-sm mt-1">{approach.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 2: Váš konkrétní plán</h3>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🎯 Jakou konkrétní akci byste chtěli v příštích 7 dnech udělat?
            </label>
            <textarea
              value={responses.action}
              onChange={(e) => setResponses({ ...responses, action: e.target.value })}
              placeholder="Popište jednu konkrétní akci, kterou můžete udělat..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🤝 Koho v týmu byste mohl/mohla požádat o podporu nebo radu?
            </label>
            <textarea
              value={responses.support}
              onChange={(e) => setResponses({ ...responses, support: e.target.value })}
              placeholder="Jména nebo role kolegů, kteří by vám mohli pomoci..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>
        </div>

        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-3">✅ Klíč k orientaci:</h3>
          <ul className="text-left space-y-2 text-primary-100">
            <li>• <strong>Vyberte jednu strategii</strong> - Není třeba dělat všechno najednou</li>
            <li>• <strong>Začněte malým krokem</strong> - Každý pokrok se počítá</li>
            <li>• <strong>Hledejte podporu</strong> - Nejste sami v této situaci</li>
            <li>• <strong>Reflektujte svůj pokrok</strong> - Všimněte si, co funguje</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-between">
          <button onClick={() => navigate('/module-3')} className="btn-secondary">
            ← Modul 3
          </button>
          <div className="flex gap-4">
            <button onClick={handleSave} className="btn-primary">
              💾 Uložit
            </button>
            <button onClick={() => navigate('/module-5')} className="btn-primary">
              Modul 5 →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
