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
export const githubLink5 = "https://github.com/iuru2522/angular-firebase-playground";



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
  {
    name: "Blog",
    hash: "#blog",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-stack developer internship",
    location: "Mississauga, ON",
    description:
      "Technologies: C#, Typescript,.NET,  Angular, Azure, Expo, React Native",
    icon: React.createElement(LuGraduationCap),
    date: "2026 (4 month)",
  },
  {
    title: "Full-stack developer internship",
    location: "Mississauga, ON",
    description:
      "Technologies: C#, .NET, Typescript, Nextjs, Azure",
    icon: React.createElement(LuGraduationCap),
    date: "2025 (4 month)",
  },
  {
    title: "Full-stack developer internship",
    location: "Mississauga, ON",
    description:
      "Technologies: C#, .NET, Bootstrap, Typescript, Nextjs, Azure",
    icon: React.createElement(LuGraduationCap),
    date: "2024 (4 month)",
  }
 
 
] as const;

export const projectsData = [
  
  {
    title: "Acme Dashboard",
    description:
      "Project is based on Nextjs Starter code.",
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
    title: "angular-firebase-playground",
    description:
      "Bug tracking app",
    tags: [ "In progress", "Typescript", "Angular 19", "Firebase", "SSR"],
    imageUrl: angularImg,
    githubLink: githubLink5
    
  },

] as const;

export const skillsData = [
  "C#",
  "TypeScript",
  ".Net",
  "Angular",
  "React Native",
  "Expo",
  "git",
  "SpringBoot",
] as const;