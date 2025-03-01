import React from 'react';
import { motion } from 'framer-motion';

const Question = ({ herName, question, handleAnswer }) => (
  <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-burgundy-700 p-10 rounded-lg shadow-xl">
    <h1 className="text-4xl font-serif text-white mb-6">Hello, my love {herName}!</h1>
    <motion.img
      src={question.gif}
      alt="GIF"
      className="w-80 h-80 rounded-lg mb-6 border-4 border-burgundy-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.p
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xl text-white mb-8 text-center font-serif"
    >
      {question.question}
    </motion.p>
    <div className="flex flex-col space-y-4 w-full">
      {question.options.map((option, index) => (
        <motion.button
          key={index}
          onClick={() => handleAnswer(option)}
          className="bg-red-600 text-white font-semibold py-4 rounded-lg shadow-md hover:bg-burgundy-500 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {option}
        </motion.button>
      ))}
    </div>
  </div>
);

export default Question;
