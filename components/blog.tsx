"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

type BlogPost = {
  title: string;
  excerpt: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Mastering TypeScript",
    excerpt: "Dive deep into TypeScript and improve your coding skills",
    slug: "mastering-typescript",
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow",
    slug: "power-of-tailwind-css",
  },
];

export default function Blog() {
  const { ref } = useSectionInView("Blog");

  return (
    <section ref={ref} id="blog" className="scroll-mt-28 mb-28">
      <SectionHeading>Latest Blog Posts</SectionHeading>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-white/10"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Read more
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}