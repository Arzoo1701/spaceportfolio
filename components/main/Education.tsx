"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      level: "College",
      institution: "Indira Gandhi Delhi Technical University For Women",
      details: "Currently in 3rd year | CGPA: 9.25",
      year: "2021 - Present",
      image: "/Space Portfolio Assets/OIP.jpeg", // Replace with your college image path
    },
    {
      level: "High School (12th Grade)",
      institution: "Rishikul Vidyapeeth",
      details: "Percentage: 92.4%",
      year: "2021",
      image: "/Space Portfolio Assets/Rishikul_Vidyapeeth_School_4684_Logo_UA_1.jpg", // Replace with your high school image path
    },
    {
      level: "Secondary School (10th Grade)",
      institution: "Rishikul Vidyapeeth",
      details: "Percentage: 97.6%",
      year: "2019",
      image: "/Space Portfolio Assets/Rishikul_Vidyapeeth_School_4684_Logo_UA_1.jpg", // Replace with your secondary school image path
    },
  ];

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center min-h-screen w-full py-10"
    >
      <motion.h1
        className="text-4xl font-bold text-gray-200 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>

      <div className="flex flex-col gap-6 w-[90%] max-w-3xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gray-800 shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <Image
              src={edu.image}
              alt={`${edu.level} Image`}
              width={100}
              height={100}
              className="rounded-full object-cover shadow-md"
            />
            
            {/* Details Section */}
            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-xl font-semibold text-purple-400">
                {edu.level}
              </h2>
              <h3 className="text-lg text-gray-300">{edu.institution}</h3>
              <p className="text-sm text-gray-400">{edu.details}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
