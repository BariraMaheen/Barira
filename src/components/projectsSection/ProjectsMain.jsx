import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import {Achievements} from "./Achivements"
import {Publications} from "./Publications"

const projects = [
  {
    name: "Contact Manager Application",
    year: "Mar 2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    Technology:'Spring Boot ,Angular, MY SQL',
    link: "https://github.com/BariraMaheen",
  },
  {
    name: "Online Book Store",
    year: "Sept 2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    Technology:'Spring Boot ,React, MY SQL',
    link: "https://github.com/BariraMaheen",
  },
  {
    name: "Food Delivery App",
    year: "Dec 2025",
    align: "right",
    image: "../../public/images/web5.jpg",
    Technology:'Spring Boot ,Angular',
    link: "https://github.com/BariraMaheen",
  },
  {
    name: "Mailing App with JWT",
    year: "Dec 2024",
    align: "left",
    image: "../../public/images/website-img-3.jpg",
    Technology:'Spring Boot ,React',
    link: "https://github.com/BariraMaheen",
  },
  {
    name: "Final Year Project (AI-Powered Project Management System)",
    year: "May 2025",
    align: "right",
    image: "../../public/images/website-img-4.jpg",
    Technology:'Spring Boot (microservice) ,Angular, MY SQL ',
    link: "https://github.com/BariraMaheen",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              Technology={project.Technology}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
      <div className="w-full h-1 mt-20 bg-lightBrown lg:block sm:hidden"></div> {/* divider only on lg */}
<Achievements />  {/* always show */}
<div className="w-full h-1 mt-20 bg-lightBrown hidden lg:block"></div> {/* divider only on lg */}
<Publications />  {/* always show */}


    </div>
  );
};

export default ProjectsMain;
