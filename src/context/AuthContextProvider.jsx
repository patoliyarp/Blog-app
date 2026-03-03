import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';

export default function AuthContextProvider({ children }) {
  const LocalUser = JSON.parse(localStorage.getItem('user')) || false;
  const [isLogin, setIsLogin] = useState(LocalUser);

  useEffect(() => {
    if (isLogin == true) {
      localStorage.setItem('user', JSON.stringify(isLogin));
    } else if (isLogin == false) {
      localStorage.removeItem('user');
    }
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
