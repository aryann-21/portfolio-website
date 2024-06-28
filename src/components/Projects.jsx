import React, { useState, useEffect } from "react";
import Headline from "../shared/Headline";
import projects from "../../public/projects.js";

const Projects = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      if (JSON.parse(savedMode)) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    const projectsElements = document.getElementsByClassName("projects");
    Array.from(projectsElements).forEach((element) => {
      if (darkMode) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    });
  }, [darkMode]);

  return (
    <div
      className={`px-36 mx-auto md:py-8 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      id="projects"
    >
      <Headline
        title={"PROJECTS"}
        className="dark:text-gray-100"
        subtitle={
          "Here you will find some of the personal projects that I created with each project containing its github repository"
        }
      />

      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="projects items-center gap-5 my-20">
              <div className="">
                <img src={project.image} alt="" className="" />
              </div>
              <div className="md:w-10/12 text-center md:text-left px-2">
                <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
                <p className="text-lg leading-6 mb-6">{project.description}</p>
                <button className="btn py-3 px-7">Case Study</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
