import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  const [username, setUsername] = useState('')

  return (
    <div className="min-h-screen">
      {username ? <HomePage username={username} /> : <LoginPage setUsername={setUsername} />}
    </div>
  )
}

export default App
