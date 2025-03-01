import React from 'react';
import { motion } from 'framer-motion';

const Summary = ({ questions, answers }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0 }}
    className="bg-gradient-to-br from-purple-800 to-indigo-900 p-8 rounded-xl shadow-lg text-white max-w-2xl mx-auto h-auto mt-8 mb-8" // Added margin top and bottom
  >
    <motion.h1 
      className="text-4xl font-serif mb-12 text-white text-center"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      ✨ Our Love Story ✨
    </motion.h1>
    <p className="text-xl font-light mb-12 text-white text-center">A journey of love and memories...</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {answers.map((answer, index) => (
        <motion.div
          key={index}
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all"
        >
          <p className="text-base">
            <span className="text-indigo-200 font-medium">{questions[index].question}</span>
            <br />
            <span className="text-2xl font-serif text-white mt-4 block text-center">✨ {answer} ✨</span>
          </p>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-16 text-lg text-indigo-200">
      Forever and Always... ✨
    </div>
  </motion.div>
);

export default Summary;
