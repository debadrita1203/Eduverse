import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;
