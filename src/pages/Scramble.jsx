import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function Scramble() {
  const navigate = useNavigate()
  const location = useLocation()
  const verse = location.state?.verse

  const words = verse?.text.replace(/[.,;!?"]/g, '').split(' ') || []
  const [bank, setBank] = useState([])
  const [answer, setAnswer] = useState([])
  const [result, setResult] = useState(null)

  useEffect(() => {
    setBank(shuffle(words.map((w, i) => ({ word: w, id: i }))))
    setAnswer([])
    setResult(null)
  }, [verse])

  function pickWord(item) {
    setBank(bank.filter(b => b.id !== item.id))
    setAnswer([...answer, item])
  }

  function removeWord(item) {
    setAnswer(answer.filter(a => a.id !== item.id))
    setBank([...bank, item])
  }

  function checkAnswer() {
  const correct = answer.map(a => a.word).join(' ') === words.join(' ')
  if (correct) {
    const current = parseInt(localStorage.getItem('unlockedCount') || '0')
    const verseIndex = location.state?.verseIndex ?? 0
    if (verseIndex >= current) {
      localStorage.setItem('unlockedCount', String(verseIndex + 1))
    }
    const streak = parseInt(localStorage.getItem('streak') || '0')
    localStorage.setItem('streak', String(streak + 1))
  }
  setResult(correct ? 'correct' : 'wrong')
}

  function reset() {
    setBank(shuffle(words.map((w, i) => ({ word: w, id: i }))))
    setAnswer([])
    setResult(null)
  }

if (!verse) return <div style={{ padding: 20 }}>No verse: {JSON.stringify(location.state)}</div>

  return (
    <div style={{ maxWidth: 390, margin: '0 auto', padding: '32px 20px' }}>
      <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', fontSize: 13, fontWeight: 700, color: '#a08cc0', cursor: 'pointer', marginBottom: 24, fontFamily: 'Nunito, sans-serif' }}>
        ← Back
      </button>

      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#c09ae0', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>
          {verse.ref}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#a08cc0' }}>
          Put the words in the right order
        </div>
      </div>

      <div style={{ minHeight: 100, background: 'white', borderRadius: 16, padding: 16, marginBottom: 16, border: '2px dashed rgba(180,160,220,0.4)', display: 'flex', flexWrap: 'wrap', gap: 8, alignContent: 'flex-start' }}>
        {answer.length === 0 && (
          <div style={{ fontSize: 13, color: '#c8bedd', fontWeight: 600, width: '100%', textAlign: 'center', paddingTop: 24 }}>
            Tap words below to build the verse
          </div>
        )}
        {answer.map((item) => (
          <button key={item.id} onClick={() => removeWord(item)} style={{ background: 'linear-gradient(135deg, #b48ee8, #e07aae)', border: 'none', borderRadius: 10, padding: '8px 12px', fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: 'white', cursor: 'pointer' }}>
            {item.word}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24, minHeight: 48 }}>
        {bank.map((item) => (
          <button key={item.id} onClick={() => pickWord(item)} style={{ background: 'white', border: '2px solid rgba(180,160,220,0.4)', borderRadius: 10, padding: '8px 12px', fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: '#7c5cbf', cursor: 'pointer' }}>
            {item.word}
          </button>
        ))}
      </div>

      {result === null && answer.length === words.length && (
        <button onClick={checkAnswer} style={{ width: '100%', background: 'linear-gradient(135deg, #b48ee8, #e07aae)', border: 'none', borderRadius: 12, padding: 14, fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: 'white', cursor: 'pointer' }}>
          Check my answer ✦
        </button>
      )}

      {result === 'correct' && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#7c5cbf', marginBottom: 4 }}>Perfect!</div>
          <div style={{ fontSize: 13, color: '#a08cc0', fontWeight: 600, marginBottom: 20 }}>You unlocked a new pal!</div>
          <button onClick={() => navigate('/')} style={{ width: '100%', background: 'linear-gradient(135deg, #b48ee8, #e07aae)', border: 'none', borderRadius: 12, padding: 14, fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: 'white', cursor: 'pointer' }}>
            Back to home ✦
          </button>
        </div>
      )}

      {result === 'wrong' && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>💫</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#7c5cbf', marginBottom: 4 }}>Almost!</div>
          <div style={{ fontSize: 13, color: '#a08cc0', fontWeight: 600, marginBottom: 20 }}>Give it another go</div>
          <button onClick={reset} style={{ width: '100%', background: 'linear-gradient(135deg, #b48ee8, #e07aae)', border: 'none', borderRadius: 12, padding: 14, fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: 'white', cursor: 'pointer' }}>
            Try again ✦
          </button>
        </div>
      )}
    </div>
  )
}

export default Scramble