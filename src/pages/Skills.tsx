import  React from "react"
import { motion } from "framer-motion"

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "J2EE", "J2SE"],
    },
    {
      category: "Frameworks & Tools",
      skills: ["Spring", "Spring Boot", "Hibernate", "Spring MVC", "Spring Data JPA", "JUnit", "Microservices"],
    },
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "AJAX", "JSON", "React.js"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Oracle"],
    },
    {
      category: "Version Control",
      skills: ["Git", "SVN"],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12"
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <ul className="list-disc list-inside">
              {category.skills.map((skill) => (
                <li key={skill} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills

