import React from "react";
import { FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="mx-auto px-6 ">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 md:text-5xl">Reach out to us</h1>
          <p className="max-w-xl mx-auto">
            Have a project in mind or need help bringing your ideas to life?
            Reach out to us, and let’s create something amazing together.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your name
                </label>

                <div className="flex items-center gap-4 py-2 pl-4 rounded border border-black">
                  <FaUser />

                  <input
                    id="name"
                    className="w-full outline-none"
                    type="text"
                    placeholder="enter your name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>

                <div className="flex items-center gap-4 py-2 pl-4 rounded border border-black">
                  <FaUser />

                  <input
                    id="email"
                    className="w-full outline-none"
                    type="email"
                    placeholder="enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 ">
              <label htmlFor="" className="block mb-2">
                your message
              </label>
              <textarea className="w-full h-40 px-6 py-6 outline-none border border-black rounded" />
            </div>

            <button className="bg-yellow-500 mt-6 px-6 py-2 rounded-full font-semibold cursor-pointer">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
