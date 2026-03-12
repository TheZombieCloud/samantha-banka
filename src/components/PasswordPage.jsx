import { useState } from 'react'

const PasswordPage = ({ onSuccess }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === 'monkey') {
      onSuccess()
    } else {
      setError('Incorrect password. Try again!')
      setPassword('')
    }
  }

  return (
    <div className="password-page">
      <div className="password-container">
        <h1>Enter Password</h1>
        <p>A special place just for you</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="password-input"
            autoFocus
          />
          <button type="submit" className="submit-btn">
            Enter
          </button>
        </form>
        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  )
}

export default PasswordPage
