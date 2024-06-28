import Headline from "../shared/Headline";

const Contact = () => {
  return (
    <div
      className="mx-auto -mt-1 px-7 contact dark:bg-gray-900 dark:text-white" // Dark mode background and text
      id="contact"
    >
      <Headline
        title="CONTACT"
        subtitle={
          <div className="dark:text-gray-100">
            Feel free to Contact me at{" "}
            <a
              className="text-purple-700 dark:text-purple-400"
              href="mailto:aryan21sharmaa@gmail.com"
            >
              aryan21sharmaa@gmail.com
            </a>{" "}
            or by submitting the form below and I will get back to you as soon
            as possible.
          </div>
        }
      />

      <div className="md:w-2/3 mx-auto bg-white dark:bg-gray-800 md:px-16 px-8 py-8 rounded mb-32 shadow-md">
        {" "}
        {/* Dark mode background */}
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold dark:text-gray-200"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded" // Dark mode input styles
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold dark:text-gray-200"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded" // Dark mode input styles
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold dark:text-gray-200"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              cols="80"
              rows="10"
              placeholder="Enter Your Message"
              className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded" // Dark mode textarea styles
            ></textarea>
          </div>
          <button className="btn px-14 py-4 bg-purple-700 text-white dark:bg-purple-500 rounded shadow-sm hover:bg-purple-600 dark:hover:bg-purple-400 transition-colors">
            Submit
          </button>{" "}
          {/* Dark mode button styles */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
