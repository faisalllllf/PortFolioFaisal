import  React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="text-2xl font-bold">
            Shaik Faisal
          </Link>
        </motion.div>
        <ul className="flex space-x-4">
          {["About", "Skills", "Experience", "Education"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

