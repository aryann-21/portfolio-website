import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/pfp.jpg";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="w-full relative z-[100]">
      <div className="md:flex items-center justify-between bg-white dark:bg-gray-800 py-4 md:px-14 px-7 fixed top-0 left-0 right-0 shadow-sm dark:shadow-lg">
        {/* logo section */}
        <div className="font-bold text-xl tracking-wide cursor-pointer flex items-center gap-1">
          <img
            src={profileImg}
            alt=""
            className="md:w-12 md:h-12 w-10 h-10 rounded-[25px]"
          />
          <span className="text-primary dark:text-white hover:text-secondary md:ml-3 ml-2">
            ARYAN SHARMA
          </span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-primary dark:text-white"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center items-center md:pb-0 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 bg-white dark:bg-gray-800 ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              className="md:ml-8 md:my-0 mt-5 font-semibold text-xl border-b-2 md:border-b-0 text-right px-7 md:px-4 pb-4 md:pb-0 cursor-pointer"
              key={link.name}
            >
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                className="text-light dark:text-white hover:text-secondary duration-500 uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-10 border-2 border-black dark:border-white shadow-md py-2 px-3 rounded-md font-semibold dark:text-white"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
