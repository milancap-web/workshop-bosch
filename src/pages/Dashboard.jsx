import { useState } from 'react'
import { Link } from 'react-router-dom'

const modules = [
  {
    id: 1,
    title: 'Úvod a mapování',
    description: 'Zmapujeme vaší vlastní zkušenost se změnou',
    icon: '📍',
    path: '/module-1',
  },
  {
    id: 2,
    title: 'Odpor vůči změně',
    description: 'Proč lidé změnám přirozeně vzdorují',
    icon: '🔄',
    path: '/module-2',
  },
  {
    id: 3,
    title: 'Moje reakce',
    description: 'Individuální reflexe vaší pracovní situace',
    icon: '💭',
    path: '/module-3',
  },
  {
    id: 4,
    title: 'Orientace v nové situaci',
    description: 'Praktické způsoby přístupu a řešení',
    icon: '🧭',
    path: '/module-4',
  },
  {
    id: 5,
    title: 'Skupinová práce',
    description: 'Sdílení zkušeností s kolegy',
    icon: '👥',
    path: '/module-5',
  },
  {
    id: 6,
    title: 'Podpora kolegů',
    description: 'Jak podpořit kolegu v obtížné situaci',
    icon: '🤝',
    path: '/module-6',
  },
  {
    id: 7,
    title: 'Akční plán',
    description: 'Váš osobní plán na další kroky',
    icon: '📋',
    path: '/module-7',
  },
]

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
      {/* Header */}
      <div className="bg-primary-900 border-b border-primary-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-xl">Workshop Bosch</h1>
            <p className="text-primary-300 text-sm">Zvládání změn a adaptace</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-white font-medium">{user.name}</p>
              <p className="text-primary-300 text-sm">{user.role}</p>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition text-sm font-medium"
            >
              Odhlášení
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="section-card mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Vítejte na workshopu!</h2>
            <p className="text-primary-100 text-lg mb-4">
              Tento 8-hodinový workshop vám pomůže porozumět změnám v pracovním prostředí
              a najít způsoby, jak se s nimi co nejlépe vypořádat.
            </p>
            <p className="text-primary-200 mb-6">
              Projdeme si 7 modulů kombinujících teoretické poznatky s praktickými cvičeními.
              Svou práci budete moct postupně ukládat a na konci si vytvoříte osobní akční plán.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary-600 rounded-lg p-4">
                <p className="text-3xl font-bold text-accent-400">7</p>
                <p className="text-primary-200 text-sm">Modulů</p>
              </div>
              <div className="bg-primary-600 rounded-lg p-4">
                <p className="text-3xl font-bold text-accent-400">8h</p>
                <p className="text-primary-200 text-sm">Délka workshopu</p>
              </div>
              <div className="bg-primary-600 rounded-lg p-4">
                <p className="text-3xl font-bold text-accent-400">1</p>
                <p className="text-primary-200 text-sm">Akční plán</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link
              key={module.id}
              to={module.path}
              className="section-card hover:bg-primary-600 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-primary-200 text-sm mb-4">{module.description}</p>
              <div className="text-accent-400 font-medium text-sm">Začít →</div>
            </Link>
          ))}
        </div>

        {/* Admin Access */}
        <div className="mt-8 text-center">
          <Link
            to="/admin"
            className="inline-block px-4 py-2 text-primary-200 hover:text-white text-sm underline"
          >
            Admin přístup
          </Link>
        </div>
      </div>
    </div>
  )
}
