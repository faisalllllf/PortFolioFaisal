import  React from "react"
import { motion } from "framer-motion"

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12"
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <p className="mb-4">
          I am Shaik Faisal, an Associate Software Engineer with over 2.7+ years of IT experience in Software
          Development. I specialize in developing and integrating web-based and client/server applications using
          JAVA/J2EE technologies.
        </p>
        <p className="mb-4">
          My expertise includes developing Microservice Architecture based J2EE applications, utilizing Java 8 features
          like Lambda expressions and Stream API for bulk data operations on Collections to increase application
          performance.
        </p>
        <p>
          I have extensive experience in developing web-based applications using Java/J2EE, Servlets, Spring frameworks,
          and ORM frameworks like Hibernate and Spring Data JPA.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default About

