import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module5({ user, onLogout }) {
  const navigate = useNavigate()
  const [responses, setResponses] = useState({
    shared: '',
    learned: '',
    support: '',
  })

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    const data = { module: 5, user, responses, timestamp: new Date().toISOString(), shared: true }
    localStorage.setItem(`module-5-${user.name}`, JSON.stringify(data))
    alert('Odpovědi byly uloženy a budou k dispozici pro skupinovou práci!')
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={5} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 5: Skupinová práce a sdílení</h2>
          <p className="text-primary-200 text-lg">Čas: 60 minut</p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Vzdělávání se navzájem</h3>
          <p className="text-primary-100 mb-4">
            V tomto modulu se připravujete na <strong>skupinovou diskuzi</strong>.
          </p>
          <p className="text-primary-100">
            Sdílení zkušeností s kolegy je velmi cenné - často zjistíme, že nejsme sami
            se svými pocity a obavy. Můžeme se také naučit od ostatních, jak se vyrovnávají
            se změnami.
          </p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Příprava na skupinovou diskuzi</h3>
          <p className="text-primary-200 mb-6 italic">
            Odpovědi v tomto modulu budou <strong>sdíleny se skupinou</strong> (s vašim svolením).
          </p>

          <div className="mb-6 p-4 bg-primary-600 rounded-lg border-l-4 border-accent-500">
            <p className="text-primary-100">
              ⚠️ <strong>Důležité:</strong> Sdílejte jenom to, s čím se cítíte komfortně.
              Něco může zůstat soukromé jen pro vás.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              💭 Co bychom měli vědět o vaší situaci a vaší zkušenosti se změnou?
            </label>
            <textarea
              name="shared"
              value={responses.shared}
              onChange={handleChange}
              placeholder="Co chcete sdílet se skupinou? (Např. vaší zkušeností, obavami, které byste si přáli vyřešit)"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              📚 Co jste se dosud v tomto workshopu naučili? Jaké jsou vaše hlavní poznatky?
            </label>
            <textarea
              name="learned"
              value={responses.learned}
              onChange={handleChange}
              placeholder="Jaké poznatky vám dosud připadly nejužitečnější?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🤝 Na jakou otázku byste chtěl/chtěla slyšet odpověď od kolegů?
            </label>
            <textarea
              name="support"
              value={responses.support}
              onChange={handleChange}
              placeholder="Jaká konkrétní podpora nebo rady byste si přál/přála od skupiny?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>
        </div>

        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-3">🎯 Během skupinové diskuze:</h3>
          <ul className="text-left space-y-2 text-primary-100">
            <li>• <strong>Poslouchejte</strong> - Zbůstejte zvědaví na zkušenosti ostatních</li>
            <li>• <strong>Potvrzujte</strong> - Ukažte, že rozumíte pocitům ostatních</li>
            <li>• <strong>Nesdělujte řešení</strong> - Každý má svou cestu</li>
            <li>• <strong>Vážejte si rozmanitosti</strong> - Všichni se vyrovnáváme jinak</li>
            <li>• <strong>Nabídněte svou podporu</strong> - Můžete si pomáhat navzájem</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-between">
          <button onClick={() => navigate('/module-4')} className="btn-secondary">
            ← Modul 4
          </button>
          <div className="flex gap-4">
            <button onClick={handleSave} className="btn-primary">
              💾 Uložit a sdílet
            </button>
            <button onClick={() => navigate('/module-6')} className="btn-primary">
              Modul 6 →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
