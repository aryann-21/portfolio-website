/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/icons-white/linkedin-black.svg";
import GitHub from "../assets/icons-white/github-black.svg";
import LeetCode from "../assets/icons-white/leetcode.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div
      className="hero my-8 md:py-8 px-7 relative dark:bg-gray-900 dark:text-white"
      id="home"
    >
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:w-1/2"
        >
          <h1 className="text-primary dark:text-white text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M ARYAN SHARMA
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              "Coding the Future, One Line at a Time.",
              1000,
              "Building the Backbone of Online Presence.",
              1000,
              "Crafting Scalable and Robust Web Solutions.",
              1000,
              "We Code, You Succeed.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <p className="text-light dark:text-gray-400 text-xl my-8">
            A Focused <strong>Web Developer</strong> and{" "}
            <strong>Programmer</strong> building Websites and Web Applications
            that ensure seamless functionality and drive the success of the
            overall product.
          </p>
          <button className="btn py-4 px-16">PROJECTS</button>
        </motion.div>
      </div>
      {/* hero socials */}
      <div className="w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aryan-sharma-09bb93256/"
            className="p-3 hover:bg-slate-400 dark:hover:bg-gray-600 block rounded transition-all duration-500"
          >
            <img
              src={LinkedIn}
              dark:src={`data:image/svg+xml;utf8,
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="%23ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                </svg>`}
              alt="LinkedIn"
              className="w-10 h-10 dark:fill-white"
            />
          </a>
        </div>
        <div className="my-1">
          <a
            target="_blank"
            href="https://github.com/aryann-21/"
            className="p-3 hover:bg-slate-400 dark:hover:bg-gray-600 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="GitHub" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            target="_blank"
            href="https://leetcode.com/u/aryann_21/"
            className="p-3 hover:bg-slate-400 dark:hover:bg-gray-600 block rounded transition-all duration-500"
          >
            <img src={LeetCode} alt="LeetCode" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
