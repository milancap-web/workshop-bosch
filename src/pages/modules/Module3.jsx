import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module3({ user, onLogout }) {
  const navigate = useNavigate()
  const [responses, setResponses] = useState({
    currentChange: '',
    emotionalResponse: '',
    bodyResponse: '',
    thoughts: '',
    coping: '',
  })

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    const data = { module: 3, user, responses, timestamp: new Date().toISOString() }
    localStorage.setItem(`module-3-${user.name}`, JSON.stringify(data))
    alert('Odpovědi byly uloženy!')
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={3} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 3: Moje osobní reakce na změnu</h2>
          <p className="text-primary-200 text-lg">Čas: 60 minut</p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Individuální reflexe</h3>
          <p className="text-primary-100 mb-4">
            V tomto modulu se zaměříme na <strong>vaše osobní reakce</strong> na změnu.
            Lidé reagují na změny různě - fyzicky, emocionálně i myšlenkově.
          </p>
          <p className="text-primary-100">
            Porozuměním vlastním reakcím se naučíte je lépe regulovat a zvládat.
          </p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 1: Konkrétní pracovní situace</h3>
          <p className="text-primary-200 mb-6 italic">
            Myslite na konkrétní změnu nebo nejistou situaci, kterou nyní řešíte ve své práci.
          </p>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              Jaká je ta situace? Popis situace:
            </label>
            <textarea
              name="currentChange"
              value={responses.currentChange}
              onChange={handleChange}
              placeholder="Popište situaci podrobněji..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-24"
            />
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cvičení 2: Moje reakce na tuto situaci</h3>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              💭 Jaké máte <strong>myšlenky</strong> a <strong>obavy</strong>?
            </label>
            <textarea
              name="thoughts"
              value={responses.thoughts}
              onChange={handleChange}
              placeholder="Jaké myšlenky vás pronásledují? Co vám jde hlavou?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              😟 Jaké máte <strong>emoce</strong> a <strong>pocity</strong>?
            </label>
            <textarea
              name="emotionalResponse"
              value={responses.emotionalResponse}
              onChange={handleChange}
              placeholder="Př. úzkost, smutek, zlost, nadšení, zmaření..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              💪 Jak se to <strong>fyzicky projevuje</strong> ve vašem těle?
            </label>
            <textarea
              name="bodyResponse"
              value={responses.bodyResponse}
              onChange={handleChange}
              placeholder="Př. napětí v krku, bolest hlavy, únava, zrychlený tep..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🛡️ Co vám už teď <strong>pomáhá</strong> se s tím vyrovnávat?
            </label>
            <textarea
              name="coping"
              value={responses.coping}
              onChange={handleChange}
              placeholder="Př. rozhovory s přátelem, sport, meditace, práce na projektu..."
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>
        </div>

        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-3">📌 Pamatujte:</h3>
          <p className="text-primary-100">
            Vaše reakce jsou <strong>přirozené a platné</strong>. Každý reaguje jinak.
            Pozorováním a pochopením vlastních vzorů se naučíte s nimi lépe pracovat.
          </p>
        </div>

        <div className="flex gap-4 justify-between">
          <button onClick={() => navigate('/module-2')} className="btn-secondary">
            ← Modul 2
          </button>
          <div className="flex gap-4">
            <button onClick={handleSave} className="btn-primary">
              💾 Uložit
            </button>
            <button onClick={() => navigate('/module-4')} className="btn-primary">
              Modul 4 →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
