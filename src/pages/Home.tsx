import  React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  const cards = [
    { title: "About Me", description: "Learn more about my background and interests.", link: "/about" },
    { title: "Skills", description: "Discover my technical skills and expertise.", link: "/skills" },
    { title: "Experience", description: "Explore my professional journey and accomplishments.", link: "/experience" },
    { title: "Education", description: "View my educational background and qualifications.", link: "/education" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
            <p className="text-gray-300 mb-4">{card.description}</p>
            <Link to={card.link} className="text-blue-400 hover:text-blue-300">
              Learn more &rarr;
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Home

