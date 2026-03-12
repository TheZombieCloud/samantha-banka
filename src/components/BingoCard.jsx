import { useState, useEffect } from 'react'

const activities = [
  ["Take a warm bath", "Listen to your favorite playlist", "Call a friend", "Read a chapter of a book", "Go for a walk"],
  ["Watch a comfort show", "Make your favorite snack", "Practice deep breathing", "Journal your thoughts", "Do some stretches"],
  ["Create something artistic", "Drink a cup of tea", "FREE", "Light a candle", "Play a game"],
  ["Organize a small space", "Look at photos", "Take a nap", "Do a puzzle", "Try meditation"],
  ["Watch cute animal videos", "Cook a new recipe", "Dance to music", "Practice gratitude", "Pamper yourself"]
]

const BingoCard = ({ onComplete }) => {
  const [completedCells, setCompletedCells] = useState(() => {
    // Initialize with center cell (FREE) as completed
    const initial = Array(5).fill(null).map(() => Array(5).fill(false))
    initial[2][2] = true
    return initial
  })
  const [hasWon, setHasWon] = useState(false)

  const toggleCell = (row, col) => {
    // Don't allow toggling the free space
    if (row === 2 && col === 2) return

    // Don't allow toggling if already won
    if (hasWon) return

    const newCompleted = completedCells.map(r => [...r])
    newCompleted[row][col] = !newCompleted[row][col]
    setCompletedCells(newCompleted)
  }

  const checkForWin = () => {
    // Check rows
    for (let row = 0; row < 5; row++) {
      if (completedCells[row].every(cell => cell)) {
        return true
      }
    }

    // Check columns
    for (let col = 0; col < 5; col++) {
      if (completedCells.every(row => row[col])) {
        return true
      }
    }

    // Check diagonal (top-left to bottom-right)
    if (completedCells.every((row, i) => row[i])) {
      return true
    }

    // Check diagonal (top-right to bottom-left)
    if (completedCells.every((row, i) => row[4 - i])) {
      return true
    }

    return false
  }

  useEffect(() => {
    if (!hasWon && checkForWin()) {
      setHasWon(true)
      onComplete()
    }
  }, [completedCells, hasWon, onComplete])

  return (
    <div className="bingo-page">
      <div className="bingo-container">
        <h1>Self-Soothing Bingo</h1>
        <p className="subtitle">Complete any line to unlock a special message</p>

        <div className="bingo-grid">
          {activities.map((row, rowIndex) => (
            row.map((activity, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`bingo-cell ${completedCells[rowIndex][colIndex] ? 'completed' : ''} ${rowIndex === 2 && colIndex === 2 ? 'free' : ''}`}
                onClick={() => toggleCell(rowIndex, colIndex)}
              >
                <span>{activity}</span>
                {completedCells[rowIndex][colIndex] && <div className="checkmark">✓</div>}
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  )
}

export default BingoCard
