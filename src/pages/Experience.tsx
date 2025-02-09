import  React from "react"
import { motion } from "framer-motion"

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12"
    >
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Associate Software Engineer</h2>
        <h3 className="text-xl mb-2">CHARTER GLOBAL TECHNOLOGIES PVT. LTD (Hyderabad)</h3>
        <p className="text-gray-400 mb-4">January 2022 - Present</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Designed and developed Microservices business components using Spring Boot for Inbound and Outbound Process.
          </li>
          <li>Utilized Java 8 features like stream and Lambda expressions.</li>
          <li>Implemented Spring MVC framework for Model-View-Controller (MVC) architecture at the Web tier level.</li>
          <li>
            Used Spring Data JPA framework as persistence engine and wrote JPA Queries to automate the mapping between
            MySQL database and Objects in Java.
          </li>
          <li>
            Worked in Agile TDD environment using SDLC tools like GIT, Jira, and Maven for build packaging and
            deployments of the application components.
          </li>
          <li>Performed CRUD operations using HQL and Criteria API.</li>
          <li>Involved in writing Unit test cases.</li>
          <li>
            Worked on Enhancements tickets for Spring based web application like adding new providers in database.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Experience

