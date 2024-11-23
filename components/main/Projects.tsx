import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Space%20Portfolio%20Assets/maxresdefault.jpg"
          title="SORTING ALGORITHM VISUALIZER"
          description="A Sorting Algorithm Visualizer graphically demonstrates how different sorting algorithms organize data step by step."
        />
        <ProjectCard
          src="/Space%20Portfolio%20Assets/STUDENT DATA HUB.png"
          title="STUDENT DATA HUB"
          description="Student Data Hub efficiently manages student records by allowing users to insert, delete, and update entries seamlessly."
        />
        <ProjectCard
          src="/Space%20Portfolio%20Assets/PRIME CART.png"
          title="PRIME CART:An e-commerce website"
          description="An e-commerce website provides a platform for users to browse, search, and purchase products or services online.."
        />
      </div>
    </div>
  );
};

export default Projects;