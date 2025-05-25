import { Link } from "react-router-dom";
import note from "../assets/notemaker.png";
import recipir from "../assets/recipiefinder.png";
import weather from "../assets/weather.png";
import digi from "../assets/digidiner.png";
import paper from "../assets/paperquill.jpeg";
import eco from "../assets/ecolog.png";

export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "The Paper Quill",
      description:
        "A blogging site where users can login, watch the latest blogs worldwide, upload blogs, comment on others' posts, and interact through blogs.",
      images: [paper],
      github: "https://github.com/dineshpatte/myblogapp",
      live: "#",
    },
    {
      id: "2",
      title: "EcoLog",
      description:
        "An environmental safety website to protect ecosystems. Users can login and input daily food and energy consumption and activities to get a carbon footprint score. Includes live charts, dashboards, and daily eco news.",
      images: [eco],
      github: "https://github.com/dineshpatte/ecoLog",
      live: "#",
    },
    {
      id: "3",
      title: "Digital Diner",
      description:
        "A full stack food ordering app where users can login, browse products, add food to cart, and checkout.",
      images: [digi],
      github: "https://6811ace39d9789d0a3be79e4--rad-donut-1ff832.netlify.app/",
      live: "#",
    },
    {
      id: "4",
      title: "Note Maker App",
      description:
        "A frontend app to create, archive, search, and organize notes by sections for easy access anytime.",
      images: [note],
      github: "https://github.com/dineshpatte/notemakerapp",
      live: "#",
    },
    {
      id: "5",
      title: "Recipe Finder",
      description:
        "An app using Recipe API to let users search for recipes and discover food ideas.",
      images: [recipir],
      github: "https://github.com/dineshpatte/recipiefinder",
      live: "#",
    },
    {
      id: "6",
      title: "Weather App",
      description:
        "A glassmorphism-designed weather app using Weather API for real-time weather updates.",
      images: [weather],
      github: "https://github.com/dineshpatte/Weather-app",
      live: "#",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-black rounded-2xl p-6 shadow-md border-2 border-white
                transition duration-300 hover:scale-[1.04] hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.3)]"
            >
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg bg-white/5 mb-5"
              />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white/90 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex justify-between text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white rounded px-3 py-1 text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  GitHub
                </a>
                <Link
                  to={`/projects/${project.id}`}
                  className="border border-white rounded px-3 py-1 text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
