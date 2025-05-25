import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Clone from './pages/Clone';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
         <Route path="/clone" element={<Clone />} />
      </Routes>
    </div>
  )
}

export default App
