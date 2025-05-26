import { Link } from "react-router-dom"
import { Github, ExternalLink,Linkedin,Mail } from "lucide-react"
import profile from "../assets/profile.jpeg"
import paper from "../assets/paperquillhome.jpeg"
import eco from "../assets/ecologhome.png"
import digi from "../assets/digidiner.png"

export default function Home() {
  const projects = [
    {
      id: "1",
      title: "The Paper Quill",
      description: "A full-stack blogging platform where users can log in, read global blogs, upload their own, comment, and interact with others’ posts.",
      images: [paper],
      github: "https://github.com/dineshpatte/myblogapp",
      live: "#"
    },
    {
      id: "2",
      title: "EcoLog",
      description: "An ecosystem-aware tracker app where users log daily food, energy, and activity data to compute a carbon footprint score with live dashboards and eco tips.",
      images: [eco],
      github: "https://github.com/dineshpatte/ecoLog",
      live: "#"
    },
    {
      id: "3",
      title: "Digital Diner",
      description: "An online food ordering platform where users can browse food items, add them to cart, and checkout seamlessly with full authentication.",
      images: [digi],
      github: "https://6811ace39d9789d0a3be79e4--rad-donut-1ff832.netlify.app/",
      live: "https://6811ace39d9789d0a3be79e4--rad-donut-1ff832.netlify.app/"
    }
  ]

  const topProjects = projects.slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-white/30 object-cover shadow-lg"
          />
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Pattem Guru Dinesh</h1>
            <p className="text-lg lg:text-2xl mb-8 leading-relaxed">
              Hey, I’m Pattem Guru Dinesh — a CS undergrad and full stack web developer who loves crafting sleek, functional web apps. I enjoy turning ideas into real-world projects using the MERN stack. Currently diving into Java and Spring Boot to sharpen my backend skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                View All Projects <ExternalLink className="inline w-5 h-5" />
              </Link>
              <a
                href="https://github.com/dineshpatte"
                className="border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Github className="inline w-5 h-5 mr-2" /> GitHub
              </a>
              <a
  href="https://www.linkedin.com/in/pattem-dinesh-44101b342"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
>
  <div className="flex items-center justify-center gap-2">
    <Linkedin className="w-5 h-5" />
 <p className="mt-1">Linkedin</p>
  </div>
</a>


              <a
  href="mailto:009pattemdinesh@gmail.com"
  className="border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
  aria-label="Send email to Pattem Guru Dinesh"
>
  <Mail className="w-5 h-5 mr-2" />
  Mail
</a>


            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg">Some of my recent work that showcases my skills</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {topProjects.map((project) => (
    <div
      key={project.id}
      className="border border-white/20 p-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
    >
      <div className="mb-4">
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg bg-black border border-white/30"
        />
      </div>
      <h3 className="text-xl font-bold mb-3 underline underline-offset-4">{project.title}</h3>
      <p className="leading-relaxed mb-6 flex-grow">{project.description}</p>
      <div className="flex gap-3 mt-auto">
        <Link
          to={`/projects/${project.id}`}
          className="flex-1 border border-white/30 py-2.5 px-4 rounded-lg font-medium transition-transform duration-300 transform hover:scale-105 text-center"
        >
          View Project <ExternalLink className="inline w-4 h-4" />
        </Link>
        <a
          href={project.github}
          className="p-2.5 border border-white/30 rounded-lg transition-transform duration-300 transform hover:scale-105"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg">Technologies I use to bring ideas to life</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Tailwind CSS", "Chart.js","java","axios","CSS","Vite"
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/30 px-6 py-3 rounded-lg font-medium transition-transform duration-300 transform hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
