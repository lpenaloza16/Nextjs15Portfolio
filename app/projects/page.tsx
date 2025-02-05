// app/projects/page.tsx
import Header from "@/components/ui/header";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects | Portfolio",
  description:
    "Explore my portfolio of websites, applications, and software projects.",
};

interface Project {
  title: string;
  date: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  technologies?: string[];
}

interface ProjectCardProps extends Project {}

const ProjectCard = ({
  title,
  date,
  description,
  liveUrl,
  githubUrl,
  technologies,
}: ProjectCardProps) => (
  <div className="bg-gray-800 rounded-lg shadow-lg text-white overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
    {/* Image Container */}
    <div className="relative h-48 w-full bg-gray-700">
      <Image
        src="/images/preview.jpeg"
        alt={`Preview of ${title}`}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    {/* Content Container - Using flex-col and flex-grow to push buttons to bottom */}
    <div className="p-6 flex flex-col flex-grow">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-400">{date}</span>
      </div>

      {/* Description - Set fixed height with overflow */}
      <p className="text-gray-400 mb-4 h-[80px] overflow-y-auto">
        {description}
      </p>

      {/* Technologies */}
      {technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Buttons - Pushed to bottom and centered */}
      <div className="flex justify-center space-x-4 mt-auto">
        <Link
          href={liveUrl}
          className="btn text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded shadow-sm transition-colors duration-150 inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${title}`}
        >
          Live Preview
          <span className="ml-1" aria-hidden="true">
            →
          </span>
        </Link>
        <Link
          href={githubUrl}
          className="btn text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded shadow-sm transition-colors duration-150 inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code of ${title} on GitHub`}
        >
          GitHub Repo
          <span className="ml-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </div>
  </div>
);

const projects: Project[] = [
  {
    title: "Socki.io Chat",
    date: "March 2024",
    description:
      "Developed a real-time chat and document collaboration application, enhancing team productivity with instant communication and file exchanges.",
    liveUrl: "#",
    githubUrl: "https://github.com/lpenaloza16/socketChat",
    technologies: ["Next.js", "Socket.io", "TypeScript"],
  },
  {
    title: "Discord Bot",
    date: "November 2023",
    description:
      "Enhanced server management and user interactions on Discord through a custom bot, improving moderation efficiency.",
    liveUrl: "#",
    githubUrl: "https://github.com/lpenaloza16/discord-bot",
    technologies: ["Node.js", "Discord.js"],
  },
  {
    title: "Infinity Scroll Application",
    date: "July 2023",
    description:
      "Created a dynamic image display application with seamless loading, focusing on optimized content rendering.",
    liveUrl: "#",
    githubUrl: "https://github.com/lpenaloza16/infinity_scroll",
    technologies: ["React", "Intersection Observer"],
  },
  {
    title: "Vanilla Task Manager",
    date: "March 2023",
    description:
      "Implemented a task management tool that enhanced user productivity by streamlining task tracking and management.",
    liveUrl: "#",
    githubUrl: "https://github.com/lpenaloza16/taskManager",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mastermind - Flash Cards",
    date: "May 2022",
    description:
      "Developed an educational tool using the MERN stack to facilitate efficient study practices through digital flashcards.",
    liveUrl: "#",
    githubUrl: "https://github.com/lpenaloza16/mastermind_react_card_engine",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Headache Tracker",
    date: "April 2022",
    description:
      "Engineered a cross-platform application to track and visualize headache patterns, enhancing user engagement with optimized UI/UX.",
    liveUrl: "#",
    githubUrl: "https://github.com/lpenaloza16/head_ache_tracker",
    technologies: ["React Native", "Firebase"],
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 min-h-screen">
        <section className="relative" aria-labelledby="projects-heading">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <h1
              id="projects-heading"
              className="text-3xl font-bold text-center mb-6 text-white"
            >
              My Projects
            </h1>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              A collection of my latest projects, showcasing my skills in web
              development and software engineering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                className="btn text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded shadow-sm transition-colors duration-300 inline-flex items-center"
                href="/contact"
                aria-label="Contact me about projects"
              >
                Interested in Collaboration?
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
