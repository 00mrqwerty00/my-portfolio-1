"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Biznet Networks",
    description: "Penestration Tester at at Biznet Networks Company",
    image: "/images/projects/biznet.jpg",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "ITEBA Batam Institute of Technology",
    description: "Penestration Tester at ITEBA Batam",
    image: "/images/projects/sertifikat-iteba.jpg",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Diskominfotik DKI Jakarta Sertifikat",
    description: "Penestration Tester at Diskominfotik DKI Jakarta",
    image: "/images/projects/sertifikat-jakarta.jpg",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Red Hat Certificated System Administrator",
    description: "Red Hat Academy",
    image: "/images/projects/redhat-sertifikat.jpg",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "REV Certificated Best Project MSIB 6 - IBM Academy",
    description: "Best capstone Project at IBM Academy",
    image: "/images/projects/best-project.jpg",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Alibaba Cloud",
    description: "Generative AI",
    image: "/images/projects/alibaba-cloud.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Penilaian dan Pengujian Kerentanan Aplikasi Web terhadap Diskominfo",
  //   description: "Project 5 description",
  //   image: "/images/projects/~~",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const CertificatedSection = () => {
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

  // Di atas return()
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects">
      <div className="px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between"></div>
      </div>
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Certificated
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
            {/* <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            /> */}

            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onImageClick={handleImageClick}
            />
          </motion.li>
        ))}
      </ul>
      <div className="px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between"></div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default CertificatedSection;
