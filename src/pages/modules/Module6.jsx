import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module6({ user, onLogout }) {
  const navigate = useNavigate()
  const [responses, setResponses] = useState({
    struggling: '',
    support: '',
    conversation: '',
  })

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    const data = { module: 6, user, responses, timestamp: new Date().toISOString() }
    localStorage.setItem(`module-6-${user.name}`, JSON.stringify(data))
    alert('Odpovědi byly uloženy!')
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={6} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 6: Podpora kolegů v obtížné situaci</h2>
          <p className="text-primary-200 text-lg">Čas: 45 minut</p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Jak podpořit ostatní</h3>
          <p className="text-primary-100 mb-4">
            Během workshopu jsme se fokusovali na <strong>vás osobně</strong>.
            Nyní se podíváme, jak můžete pomoci kolegům, kterým změna dělá potíže.
          </p>
          <p className="text-primary-100">
            Dobrá zpráva: <strong>Můžete být mocným faktorem pro druhé.</strong>
            Vašim přístupem k vlastní změně inspirujete ostatní.
          </p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 1: Pozorování a empatie</h3>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              👤 Přemýšlejte o kolegovi, který se s nějakou změnou potýká.
              Popište, co pozorujete:
            </label>
            <textarea
              name="struggling"
              value={responses.struggling}
              onChange={handleChange}
              placeholder="Co vidíte na svém kolegovi? Jak se chová? Co jej tráví?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              💚 Jaké pocity a obavy si můžete představit, že váš kolega zažívá?
            </label>
            <textarea
              name="support"
              value={responses.support}
              onChange={handleChange}
              placeholder="Které emoce by asi cítil/cítěla? Jaké by měl obavy?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 2: Praktické kroky podpory</h3>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🗣️ Jakou <strong>jednu konkrétní věc</strong> byste mohl/mohla říci nebo udělat,
              aby se váš kolega cítil podporován?
            </label>
            <textarea
              name="conversation"
              value={responses.conversation}
              onChange={handleChange}
              placeholder="Např. pozvat jej na kávu, zeptat se 'Jak se ti daří?', nabídnout pomoc..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>
        </div>

        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-4">✨ Principy dobré podpory:</h3>
          <div className="space-y-3 text-primary-100">
            <div>
              <strong>✓ Poslouchejte bez řešení</strong>
              <p className="text-sm text-primary-200 mt-1">Někdy lidé jen potřebují být vyslyšeni, ne poučeni</p>
            </div>
            <div>
              <strong>✓ Potvrzujte pocity</strong>
              <p className="text-sm text-primary-200 mt-1">Řekněte: "Rozumím, že je ti to těžké"</p>
            </div>
            <div>
              <strong>✓ Nabídněte praktickou pomoc</strong>
              <p className="text-sm text-primary-200 mt-1">Např. pomoc s úkoly nebo jen společnost</p>
            </div>
            <div>
              <strong>✓ Buďte trpěliví</strong>
              <p className="text-sm text-primary-200 mt-1">Přizpůsobování se změnám trvá čas</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <button onClick={() => navigate('/module-5')} className="btn-secondary">
            ← Modul 5
          </button>
          <div className="flex gap-4">
            <button onClick={handleSave} className="btn-primary">
              💾 Uložit
            </button>
            <button onClick={() => navigate('/module-7')} className="btn-primary">
              Modul 7 (finále) →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
