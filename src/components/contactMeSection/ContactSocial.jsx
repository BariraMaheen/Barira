import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="http://www.linkedin.com/in/bariramaheen-springBootDeveloper
" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/BariraMaheen
" Icon={FiGithub} />
      
    </div>
  );
};

export default ContactSocial;
