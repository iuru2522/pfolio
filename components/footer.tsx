"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const techStack = [
    "React",
    "Next.js",
    "TypeScript", 
    "Tailwind CSS",
    "Framer Motion",
    "React Email",
    "Resend"
  ];

  return (
    <motion.footer 
      className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.small 
        className="mb-3 block text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        &copy; {currentYear} Iurii Manastyrskyi. All rights reserved.
      </motion.small>
      
      <motion.div 
        className="text-xs max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="mb-2">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            About this website:
          </span>
        </p>
        <p className="leading-relaxed">
          Built with{" "}
          {techStack.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {tech}
              </span>
              {index < techStack.length - 2 && ", "}
              {index === techStack.length - 2 && " & "}
            </React.Fragment>
          ))}
          . Hosted on{" "}
          <span className="font-medium text-gray-600 dark:text-gray-300">
            Vercel
          </span>
          .
        </p>
      </motion.div>
    </motion.footer>
  );
}
