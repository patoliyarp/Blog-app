import BlogCard from './components/BlogCard';
import BlogForm from './components/BlogForm';
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogDetail from './components/BlogDetail.jsx';
import ScrollToTop from './components/ScrollTop.jsx';
import BlogPage from './components/BlogsPage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Login } from './components/Auth/Login.jsx';
import { ProtectedRoute } from './components/Auth/ProtectedRoute.jsx';
import About from './components/About.jsx';
import { ErrorFallback } from './components/FallbackError.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import BlogQuellForm from './components/BlogQuellForm.jsx';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to={'/'} />} />
            {/* protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/addblog" element={<BlogQuellForm />} />

              <Route path="/blogdetail/:id" element={<BlogDetail />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
