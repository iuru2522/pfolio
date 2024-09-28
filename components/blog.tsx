"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";

type BlogPost = {
    title: string;
    excerpt: string;
    slug: string;
    content: string;
};

const blogPosts: BlogPost[] = [
    {
        title: "Getting Started with Next.js",
        excerpt: "Learn how to build modern web applications with Next.js",
        slug: "getting-started-with-nextjs",
        content: `
            <h1>Getting Started with Next.js</h1>
            <p>Next.js is a powerful React framework that makes it easy to build fast, SEO-friendly web applications. In this post, we'll cover the basics of setting up a Next.js project and explore some of its key features.</p>
            <h2>Setting up a Next.js Project</h2>
            <p>To create a new Next.js project, you can use the following command:</p>
            <pre><code>npx create-next-app@latest my-next-app</code></pre>
            <p>This will set up a new Next.js project with all the necessary dependencies and a basic file structure.</p>
            <h2>Key Features of Next.js</h2>
            <ul>
                <li>Server-side rendering</li>
                <li>Static site generation</li>
                <li>API routes</li>
                <li>File-based routing</li>
                <li>Built-in CSS support</li>
            </ul>
            <p>These features make Next.js an excellent choice for building modern web applications.</p>
        `,
    },
    {
        title: "Mastering TypeScript",
        excerpt: "Dive deep into TypeScript and improve your coding skills",
        slug: "mastering-typescript",
        content: `
            <h1>Mastering TypeScript</h1>
            <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and modules to JavaScript, making it easier to write and maintain large-scale applications.</p>
            <h2>Why Use TypeScript?</h2>
            <ul>
                <li>Improved code quality and readability</li>
                <li>Better tooling and IDE support</li>
                <li>Easier refactoring</li>
                <li>Catch errors at compile-time</li>
            </ul>
            <h2>Basic Types in TypeScript</h2>
            <pre><code>
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
            </code></pre>
            <p>These are just a few examples of the types available in TypeScript. As you become more familiar with the language, you'll discover more advanced types and features.</p>
        `,
    },
    {
        title: "The Power of Tailwind CSS",
        excerpt: "Discover how Tailwind CSS can streamline your styling workflow",
        slug: "power-of-tailwind-css",
        content: `
            <h1>The Power of Tailwind CSS</h1>
            <p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. Unlike traditional CSS frameworks, Tailwind doesn't provide pre-built components. Instead, it gives you low-level utility classes that you can use to build completely custom designs.</p>
            <h2>Benefits of Tailwind CSS</h2>
            <ul>
                <li>Rapid development</li>
                <li>Highly customizable</li>
                <li>Smaller file sizes (when properly configured)</li>
                <li>Consistent design system</li>
            </ul>
            <h2>Example Tailwind Classes</h2>
            <pre><code>
<div class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
  Button
</div>
            </code></pre>
            <p>This example shows how you can quickly create a styled button using Tailwind's utility classes. As you can see, you can achieve complex designs without writing any custom CSS.</p>
        `,
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}


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
                        {/* <a
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Read more
            </a> */}

                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-500 hover:underline dark:text-blue-400"
                        >
                            Read more
                        </Link>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}