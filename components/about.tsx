'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

const EDUCATION_DEGREE = 'Finance'
const INSTITUTION = 'college'
const CORE_TECHNOLOGIES = ['React', 'Next.js', 'Node.js', 'MongoDB', 'SpringBoot']
const ADDITIONAL_TECHNOLOGIES = ['TypeScript', 'Prisma']
const CURRENT_LEARNING = ['design techniques', 'cyber security', 'origami culture']

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 }
}

const SECTION_CLASSES = 'mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
const PARAGRAPH_CLASSES = 'mb-3 text-gray-700 dark:text-gray-300'
const HIGHLIGHT_CLASSES = 'font-medium text-gray-900 dark:text-gray-100'
const EMPHASIS_CLASSES = 'italic text-gray-800 dark:text-gray-200'
const UNDERLINE_CLASSES = 'underline decoration-2 underline-offset-2'

interface HighlightTextProps {
  children: React.ReactNode
  variant?: 'medium' | 'italic' | 'underline'
}

function HighlightText ({ children, variant = 'medium' }: HighlightTextProps) {
  const getClassName = () => {
    switch (variant) {
      case 'italic':
        return EMPHASIS_CLASSES
      case 'underline':
        return UNDERLINE_CLASSES
      default:
        return HIGHLIGHT_CLASSES
    }
  }

  return <span className={getClassName()}>{children}</span>
}

interface TechnologyListProps {
  technologies: string[]
  conjunction?: string
}

function TechnologyList ({ technologies, conjunction = 'and' }: TechnologyListProps) {
  return (
    <HighlightText>
      {technologies.map((tech, index) => (
        <React.Fragment key={tech}>
          {tech}
          {index < technologies.length - 2 && ', '}
          {index === technologies.length - 2 && ` ${conjunction} `}
        </React.Fragment>
      ))}
    </HighlightText>
  )
}

interface AboutContentProps {
  coreTechnologies: string[]
  additionalTechnologies: string[]
  currentLearning: string[]
}

const AboutContent = React.memo(function AboutContent ({
  coreTechnologies,
  additionalTechnologies,
  currentLearning
}: AboutContentProps) {
  return (
    <>
      <motion.p 
        className={PARAGRAPH_CLASSES}
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        After graduating with a degree in{' '}
        <HighlightText>{EDUCATION_DEGREE}</HighlightText>, I decided to pursue my
        passion for programming. I enrolled in {INSTITUTION} and learned{' '}
        <HighlightText>full-stack web development</HighlightText>.{' '}
        <HighlightText variant="italic">My favorite part of programming</HighlightText> is the
        problem-solving aspect. I <HighlightText variant="underline">love</HighlightText> the
        feeling of finally figuring out a solution to a problem.
      </motion.p>

      <motion.p 
        className={PARAGRAPH_CLASSES}
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        My core stack is <TechnologyList technologies={coreTechnologies} />. 
        I am also familiar with <TechnologyList technologies={additionalTechnologies} />. 
        I am always looking to learn new technologies. I am currently looking for a{' '}
        <HighlightText>full-time position</HighlightText> as a software developer.
      </motion.p>

      <motion.p 
        className="text-gray-700 dark:text-gray-300"
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HighlightText variant="italic">When I'm not coding</HighlightText>, I enjoy playing
        video games, watching movies with my spouse. I also enjoy{' '}
        <HighlightText>learning new things</HighlightText>. I am currently
        learning about <TechnologyList technologies={currentLearning} />.
      </motion.p>
    </>
  )
})

export default function About () {
  const { ref } = useSectionInView('About')
  
  const memoizedContent = useMemo(() => ({
    coreTechnologies: CORE_TECHNOLOGIES,
    additionalTechnologies: ADDITIONAL_TECHNOLOGIES,
    currentLearning: CURRENT_LEARNING
  }), [])

  return (
    <motion.section
      ref={ref}
      className={SECTION_CLASSES}
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      transition={{ delay: 0.175, duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      aria-labelledby="about-heading"
    >
      <SectionHeading>About me</SectionHeading>
      <AboutContent {...memoizedContent} />
    </motion.section>
  )
}
