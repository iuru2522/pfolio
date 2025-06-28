"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

const EMAIL_ADDRESS = "ternoboy@gmail.com";

const fadeInVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
};

const inputClasses = "h-14 px-4 rounded-lg borderBlack bg-white dark:bg-white/80 dark:focus:bg-white/100 transition-all focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300";
const textareaClasses = "h-52 my-3 rounded-lg borderBlack p-4 bg-white dark:bg-white/80 dark:focus:bg-white/100 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300";

function ContactForm() {
  const handleSubmit = useCallback(async (formData: FormData) => {
    try {
      const { data, error } = await sendEmail(formData);
      
      if (error) {
        toast.error(error);
        return;
      }
      
      toast.success("Email sent successfully!");
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    }
  }, []);

  return (
    <motion.form
      className="mt-10 flex flex-col gap-4 w-full max-w-md mx-auto"
      action={handleSubmit}
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="senderEmail" className="sr-only">
          Your email address
        </label>
        <input
          id="senderEmail"
          className={inputClasses}
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          aria-describedby="email-help"
          autoComplete="email"
        />
        <span id="email-help" className="sr-only">
          Enter your email address so I can respond to your message
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          className={textareaClasses}
          required
          name="message"
          maxLength={5000}
          placeholder="Your message"
          aria-describedby="message-help"
          rows={8}
        />
        <span id="message-help" className="sr-only">
          Write your message here (maximum 5000 characters)
        </span>
      </div>

      <div className="flex justify-center">
        <SubmitBtn />
      </div>
    </motion.form>
  );
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-2xl mx-auto text-center px-4"
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      
      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in touch with me directly at{" "}
        <a
          className="underline font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          href={`mailto:${EMAIL_ADDRESS}`}
          aria-label={`Send email to ${EMAIL_ADDRESS}`}
        >
          {EMAIL_ADDRESS}
        </a>{" "}
        or through the form below.
      </motion.p>

      <ContactForm />
    </motion.section>
  );
}
