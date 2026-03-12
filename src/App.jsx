import { useState } from 'react'
import PasswordPage from './components/PasswordPage'
import BingoCard from './components/BingoCard'
import LetterAnimation from './components/LetterAnimation'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true)
  }

  const handleBingoComplete = () => {
    setShowLetter(true)
  }

  const handleCloseLetter = () => {
    setShowLetter(false)
  }

  return (
    <div className="app">
      {!isAuthenticated ? (
        <PasswordPage onSuccess={handlePasswordSuccess} />
      ) : (
        <BingoCard onComplete={handleBingoComplete} />
      )}
      {showLetter && <LetterAnimation onClose={handleCloseLetter} />}
    </div>
  )
}

export default App
