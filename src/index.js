import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Leva } from 'leva'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://lazofftech.com" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Lazoff.Tech
        <br />
        - 🥷
      </a>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Made May 21, 2024</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Leva collapsed />
  </>
)
