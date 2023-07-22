import React from "react";

const Contact = () => {
  return (
    <div classNameName="">
      <section className="bg-gradient-to-tr from-teal-700 via-sky-500 to-cyan-400">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  my-16">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-900  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-gray-500"
                placeholder="write your good name here"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border-2 border-red-300 focus:ring-primary-500 focus:border-gray-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-gray-300 bg-green-500 hover:bg-green-600 transition-all duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;