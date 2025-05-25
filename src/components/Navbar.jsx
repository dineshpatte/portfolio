import { Link } from "react-router-dom"

export default function navbar() {
  return (
    <nav className="bg-black px-4 py-3 flex justify-between items-center border-b border-gray-800 shadow-md">
      <h1 className="text-xl font-bold text-white">Dinesh's Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
          Projects
        </Link>
      </div>
    </nav>
  )
}
