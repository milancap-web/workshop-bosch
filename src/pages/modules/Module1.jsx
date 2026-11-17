import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module1({ user, onLogout }) {
  const navigate = useNavigate()
  const [responses, setResponses] = useState({
    changeExperience: '',
    feeling: '',
    impact: '',
  })

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    const data = {
      module: 1,
      user,
      responses,
      timestamp: new Date().toISOString(),
    }
    console.log('Uloženo:', data)
    localStorage.setItem(`module-1-${user.name}`, JSON.stringify(data))
    alert('Odpovědi byly uloženy!')
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={1} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Modul 1: Úvod a mapování */}
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 1: Úvod a mapování vaší zkušenosti</h2>
          <p className="text-primary-200 text-lg">Čas: 45 minut</p>
        </div>

        {/* Intro */}
        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Vítejte!</h3>
          <p className="text-primary-100 mb-4">
            V tomto modulu si ujasníme, jakou zkušenost se změnou máte vy osobně.
            Není zde správná či špatná odpověď - jde pouze o vaši vlastní reflexi.
          </p>
          <p className="text-primary-100">
            Věnujte tomuto modulu čas na poctivou zamyšlení. Vaše odpovědi zůstanou soukromé.
          </p>
        </div>

        {/* Cvičení 1 */}
        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 1: Vaše zkušenost se změnou</h3>
          <p className="text-primary-200 mb-6 italic">
            Přemýšlejte o poslední významné změně, kterou jste zažili v práci.
          </p>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              Jakou změnu jste zažili? (Popište stručně)
            </label>
            <textarea
              name="changeExperience"
              value={responses.changeExperience}
              onChange={handleChange}
              placeholder="Např. Přechod na nový systém, změna týmu, nový vedoucí..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              Jaké jste měli pocity, když k tomu došlo?
            </label>
            <textarea
              name="feeling"
              value={responses.feeling}
              onChange={handleChange}
              placeholder="Př. znepokojenost, zvědavost, obava, nadšení..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              Jak se to nakonec projevilo ve vaší práci?
            </label>
            <textarea
              name="impact"
              value={responses.impact}
              onChange={handleChange}
              placeholder="Např. Zvýšená produktivita, zlepšená spolupráce, učení se novému..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>
        </div>

        {/* Key Insights */}
        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-3">💡 Klíčové poznatky z tohoto modulu:</h3>
          <ul className="text-left space-y-2 text-primary-100">
            <li>• Každý zažívá změny jinak - vaše zkušenost je platná a důležitá</li>
            <li>• Změny vyvolávají různé emoce - to je přirozenost</li>
            <li>• I obtížné změny mohou vést k učení a růstu</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={() => navigate('/')}
            className="btn-secondary"
          >
            ← Zpět na dashboard
          </button>
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="btn-primary"
            >
              💾 Uložit odpovědi
            </button>
            <button
              onClick={() => navigate('/module-2')}
              className="btn-primary"
            >
              Pokračovat →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
