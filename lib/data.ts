import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import acmeImg from "@/public/acme.png";
import utrackerImg from "@/public/utracker.png";
import angularImg from "@/public/angular.png";
import javaImg from "@/public/java.jpg";
import zettelkastenImg from "@/public/zettelkasten.jpg";

export const githubLink1 = "https://github.com/iuru2522/nextjs-dashboard-project";
export const githubLink2 = "https://github.com/iuru2522/parsemarkdown";
export const githubLink3 = "https://github.com/iuru2522/mern-one";
export const githubLink4 = "https://github.com/iuru2522/zettelkasten";
export const githubLink5 = "https://github.com/iuru2522/";



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
    title: "Test ",
    location: "Toronto",
    description:
      "Courses: Enterprise Java, Databases, SDLC, Web development, Cybersecurity, Networking",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  }
 
 
] as const;

export const projectsData = [
  
  {
    title: "Acme Dashboard",
    description:
      "Project is based on Nextjs Starter code. Found it useful to test myself how to add new features into the existing project.",
    tags: [ "Typescript", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: acmeImg,
    githubLink: githubLink1
    
  },
  {
    title: "ParseComment",
    description:
      "My playground how to build parser using Java",
    tags: ["Java", "Springboot"],
    imageUrl: javaImg,
    githubLink: githubLink2
    
  },

  {
    title: "uTracker",
    description:
      "Simple CRUD app using MERN stack.",
    tags: [ "Javascript", "React", "Nodejs", "MongoDB"],
    imageUrl: utrackerImg,
    githubLink: githubLink3
    
  },
  {
    title: "Zettelkasten",
    description:
      "List of links I found interesting topics to read.",
    tags: [ "Markdown", "Links", "Second Brain"],
    imageUrl: zettelkastenImg,
    githubLink: githubLink4
    
  },
  {
    title: "test-angular-app",
    description:
      "Future app using Typescript and Angular",
    tags: [ "In progress", "Typescript", "Angular", "Nodejs", "MongoDB", "SSR"],
    imageUrl: angularImg,
    githubLink: githubLink5
    
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