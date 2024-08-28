import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { SlSocialGithub, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

export const NavBar = () => {
  const [activeLink, setLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateLink = (value) => {
    setLink(value);
  };

  return (
    <div className={`nav-container  z-50 p-5  transition-all duration-100 w-screen fixed ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'} flex justify-between items-center`}>
      <div className="logo text-sm text-center md:text-2xl">Adnan Ashraf</div>
      <div className="pages flex-1  md:ml-20">
        <ul className="flex justify-start gap-5 md:gap-10 text-sm md:text-lg">
          <li>
            <Link
              onClick={() => onUpdateLink("home")}
              className={`${activeLink === 'home' ? 'border-b-2 border-gray-100' : ""} hover:text-cyan-300 transition-all duration-250`}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => onUpdateLink("skill")}
              className={`${activeLink === 'skill' ? 'border-b-2 border-gray-100' : ""} hover:text-cyan-300 transition-all duration-250`}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => onUpdateLink("project")}
              className={`${activeLink === 'project' ? 'border-b-2 border-gray-100' : ""} hover:text-cyan-300 transition-all duration-250`}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="social flex gap-5 p-2 justify-center items-center">
        <a
          href="https://github.com/Adnan2k5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[20px] md:w-[25px] transition-all duration-300 hover:text-cyan-300"
        >
          <SlSocialGithub className="text-xl md:text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/adnan-ashraf-82320b280/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[20px] md:w-[25px] transition-all duration-300 hover:text-cyan-300"
        >
          <SlSocialLinkedin className="text-xl md:text-2xl" />
        </a>
        <a
          href="https://instagram.com/a3nan._"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[20px] md:w-[25px] transition-all duration-300 hover:text-cyan-300"
        >
          <SlSocialInstagram className="text-xl md:text-2xl" />
        </a>
      </div>
    </div>
  );
};

