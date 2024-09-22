import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

export const NavBar = () => {
  const [activeLink, setLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
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
    <>
      <div
        className={`container justify-between   z-50 p-5 transition-all duration-200 flex items-center fixed w-[90vw] m-auto mt-2 h-[10vh] ${
          scrolled ? "bg-black backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="logo flex items-center">
          <h1 className="text-sm md:text-xl lg:text-2xl">Adnan Ashraf</h1>
        </div>
        <div className="tabs hidden md:flex">
          <ul className="flex gap-5 transition-all md:text-xl lg:text-2xl duration-200">
            <li>
              <Link className="hover:text-gray-500 transition-all duration-200" to="home">Home</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-all duration-200" to="skill">Skills</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-all duration-200" to="project">Project</Link>
            </li>
          </ul>
        </div>
        <div className="socials flex">
          <ul className="flex lg:text-3xl gap-5">
            <li>
              <a className="hover:text-gray-500 transition-all duration-200" href="#">
                <SlSocialGithub />
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition-all duration-200" href="#">
                <SlSocialInstagram/>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition-all duration-200" href="#">
                <SlSocialLinkedin/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
