import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import PasswordPage from './components/PasswordPage'
import BingoCard from './components/BingoCard'
import LetterAnimation from './components/LetterAnimation'
import ValentineScavenger from './components/ValentineScavenger'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true)
  }

  const handleBingoComplete = () => {
    setShowLetter(true)
  }

  const handleCloseLetter = () => {
    setShowLetter(false)
  }

  const handleNavigation = (e) => {
    navigate(e.target.value)
  }

  return (
    <div className="app">
      {!isAuthenticated ? (
        <PasswordPage onSuccess={handlePasswordSuccess} />
      ) : (
        <>
          <div className="navigation-dropdown">
            <select value={location.pathname} onChange={handleNavigation}>
              <option value="/">Bingo Card</option>
              <option value="/valentines">Valentines Scavenger Hunt</option>
            </select>
          </div>
          <Routes>
            <Route path="/" element={<BingoCard onComplete={handleBingoComplete} />} />
            <Route path="/valentines" element={<ValentineScavenger />} />
          </Routes>
        </>
      )}
      {showLetter && <LetterAnimation onClose={handleCloseLetter} />}
    </div>
  )
}

export default App
