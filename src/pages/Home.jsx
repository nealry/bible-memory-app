import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const verses = [
  { ref: 'John 3:16', text: 'For God so loved the world that he gave his one and only Son.' },
  { ref: 'Psalm 119:105', text: 'Your word is a lamp to my feet and a light to my path.' },
  { ref: 'Proverbs 3:5', text: 'Trust in the Lord with all your heart.' },
  { ref: 'Philippians 4:13', text: 'I can do all things through Christ who strengthens me.' },
  { ref: 'Joshua 1:9', text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.' },
  { ref: '1 Thessalonians 5:16', text: 'Rejoice always.' },
  { ref: 'Ephesians 4:32', text: 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.' },
  { ref: 'Colossians 3:23', text: 'Whatever you do, work at it with all your heart, as working for the Lord.' },
  { ref: 'Genesis 1:1', text: 'In the beginning God created the heavens and the earth.' },
  { ref: 'Psalm 56:3', text: 'When I am afraid, I put my trust in you.' },
  { ref: 'Luke 6:31', text: 'Do to others as you would have them do to you.' },
  { ref: 'Matthew 5:16', text: 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.' },
  { ref: '1 John 4:19', text: 'We love because he first loved us.' },
  { ref: 'Romans 8:28', text: 'And we know that in all things God works for the good of those who love him.' },
  { ref: 'Psalm 136:1', text: 'Give thanks to the Lord, for he is good. His love endures forever.' },
  { ref: 'Matthew 19:14', text: 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.' },
  { ref: 'Psalm 118:24', text: 'This is the day the Lord has made; let us rejoice and be glad in it.' },
  { ref: 'Psalm 23:1', text: 'The Lord is my shepherd; I lack nothing.' },
  { ref: 'Hebrews 13:8', text: 'Jesus Christ is the same yesterday and today and forever.' },
  { ref: 'Nehemiah 8:10', text: 'The joy of the Lord is your strength.' },
]

const pals = [
  { name: 'Sunny', emoji: '🐝' },
  { name: 'Pip', emoji: '🐣' },
  { name: 'Ember', emoji: '🐉' },
  { name: 'Hazel', emoji: '🐹' },
  { name: '???', emoji: '🐌' },
  { name: '???', emoji: '🐰' },
  { name: '???', emoji: '🦎' },
  { name: '???', emoji: '🦔' },
  { name: '???', emoji: '☁️' },
  { name: '???', emoji: '🐧' },
]

function Home() {
  const navigate = useNavigate()
  const [unlockedCount, setUnlockedCount] = useState(() => {
  return parseInt(localStorage.getItem('unlockedCount') || '0')
})
const [streak, setStreak] = useState(() => {
  return parseInt(localStorage.getItem('streak') || '0')
})
  const todayVerse = verses[2]

  return (
    <div style={{ maxWidth: 390, margin: '0 auto', padding: '0 0 32px' }}>
      <div style={{ textAlign: 'center', padding: '36px 20px 16px' }}>
        <div style={{ fontSize: 11, color: '#c4b0e8', letterSpacing: 6, marginBottom: 8 }}>✦ ✦ ✦ ✦ ✦ ✦ ✦</div>
        <div style={{ fontSize: 30, fontWeight: 800, color: '#7c5cbf', letterSpacing: -0.5 }}>
          Verse<span style={{ color: '#e07aae' }}>Pals</span>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#a08cc0', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>
          Learn God's Word, one verse at a time
        </div>
      </div>

      <div style={{ margin: '0 20px 16px', background: 'white', borderRadius: 16, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(180,160,220,0.25)' }}>
        <div style={{ fontSize: 28 }}>🔥</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#a08cc0', textTransform: 'uppercase', letterSpacing: 0.5 }}>Day streak</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#7c5cbf' }}>
            {streak} <span style={{ fontSize: 13, fontWeight: 600, color: '#b09ad0' }}>days in a row</span>
          </div>
        </div>
        <div style={{ fontSize: 22 }}>⭐</div>
      </div>

      <div style={{ margin: '0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: '#9078bf', marginBottom: 8 }}>
          <span>Your pals</span>
          <span>{unlockedCount} / {verses.length}</span>
        </div>
        <div style={{ background: 'rgba(180,160,220,0.2)', borderRadius: 99, height: 10, overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(90deg, #b48ee8, #e07aae)', height: '100%', width: `${(unlockedCount / verses.length) * 100}%`, borderRadius: 99 }} />
        </div>
      </div>

      <div style={{ fontSize: 11, fontWeight: 800, color: '#a08cc0', textTransform: 'uppercase', letterSpacing: 0.6, padding: '0 20px', marginBottom: 10 }}>
        Today's verse
      </div>
      <div style={{ margin: '0 20px 20px', background: 'white', borderRadius: 18, padding: 16, border: '1px solid rgba(180,160,220,0.25)' }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#c09ae0', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>
          {todayVerse.ref}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#4a3870', lineHeight: 1.5, marginBottom: 14 }}>
          "{todayVerse.text}"
        </div>
        <button
          onClick={() => navigate('/scramble', { state: { verse: todayVerse, verseIndex: 2 } })}
          style={{ width: '100%', background: 'linear-gradient(135deg, #b48ee8, #e07aae)', border: 'none', borderRadius: 12, padding: 12, fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: 'white', cursor: 'pointer' }}
        >
          ✦ Play word scramble
        </button>
      </div>

      <div style={{ fontSize: 11, fontWeight: 800, color: '#a08cc0', textTransform: 'uppercase', letterSpacing: 0.6, padding: '0 20px', marginBottom: 10 }}>
        Your collection
      </div>
      <div style={{ display: 'flex', gap: 10, padding: '0 20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {pals.map((pal, i) => {
          const unlocked = i < unlockedCount
          return (
            <div key={i} style={{ flexShrink: 0, width: 64, textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', margin: '0 auto 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: unlocked ? 28 : 20, background: unlocked ? 'white' : 'rgba(180,160,220,0.15)', border: '2px solid rgba(180,160,220,0.3)', filter: unlocked ? 'none' : 'grayscale(1)' }}>
                {pal.emoji}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: unlocked ? '#a08cc0' : '#c8bedd' }}>
                {unlocked ? pal.name : '???'}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '24px 20px 0' }}>
        {[
          { icon: '🏠', label: 'Home', active: true },
          { icon: '📖', label: 'Verses', active: false },
          { icon: '🌟', label: 'Pals', active: false },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, background: item.active ? 'linear-gradient(135deg, #b48ee8, #e07aae)' : 'rgba(180,160,220,0.15)' }}>
              {item.icon}
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: item.active ? '#7c5cbf' : '#a08cc0', textTransform: 'uppercase', letterSpacing: 0.4 }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
