import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

// export function ProtectedRoute({ children }) {
//   const { isLogin } = useAuthContext();
//   if (isLogin) {
//     return children;
//   }
//   return <Navigate to="/" replace />;
//   //   return isLogin ? children : <Navigate to="/" />;
// }
export function ProtectedRoute() {
  const { isLogin } = useAuthContext();
  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
  //   return isLogin ? children : <Navigate to="/" />;
}
