import linkedinIconLight from "../assets/icons-white/linkedin-white.png";
import githubIconLight from "../assets/icons-white/github-white.png";
import mailIconLight from "../assets/icons-white/email-white.svg";

const Footer = ({ darkMode }) => {
  return (
    <div
      className={`bg-black ${darkMode ? "dark:bg-gray-900" : ""} md:h-96 px-7`}
    >
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4
            className={`text-white ${
              darkMode ? "dark:text-gray-200" : ""
            } font-bold text-2xl tracking-wide`}
          >
            ARYAN SHARMA
          </h4>
          <p
            className={`mt-5 text-sm leading-7 ${
              darkMode ? "dark:text-gray-300" : "text-gray-300"
            }`}
          >
            A Focused Web Developer and Programmer building Websites and Web
            Applications that ensure seamless functionality and drive the
            success of the overall product.
          </p>
        </div>
        {/* social icons */}
        <div className="my-3">
          <h4
            className={`text-white ${
              darkMode ? "dark:text-gray-200" : ""
            } font-bold text-2xl tracking-wide`}
          >
            SOCIAL
          </h4>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/in/aryan-sharma-09bb93256/"
              className="ml-1"
            >
              <img src={linkedinIconLight} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://github.com/aryann-21/" className="ml-1">
              <img src={githubIconLight} alt="GitHub" className="w-7 h-7" />
            </a>
            {/* <a href="" className='ml-1'><img src={twitterIcon} alt="Twitter" className='w-7 h-7'/></a> */}
            <a href="mailto:aryan21sharmaa@gmail.com" className="ml-1">
              <img src={mailIconLight} alt="Blog" className="w-7 h-7" />
            </a>
            {/* <a href="" className='ml-1'><img src={youtubeIcon} alt="YouTube" className='w-7 h-7'/></a> */}
          </div>
        </div>
      </div>

      <hr
        className={`text-slate-50 opacity-30 ${
          darkMode ? "dark:text-gray-600" : "text-slate-50"
        } px-7`}
      />

      {/* copyright text */}
      <div>
        <p
          className={`md:my-10 py-10 md:py-0 text-sm leading-7 ${
            darkMode ? "dark:text-gray-300" : "text-gray-300"
          } text-center`}
        >
          © Copyright 2024. Made by{" "}
          <a href="mailto:aryan21sharmaa@gmail.com" className="underline">
            Aryan Sharma
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
