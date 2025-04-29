import { useState } from 'react'
import { LoginPage } from './pages/LoginPage';
import { PostPage } from './pages/PostPage';

function App() {
  const [username, setUsername] = useState<string | null>(null);

  if (!username) {
    return <LoginPage onLogin = {setUsername} />;
  }

  return <PostPage username = {username} />;
}
export default App;
