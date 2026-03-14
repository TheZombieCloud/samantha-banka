import { useState, useEffect } from 'react'

const LetterAnimation = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Trigger the opening animation after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="letter-overlay">
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="envelope-flap"></div>
        <div className="envelope-back"></div>
        <div className="envelope-body"></div>
      </div>
      <div className={`letter ${isOpen ? 'open' : ''}`}>
        <div className="letter-content">
          <h2>HI BABY,</h2>
          <p>I know being apart is hard, but I want you to know that you're always in my heart, no matter the distance.</p>
          <p>Your my moon in my night sky. My sun during the day. My Jeff to my Epstein 😌. I'm so proud of you for taking care of yourself while I'm away. Each of these activities you've completed shows how strong my baby is.</p>
          <p>Remember, this time apart is temporary, but what we have is forever, SERIOUSLY! I miss you so so much and can't wait for you to be in my arms again.</p>
          <p>Keep being amazing, keep taking care of yourself, and know that I'm thinking of you every single day. Think of that cute smile, and those big titties</p>
          <p className="signature">All my love,<br />Always and forever, YOUR POOKIE ❤️</p>
        </div>
      </div>
      <button className="close-letter" onClick={onClose}>Close</button>
    </div>
  )
}

export default LetterAnimation
