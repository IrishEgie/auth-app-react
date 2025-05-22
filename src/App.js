// src/App.js
import React, { useState } from 'react';
import { SplitScreen } from './components/layout/SplitScreen';
import { AuthSide } from './components/layout/AuthSide';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SplitScreen
      leftContent={<AuthSide isLogin={isLogin} />}
      rightContent={
        isLogin ? (
          <Login switchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup switchToLogin={() => setIsLogin(true)} />
        )
      }
    />
  );
}

export default App;