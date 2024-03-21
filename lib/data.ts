import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software development student",
    location: "Oakville, ON, Canada",
    description:
      "Courses: Enterprise Java, Databases, SDLC, Web development, Cybersecurity, Networking",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "Software ",
    location: "Toronto",
    description:
      "Courses: Enterprise Java, Databases, SDLC, Web development, Cybersecurity, Networking",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  }
 
 
] as const;

export const projectsData = [
  {
    title: "ParseComment",
    description:
      "Online parser project",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Springboot"],
    imageUrl: corpcommentImg,
    
  },
  {
    title: "TestProject",
    description:
      "Test project",
    tags: ["Java", "Angular", "React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Springboot"],
    imageUrl: corpcommentImg,
    
  },

  {
    title: "TestProject2",
    description:
      "Test project222",
    tags: ["Java", "Angular", "React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Springboot"],
    imageUrl: corpcommentImg,
    
  },

] as const;

export const skillsData = [
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SpringBoot",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;