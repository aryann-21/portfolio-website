/* eslint-disable react/no-unescaped-entities */

import Headline from "../shared/Headline";
import skills from "../../public/skills.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div
      className="px-16 -my-24 mx-auto dark:bg-gray-900 dark:text-gray-100"
      id="about"
    >
      <div className="dark:text-gray-100">
        <Headline
          title={"ABOUT ME"}
          subtitle={
            "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
          }
        />
      </div>

      {/* About content */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* left side */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 my-8"
        >
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] dark:text-gray-300 mb-8">
            <p className="mb-5">
              I am a 3rd year B.Tech student at NIT Jalandhar, specializing in
              Computer Science and Engineering. A dedicated{" "}
              <strong>web developer</strong> and <strong>programmer</strong>, I
              am passionate about crafting dynamic and ensuring seamless
              functionality and experiences.
            </p>
            <p className="mb-5">
              Furthermore, I actively engage in{" "}
              <strong>competitive programming</strong>, continuously honing my
              problem-solving skills and algorithmic thinking.
            </p>
            <p className="mb-5">
              I'm open to <strong>Job</strong> opportunities where I can
              contribute, learn, and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to{" "}
              <strong>contact</strong> me.
            </p>
          </div>
        </motion.div>

        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2 my-8"
        >
          <h4 className="text-2xl font-bold mb-8">My Skills</h4>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-300 dark:bg-gray-700 text-light dark:text-white py-2 px-4 rounded"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
