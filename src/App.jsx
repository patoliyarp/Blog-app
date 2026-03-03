import BlogCard from './components/BlogCard';
import BlogForm from './components/BlogForm';
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogDetail from './components/BlogDetail.jsx';
import ScrollToTop from './components/ScrollTop.jsx';
import BlogPage from './components/BlogsPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Auth/Login.jsx';
import { ProtectedRoute } from './components/Auth/ProtectedRoute.jsx';
function App() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/addblog" element={<BlogForm />} />

            <Route path="/blogdetail/:id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
