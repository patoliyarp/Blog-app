import { createContext, useContext } from 'react';

export const BlogContext = createContext();

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('wrap auth context to use it value');
  }
  return context;
}
