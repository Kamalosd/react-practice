import React from "react";
import { FaPen } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "I build modern and responsive websites.",
    },
    {
      title: "App Development",
      description: "I create user-friendly mobile applications.",
    },
    {
      title: "UI/UX Design",
      description: "I design clean and attractive user interfaces.",
    },
    {
      title: "Digital Marketing",
      description: "I help businesses grow their online presence.",
    },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">how can i help u?</h1>

          <p className="text-xl mx-auto max-w-2xl">launching a new business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-12 border border-amber-400 flex flex-col md:flex-row items-center gap-6 hover:scale-105 transition duration-150 cursor-pointer"
            >
              <div className=" w-15 h-15 border border-y-amber-500 rounded-full flex items-center justify-center">
                <FaPen className="w-7 h-7 text-yellow-500 " />
              </div>
              <div className="text-center ">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>

                <p className="text-xl">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
