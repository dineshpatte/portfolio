// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import paper1 from "../assets/paperquillhome.jpeg";
import paper2 from "../assets/paperquill.jpeg";
import paper4 from "../assets/paperquillexplore.jpeg";

import eco1 from "../assets/ecolog.png";
import eco2 from "../assets/ecologhome.png";

import digi1 from "../assets/digidiner.png";
import digi2 from "../assets/digidinersummary.png";

import note1 from "../assets/notemaker.png";
import note2 from "../assets/notemaker2.png";

import recipir1 from "../assets/recipiefinder.png";
import recipir2 from "../assets/recipiefinder2.png";

import weather1 from "../assets/weather.png";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = [
    {
      id: "1",
      title: "The Paper Quill",
      description:
        "A blogging site where users can login, watch the latest blogs worldwide, upload blogs, comment on others' posts, and interact through blogs.",
      detailedDescription: (
        <>
          <p className="mb-4">
            The Paper Quill is a modern blogging platform allowing users to:
          </p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-black dark:text-white">
            <li>Create an account and login securely.</li>
            <li>Browse and read the latest global blog posts.</li>
            <li>Upload and publish their own blog posts with rich text formatting.</li>
            <li>Comment on posts to engage with other users.</li>
            <li>Interact via likes and shares to boost content visibility.</li>
          </ol>
        </>
      ),
      techStack: [
        "React.js",
        "JavaScript",
        "Node.js & Express.js",
        "MongoDB",
        "JWT & Bcrypt",
        "Axios",
        "Tailwind CSS",
      ],
      images: [paper1, paper2, paper4],
      github: "https://github.com/dineshpatte/myblogapp",
      live: "#",
    },
    {
      id: "2",
      title: "EcoLog",
      description:
        "An environmental safety website to protect ecosystems. Users can login and input daily food and energy consumption and activities to get a carbon footprint score. Includes live charts, dashboards, and daily eco news.",
      detailedDescription: (
        <>
          <p className="text-black dark:text-white">
            EcoLog is a comprehensive sustainability tracker with features including:
          </p>
          <ul className="list-disc list-inside mb-4 text-black dark:text-white">
            <li>User authentication and personalized dashboards.</li>
            <li>Daily input forms for food, energy consumption, and transportation activities.</li>
            <li>Real-time calculation of carbon footprint based on user inputs.</li>
            <li>Interactive charts and graphs for tracking environmental impact over time.</li>
            <li>Daily eco-newsfeed to keep users informed on environmental issues.</li>
          </ul>
        </>
      ),
      techStack: [
        "React.js",
        "JavaScript",
        "Node.js & Express.js",
        "MongoDB",
        "JWT & Bcrypt",
        "Axios",
        "Chart.js",
        "Tailwind CSS",
      ],
      images: [eco1, eco2],
      github: "https://github.com/dineshpatte/ecoLog",
      live: "#",
    },
    {
      id: "3",
      title: "Digital Diner",
      description:
        "A full stack food ordering app where users can login, browse products, add food to cart, and checkout.",
      detailedDescription: (
        <>
          <p className="text-black dark:text-white">Digital Diner provides a seamless online food ordering experience:</p>
          <ol className="list-decimal list-inside mb-4 text-black dark:text-white">
            <li>User registration and secure login.</li>
            <li>Product catalog with categories and search functionality.</li>
            <li>Add items to cart with quantity adjustments.</li>
            <li>Checkout process with payment integration.</li>
            <li>Order history and status tracking.</li>
          </ol>
        </>
      ),
      techStack: [
        "React.js",
        "JavaScript",
        "Node.js & Express.js",
        "MongoDB",
        "Local Storage",
        "Tailwind CSS",
      ],
      images: [digi1, digi2],
      github: "https://6811ace39d9789d0a3be79e4--rad-donut-1ff832.netlify.app/",
      live: "#",
    },
    {
      id: "4",
      title: "Note Maker App",
      description:
        "A frontend app to create, archive, search, and organize notes by sections for easy access anytime.",
      detailedDescription: (
        <>
          <p className="text-black dark:text-white">Note Maker helps users stay organized with these capabilities:</p>
          <ul className="list-disc list-inside mb-4 text-black dark:text-white">
            <li>Create and edit notes with a rich text editor.</li>
            <li>Organize notes into customizable sections.</li>
            <li>Search notes quickly with keywords.</li>
            <li>Archive or delete notes as needed.</li>
          </ul>
        </>
      ),
      techStack: ["React.js", "JavaScript", "Tailwind CSS"],
      images: [note1, note2],
      github: "https://github.com/dineshpatte/notemakerapp",
      live: "#",
    },
    {
      id: "5",
      title: "Recipe Finder",
      description:
        "An app using Recipe API to let users search for recipes and discover food ideas.",
      detailedDescription: (
        <>
          <p className="text-black dark:text-white">Recipe Finder offers:</p>
          <ol className="list-decimal list-inside mb-4 text-black dark:text-white">
            <li>Search recipes by ingredients, cuisine, or dietary restrictions.</li>
            <li>View detailed recipe instructions with ingredient lists.</li>
            <li>Save favorite recipes for quick access.</li>
            <li>Responsive design for mobile and desktop use.</li>
          </ol>
        </>
      ),
      techStack: ["React.js", "JavaScript", "HTML", "Tailwind CSS"],
      images: [recipir1, recipir2],
      github: "https://github.com/dineshpatte/recipiefinder",
      live: "#",
    },
    {
      id: "6",
      title: "Weather App",
      description:
        "A glassmorphism-designed weather app using Weather API for real-time weather updates.",
      detailedDescription: (
        <>
          <p className="text-black dark:text-white">This Weather App features:</p>
          <ul className="list-disc list-inside mb-4 text-black dark:text-white">
            <li>Real-time weather data based on user location.</li>
            <li>Hourly and weekly forecasts with detailed info.</li>
            <li>Glassmorphism UI for a modern aesthetic.</li>
            <li>Search weather by city.</li>
          </ul>
        </>
      ),
      techStack: ["React.js", "JavaScript", "HTML", "Tailwind CSS"],
      images: [weather1],
      github: "https://github.com/dineshpatte/weather-app",
      live: "#",
    },
  ];

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="p-6 text-center bg-white dark:bg-black min-h-screen flex flex-col justify-center items-center">
        <p className="mb-4 text-lg font-semibold text-black dark:text-white">Project not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-black text-white rounded border border-white hover:bg-white hover:text-black transition duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
  <div className="p-6 max-w-9xl mx-auto min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <button
      onClick={() => navigate(-1)}
      className="mb-6 px-5 py-2 border border-white bg-black text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300"
      aria-label="Back to Projects"
    >
      &larr; Back to Projects
    </button>

    <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-center">{project.title}</h2>

    {/* Main Thumbnail Image */}
    {project.images.length > 0 && (
      <div className="mb-10 flex justify-center">
        <img
          src={project.images[0]}
          alt={`${project.title} main screenshot`}
          className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-3xl border-2 border-white shadow-xl object-cover max-h-[700px]"
        />
      </div>
    )}

    {/* Secondary Images */}
    {project.images.length > 1 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {project.images.slice(1).map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-md hover:shadow-lg hover:border-white transition duration-300 h-60 sm:h-72 md:h-80"
          >
            <img
              src={src}
              alt={`${project.title} screenshot ${idx + 2}`}
              className="w-full  object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    )}

    {/* Description */}
    <p className="mb-6 text-lg text-center">{project.description}</p>

    {/* Detailed Overview */}
    <div className="mb-10">{project.detailedDescription}</div>

    {/* Tech Stack */}
    <div className="mb-10 flex flex-wrap justify-center gap-4">
      {project.techStack?.map((tech, idx) => (
        <button
          key={idx}
          className="px-4 py-2 bg-black text-white border border-white rounded-md hover:bg-white hover:text-black transition duration-300 font-medium select-none"
          type="button"
        >
          {tech}
        </button>
      ))}
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap justify-center gap-6">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-white rounded text-white bg-black font-semibold hover:bg-white hover:text-black transition duration-300"
      >
        View Source
      </a>
      <button
        onClick={() => navigate("/clone")}
        className="px-6 py-3 border border-white rounded text-white bg-black font-semibold hover:bg-white hover:text-black transition duration-300"
        type="button"
      >
        Clone Project
      </button>
    </div>
  </div>
);

}
