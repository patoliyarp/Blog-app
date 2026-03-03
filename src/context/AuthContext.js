import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('wrap auth context to use it value');
  }
  return context;
}
