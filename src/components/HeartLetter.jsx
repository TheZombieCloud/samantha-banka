import { useState } from 'react'
import './HeartLetter.css'

function HeartLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="heart-letter-container">
      <div className={`heart-wrapper ${isOpen ? 'open' : ''}`}>
        {!isOpen && (
          <div className="closed-heart" onClick={() => setIsOpen(true)}>
            <div className="heart-shape">
              <div className="heart-left"></div>
              <div className="heart-right"></div>
              <div className="heart-text">Click Me</div>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="opened-heart">
            <div className="heart-left-open"></div>
            <div className="heart-right-open"></div>
            <div className="letter-content">
              <h1 className="letter-title">My Dearest Valentine ❤️</h1>
              <div className="letter-body">
                <p>Hi baby. I just want you to know that you're seriously the best baby ever. You are so so tough, so admirable, such a adorable loving person. JUST THE BEST BABY EVER, and I can't believe I have you all to myself. These past few years have felt like a dream, with you at the center. Seriously, not sure how I got so lucky. I love so much about you, your smile, your gifts, that darn personality, your brains, how jacked you are. heheh. Hope for a great valetines together! Love you so much ppokie! </p>

                <p className="letter-signature">
                  All my love,<br/>
                  Forever yours ❤️ Alex ~ Your Pookie
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {!isOpen && (
        <p className="instruction">Click the heart to open your letter</p>
      )}
    </div>
  )
}

export default HeartLetter
