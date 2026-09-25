import React from "react";

import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpeg";
import images1 from "../assets/images1.jpeg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";
import pic7 from "../assets/pic7.jpeg";
import pic8 from "../assets/pic8.jpeg";

const Teams = () => {
  const teams = [
    {
      name: "Kamal Das",
      role: "Full Stack Developer",
      image: pic2,
    },
    {
      name: "Rahul",
      role: "UI/UX Designer",
      image: pic3,
    },
    {
      name: "Amit",
      role: "Backend Developer",
      image: images1,
    },
    {
      name: "Priya",
      role: "Frontend Developer",
      image: pic4,
    },
    {
      name: "Rohan",
      role: "DevOps Engineer",
      image: pic5,
    },
    {
      name: "Sneha",
      role: "Product Designer",
      image: pic6,
    },
    {
      name: "Arjun",
      role: "Software Engineer",
      image: pic7,
    },
    {
      name: "Ananya",
      role: "Project Manager",
      image: pic8,
    },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Meet the team</h1>

          <p className="max-w-2xl mx-auto text-xl">
            Behind any successful project is a passionate and skilled team - and
            ours is no exception.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              className="rounded-xl p-6 border border-amber-500 bg-white flex  items-center justify-center gap-3 hover:scale-105 transition duration-200 cursor-pointer"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h2 className="text-xl font-bold">{team.name}</h2>

                <p className="text-gray-600">{team.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
