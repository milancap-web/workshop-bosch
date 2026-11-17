import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Module1 from './pages/modules/Module1'
import Module2 from './pages/modules/Module2'
import Module3 from './pages/modules/Module3'
import Module4 from './pages/modules/Module4'
import Module5 from './pages/modules/Module5'
import Module6 from './pages/modules/Module6'
import Module7 from './pages/modules/Module7'
import Admin from './pages/Admin'
import './index.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('workshopUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('workshopUser', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('workshopUser')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Načítání...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/" element={<Dashboard user={user} onLogout={handleLogout} />} />
            <Route path="/module-1" element={<Module1 user={user} onLogout={handleLogout} />} />
            <Route path="/module-2" element={<Module2 user={user} onLogout={handleLogout} />} />
            <Route path="/module-3" element={<Module3 user={user} onLogout={handleLogout} />} />
            <Route path="/module-4" element={<Module4 user={user} onLogout={handleLogout} />} />
            <Route path="/module-5" element={<Module5 user={user} onLogout={handleLogout} />} />
            <Route path="/module-6" element={<Module6 user={user} onLogout={handleLogout} />} />
            <Route path="/module-7" element={<Module7 user={user} onLogout={handleLogout} />} />
            <Route path="/admin" element={<Admin user={user} onLogout={handleLogout} />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
