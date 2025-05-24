"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Well Architect SIEM Implementation - SOC",
    description: "Project 1 description",
    image: "/images/projects/~~",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title:
      "Optimization of System Monitoring through Centralized Log Server with Rsyslog and LogAnalyzer Project Completion During Independent Study Program Batch 6 on IBM Academy : Hybrid Clouds & Red Hat",
    description: "Project 2 description",
    image: "/images/projects/~~",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Penilaian dan Pengujian Kerentanan Aplikasi Web terhadap Diskominfo",
    description: "Project 3 description",
    image: "/images/projects/~~",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Application and Network Security Engineering",
    description: "Project 4 description",
    image: "/images/projects/~~",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/~~",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/~~",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-col items-center justify-center gap-2 py-6 text-white sm:flex-row">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cyber Security"
          isSelected={tag === "Cyber Security"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;


