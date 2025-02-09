import  React from "react"
import { motion } from "framer-motion"

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12"
    >
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">B.Tech in Mechanical Engineering</h2>
        <p className="mb-2">CMR Institute of Technology, Hyderabad</p>
        <p className="text-gray-400">JNTU, Hyderabad</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Intermediate in MPC</h2>
        <p>Kakatiya Jr college, Nizamabad</p>
      </motion.div>
    </motion.div>
  )
}

export default Education

