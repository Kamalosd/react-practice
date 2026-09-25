import React from "react";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";
import pic7 from "../assets/pic7.jpeg";
import pic8 from "../assets/pic8.jpeg";

const Work = () => {
  const workItems = [
    {
      title: "Website Development",
      description: "Modern and responsive website development.",
      image: pic5,
    },
    {
      title: "E-commerce Website",
      description: "Complete e-commerce website for businesses.",
      image: pic6,
    },
    {
      title: "Portfolio Website",
      description: "Clean and professional portfolio websites.",
      image: pic7,
    },
    {
      title: "Portfolio Website",
      description: "Clean and professional portfolio websites.",
      image: pic8,
    },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">our latest work</h1>

          <p className="max-w-2xl mx-auto text-xl">we are launching new work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {workItems.map((work, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-amber-500 hover:scale-105 transition duration-200 cursor-pointer"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8 mt-6">
                <h2 className="text-2xl font-bold mb-4">{work.title}</h2>

                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
