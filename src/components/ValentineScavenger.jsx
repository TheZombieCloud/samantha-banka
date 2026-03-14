import { useState } from 'react'
import './ValentineScavenger.css'
import HeartLetter from './HeartLetter'

function ValentineScavenger() {
  const [stage, setStage] = useState(0)
  const [answer, setAnswer] = useState('')
  const [foundItems, setFoundItems] = useState([])

  const clues = [
    {
      type: 'intro',
      title: 'Happy Valentine\'s Day! ❤️',
      message: 'I have a super duper surprise for you... but you\'ll have to find it! Are you ready for a little adventure baby?',
      button: 'Let\'s go!'
    },
    {
      type: 'riddle',
      clue: 'Find the hidden heart on this page...',
      hint: 'Look around carefully! Click on anything that catches your eye.',
      items: [
        { id: 1, emoji: '🌹', position: { top: '15%', left: '10%' } },
        { id: 2, emoji: '💝', position: { top: '40%', right: '15%' } },
        { id: 3, emoji: '❤️', position: { top: '70%', left: '20%' }, isCorrect: true },
        { id: 4, emoji: '🎈', position: { top: '25%', right: '25%' } },
      ]
    },
    {
      type: 'question',
      clue: 'What is our favorite thing to do together?',
      correctAnswers: ['watch shows', 'shows', 'cuddle', 'hug', 'kiss', 'fut', 'curry'],
      hint: 'Think about what makes us happiest...'
    },
    {
      type: 'puzzle',
      clue: 'Unscramble this',
      scrambled: 'UOY EVOL I',
      correctAnswer: 'i love you',
      hint: 'Read it backwards!'
    },
    {
      type: 'final',
      title: 'You found it!',
      message: 'Click the heart to open your letter...'
    }
  ]

  const currentClue = clues[stage]

  const handleAnswer = () => {
    if (currentClue.type === 'question') {
      if (currentClue.correctAnswers.some(ans =>
        answer.toLowerCase().includes(ans.toLowerCase())
      )) {
        setStage(stage + 1)
        setAnswer('')
      } else {
        alert('Not quite... try again!')
      }
    } else if (currentClue.type === 'puzzle') {
      if (answer.toLowerCase().trim() === currentClue.correctAnswer) {
        setStage(stage + 1)
        setAnswer('')
      } else {
        alert('Not quite... ' + currentClue.hint)
      }
    }
  }

  const handleItemClick = (item) => {
    if (item.isCorrect) {
      setFoundItems([...foundItems, item.id])
      setTimeout(() => setStage(stage + 1), 500)
    } else {
      setFoundItems([...foundItems, item.id])
    }
  }

  if (stage >= clues.length) {
    return <HeartLetter />
  }

  return (
    <div className="valentine-app">
      <div className="valentine-container">
        {currentClue.type === 'intro' && (
          <div className="intro-card">
            <h1 className="valentine-title">{currentClue.title}</h1>
            <p className="valentine-message">{currentClue.message}</p>
            <button className="btn-primary" onClick={() => setStage(stage + 1)}>
              {currentClue.button}
            </button>
          </div>
        )}

        {currentClue.type === 'riddle' && (
          <div className="riddle-container">
            <h2 className="clue-title">{currentClue.clue}</h2>
            <p className="valentine-hint">{currentClue.hint}</p>
            <div className="hunt-area">
              {currentClue.items.map(item => (
                <div
                  key={item.id}
                  className={`hunt-item ${foundItems.includes(item.id) ? 'found' : ''}`}
                  style={item.position}
                  onClick={() => handleItemClick(item)}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentClue.type === 'question' && (
          <div className="question-card">
            <h2 className="clue-title">{currentClue.clue}</h2>
            <input
              type="text"
              className="answer-input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
              placeholder="Type your answer..."
              autoFocus
            />
            <button className="btn-primary" onClick={handleAnswer}>
              Submit
            </button>
            <p className="valentine-hint">{currentClue.hint}</p>
          </div>
        )}

        {currentClue.type === 'puzzle' && (
          <div className="puzzle-card">
            <h2 className="clue-title">{currentClue.clue}</h2>
            <div className="scrambled-text">{currentClue.scrambled}</div>
            <input
              type="text"
              className="answer-input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
              placeholder="Type the unscrambled message..."
              autoFocus
            />
            <button className="btn-primary" onClick={handleAnswer}>
              Submit
            </button>
          </div>
        )}

        {currentClue.type === 'final' && (
          <div className="final-card">
            <h1 className="valentine-title">{currentClue.title}</h1>
            <p className="valentine-message">{currentClue.message}</p>
            <button className="btn-heart" onClick={() => setStage(stage + 1)}>
              ❤️ Open Heart ❤️
            </button>
          </div>
        )}

        <div className="valentine-progress">
          Step {stage + 1} of {clues.length}
        </div>
      </div>
    </div>
  )
}

export default ValentineScavenger
