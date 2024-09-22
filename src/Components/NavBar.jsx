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
        className={`container justify-between   z-50 p-5 transition-all duration-200 flex items-center fixed w-[90vw] m-auto  h-[10vh] 
           bg-transparent bg-opacity-50 backdrop-blur-md shadow-lg
        }`}
      >
        <div className="logo flex items-center">
          <h1 className="text-sm md:text-xl lg:text-2xl">Adnan Ashraf</h1>
        </div>
        <div className="socials flex">  
          <ul className="flex lg:text-3xl gap-5">
            <li>
              <a className="hover:text-gray-500 transition-all duration-200" href="https://github.com/Adnan2k5">
                <SlSocialGithub />
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition-all duration-200" href="https://www.instagram.com/a3nan._">
                <SlSocialInstagram/>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 transition-all duration-200" href="https://www.linkedin.com/in/adnan-ashraf-82320b280/">
                <SlSocialLinkedin/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
