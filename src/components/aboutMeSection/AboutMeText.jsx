import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I'm Barira Maheen, a Full stack developer with a strong focus on technologies like Angular React, along with deep expertise in building both monolithic and microservice-based applications. I specialize in applying the MVC architecture to create scalable, maintainable systems, and I integrate AI features to enhance user experience and functionality.

      My work focuses on developing robust, real-world applications that integrate modern technologies and AI-driven features, delivering intelligent and responsive user experiences. 

Driven by a passion for innovation and continuous learning, I enjoy solving complex challenges and building solutions that make a real impact.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
