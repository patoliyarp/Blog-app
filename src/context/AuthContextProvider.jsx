import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';

export default function AuthContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState(
    () => localStorage.getItem('userEmail') || null
  );

  const isLogin = !!userEmail;

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem('userEmail', userEmail);
    } else {
      localStorage.removeItem('userEmail');
    }
  }, [userEmail]);

  return (
    <AuthContext.Provider value={{ isLogin, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
