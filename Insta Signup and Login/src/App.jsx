import { useState } from 'react'

import './App.css'

import Signup from './Signup'
import Login from './login'

function App() {
  //const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(true);

  const switchToSignup = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
    {showLogin ? (
      <Login switchToSignup={switchToSignup} />
    ) : (
      <Signup switchToLogin={switchToLogin} />
    )}
  </div>
  )
}

export default App
