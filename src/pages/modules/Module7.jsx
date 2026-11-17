import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function Module7({ user, onLogout }) {
  const navigate = useNavigate()
  const [actionPlan, setActionPlan] = useState({
    primaryChange: '',
    whyImportant: '',
    firstStep: '',
    deadline: '',
    obstacles: '',
    support: '',
    tracking: '',
  })

  const handleChange = (e) => {
    setActionPlan({ ...actionPlan, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    const data = {
      module: 7,
      user,
      actionPlan,
      timestamp: new Date().toISOString(),
      completed: true,
    }
    console.log('FINAL DATA:', data)
    localStorage.setItem(`module-7-${user.name}`, JSON.stringify(data))

    // Poslat data na backend
    fetch('/.netlify/functions/save-workshop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => {
      // Fallback - jen localStorage
    })

    alert('Váš akční plán byl uložen! Gratulujeme ke splnění workshopu! 🎉')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="module-container">
      <Header user={user} onLogout={onLogout} module={7} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="section-card mb-6">
          <h2 className="text-3xl font-bold mb-2">Modul 7: Váš osobní akční plán</h2>
          <p className="text-primary-200 text-lg">Čas: 60 minut</p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Krystalování učení do akce</h3>
          <p className="text-primary-100 mb-4">
            Poslední modul je nejdůležitější. Zde převedeme všechno, co jste se naučili,
            do <strong>konkrétního akčního plánu</strong>.
          </p>
          <p className="text-primary-100">
            Plán vám pomůže aplikovat nové znalosti a dovednosti v reálném pracovním životě.
          </p>
        </div>

        <div className="section-card mb-6">
          <h3 className="text-2xl font-semibold mb-4">Váš osobní akční plán</h3>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🎯 Na jakou konkrétní změnu nebo situaci se chcete zaměřit?
            </label>
            <textarea
              name="primaryChange"
              value={actionPlan.primaryChange}
              onChange={handleChange}
              placeholder="Jakou změnu chcete řešit v příštích 3 měsících?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              💡 Proč je vám na tom záležet? Jaký by byl váš ideální výsledek?
            </label>
            <textarea
              name="whyImportant"
              value={actionPlan.whyImportant}
              onChange={handleChange}
              placeholder="Jaký by byl váš nejlepší výsledek? Proč je to důležité?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-left text-primary-100 font-semibold mb-3">
                👣 Jaký je váš PRVNÍ konkrétní krok?
              </label>
              <textarea
                name="firstStep"
                value={actionPlan.firstStep}
                onChange={handleChange}
                placeholder="Jeden malý, konkrétní krok..."
                className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
              />
            </div>

            <div>
              <label className="block text-left text-primary-100 font-semibold mb-3">
                📅 Kdy byste to měl/měla udělat?
              </label>
              <input
                type="date"
                name="deadline"
                value={actionPlan.deadline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white border-2 border-transparent focus:border-accent-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🚧 Jaké překážky mohou nastat? Jak se s nimi vypořádáte?
            </label>
            <textarea
              name="obstacles"
              value={actionPlan.obstacles}
              onChange={handleChange}
              placeholder="Jaké překážky čekáte? Jak je budete řešit?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              🤝 Kdo vás bude podpořit? Koho si vezete s sebou?
            </label>
            <textarea
              name="support"
              value={actionPlan.support}
              onChange={handleChange}
              placeholder="Které kolegovi si vezete s sebou? Kdo vás bude motivovat?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-primary-100 font-semibold mb-3">
              📊 Jak budete vědět, že vám to funguje? Jak si budete sledovat pokrok?
            </label>
            <textarea
              name="tracking"
              value={actionPlan.tracking}
              onChange={handleChange}
              placeholder="Co vás bude informovat o pokroku? Jak se budete kontrolovat?"
              className="w-full px-4 py-3 rounded-lg bg-primary-600 text-white placeholder-primary-300 border-2 border-transparent focus:border-accent-500 focus:outline-none transition resize-none h-20"
            />
          </div>
        </div>

        <div className="section-card mb-6 bg-primary-600">
          <h3 className="text-xl font-semibold mb-3">🌟 Pamatujte si:</h3>
          <ul className="text-left space-y-2 text-primary-100">
            <li>✓ Začněte <strong>malým krokem</strong> - malý krok je lépe než nic</li>
            <li>✓ <strong>Buďte trpěliví</strong> - změna trvá čas</li>
            <li>✓ <strong>Oslavujte pokroky</strong> - i malé vítězství se počítají</li>
            <li>✓ <strong>Zůstaňte ve spojení</strong> - sdílení s ostatními vám pomůže</li>
            <li>✓ <strong>Reflektujte a přizpůsobujte</strong> - plány se mění, to je OK</li>
          </ul>
        </div>

        <div className="section-card mb-6 bg-accent-500">
          <h3 className="text-2xl font-bold mb-2">🎉 Gratulujeme!</h3>
          <p className="text-white text-lg">
            Právě jste prošli 8-hodinovým workshopem na téma zvládání změn.
            Máte konkrétní plán a znalosti, abyste se s budoucími změnami vyrovnali
            s sebevědomím a podporou svého týmu.
          </p>
        </div>

        <div className="flex gap-4 justify-between flex-wrap">
          <button onClick={() => navigate('/module-6')} className="btn-secondary">
            ← Modul 6
          </button>
          <div className="flex gap-4">
            <button onClick={handleSave} className="btn-primary">
              ✅ Uložit finální plán
            </button>
            <button onClick={handlePrint} className="btn-secondary print:hidden">
              🖨️ Vytisknout
            </button>
            <button onClick={() => navigate('/')} className="btn-secondary">
              Domů
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
