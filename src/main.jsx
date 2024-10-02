import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="bg-main bg-cover bg-[center_47%] w-full h-screen bg-center bg-no-repeat grid grid-cols-[60%_40%] gap-2 font-sans text-white animate-appear fill-mode-forwards opacity-0">
      <App />
    </main>
  </React.StrictMode>,
)
