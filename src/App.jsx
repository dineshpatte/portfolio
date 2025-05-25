import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/navbar'
import Projects from './pages/projects'
import ProjectDetail from './pages/projectsDetail'
import Clone from './pages/clone'

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
