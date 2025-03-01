import React, { useState } from 'react';
import Header from './components/Header/Header';
import Question from './components/Questions/Question';
import Summary from './components/Final/Summary';
import Footer from './components/Footer/Footer';


const questions = [
  {
    question: 'In the quiet moments, when I think of you, what memory brings a tear of joy to my eyes? 💖',
    bgColor: 'from-rose-400 to-pink-500',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTN6MzF0OThmY2J0dHhkNG91bTZsZnRta2RzaDNvbTUxczZ3NTRsbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26FLdmIp6wJr91JAI/giphy.gif',
    options: ['The first time we held hands ☕', 'The laughter we shared under the stars 👥', 'The day you became my everything 📚', 'It was fate that brought us together ✨'],
  },
  {
    question: 'If our love were a melancholic song, which one would it be? 🌸',
    bgColor: 'from-fuchsia-400 to-pink-600',
    gif: 'https://media.giphy.com/media/eGNEZjCkQnkZKGGIPA/giphy.gif?cid=ecf05e47w6wkjv7xds3c05opzjyz2vv761ej35wmp4o2nr4s&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    options: ['A soft ballad of longing 🌱', 'A sweet melody of memories ☀️', 'A gentle tune of our shared moments 🍂', 'A haunting love song that echoes ❄️'],
  },
  {
    question: 'What thought of us makes your heart ache with love? 💝',
    bgColor: 'from-purple-400 to-pink-500',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGpmNG5iMjRuZzZ4eWQ4M2x4bDE0OGpwZTA0OXg2Y3Jsc3h3NjZ5NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GpyS1lJXJYupG/giphy.gif',
    options: ['Your laughter that lingers 😊', 'The warmth of your embrace 😂', 'The way you look at me with love 👀', 'Every fleeting moment we cherish together ✨'],
  },
  {
    question: 'If I could take you anywhere to escape reality, where would we find solace? 🌎',
    bgColor: 'from-red-400 to-rose-600',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZ6djg4bGt1MW05YmV6bTdnM295MXVmaGh4dDUxcmU0aXI1NGRnOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2nE5bSa3401BPdals6/giphy.gif',
    options: ['A hidden garden of dreams 🗼', 'A cabin where time stands still 🌲', 'A beach where the waves whisper our secrets 🏖️', 'Anywhere your heart feels at home 💫'],
  },
  {
    question: 'What melody plays in your heart when you think of our bittersweet love? 🎵',
    bgColor: 'from-pink-400 to-rose-500',
    gif: 'https://media.giphy.com/media/9d3LQ6TdV2Flo8ODTU/giphy.gif?cid=790b76115aq6quo25tnkcmkuq6v5ko54a0ttdr9t5z1zcttj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    options: ['A nostalgic tune of our past 🎹', 'A lively rhythm of our joy 💃', 'A gentle lullaby of our dreams 🎼', 'Our song that tells our story 💝'],
  },
  {
    question: 'In what way do you wish to be loved, my dear? 💕',
    bgColor: 'from-rose-300 to-pink-500',
    gif: 'https://media.giphy.com/media/u8PnFQdDTglXi/giphy.gif?cid=790b76117yp99w1e2vu91eryfqz6tjupufvlf2hozu826rzb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    options: ['With tender whispers in the night 🥰', 'With a passion that ignites the soul ❤️‍🔥', 'With playful moments that make us laugh 😊', 'With a love that knows no bounds 💖'],
  },
  {
    question: 'What small gestures of mine make your heart flutter? ✨',
    bgColor: 'from-pink-300 to-purple-400',
    gif: 'https://media.giphy.com/media/KYbhcivJZcVI4bhdQK/giphy.gif?cid=790b7611qk8yuds6depyv8ee0s1rgw3mbvriukmwp6h339tg&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    options: ['Your sweet texts that brighten my day 📱', 'The way you hold me close 🤗', 'Your playful teasing that makes me smile 😄', 'Every little thing that makes you, you 💫'],
  },
  {
    question: 'Where shall we weave our next tapestry of memories? 📸',
    bgColor: 'from-fuchsia-300 to-pink-400',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjdoNmN6YjJvbHlxMWx4N3ZmMDlycDdhZzZva2lnaTlrcjlmcHpnYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LlSafOKjUYdlRTDa6g/giphy.gif',
    options: ['Under a sky full of dreams ⭐', 'In a garden where love blooms 🌸', 'By the ocean where our hearts dance 🌊', 'In the place where our souls connect 💕'],
  },
  {
    question: 'What shared dream do you wish to chase with me, my love? 🌈',
    bgColor: 'from-purple-300 to-pink-400',
    gif: 'https://media.giphy.com/media/PJqT0mdgGowTe/giphy.gif?cid=790b7611yk4gmnlpbnm17j4d2esv76xto9hkr8s0khayy0nn&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    options: ['To wander the world hand in hand 🌎', 'To build a sanctuary of love 🏡', 'To create a family filled with laughter 👨‍👩‍👧‍👦', 'To gather memories that last a lifetime 📖'],
  },
  {
    question: 'How do you envision our future, wrapped in love? 💫',
    bgColor: 'from-rose-400 to-red-500',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNngzN3V4OHNkb3RwNWgyb2RibXlrZDFvMzNsbWthN2lhZW04ZnZobyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XN8pBJ6HrLTOM/giphy.gif',
    options: ['A journey filled with adventures 🗺️', 'A peaceful haven of love 🏡', 'A thrilling ride of passion ✨', 'A perfect harmony, just like you 💝'],
  },
  {
    question: 'What makes our love story a beautiful enigma? 📖',
    bgColor: 'from-pink-400 to-purple-500',
    gif: 'https://media.giphy.com/media/JKNIX0j6qAWtRCeAyu/giphy.gif?cid=790b76116niqjddkotbxd3qpgurez0vh361jsbay3p0gehwb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    options: ['The bond that ties our hearts 🤝', 'The understanding that transcends words 💭', 'The dreams we dare to share 💫', 'The magic that lingers in the air ✨'],
  },
  {
    question: 'If our love were a fairytale, how would it unfold? 👑',
    bgColor: 'from-rose-300 to-pink-600',
    gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXU1Nndlc3RwN3A4Z3c1ZmY3c2twYWpwa25zYWRoZmx4dXN6N2NydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gy9w8T6BsCtJE003ZR/giphy.gif',
    options: ['A tale of everlasting love 💑', 'A story woven with dreams 💖', 'An adventure filled with wonder 🌟', 'A promise of forever, just for us 💕'],
  },
];


function App() {
  const [herName, setHerName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (herName.trim()) {
      setIsNameSubmitted(true);
    }
  };

  const handleAnswer = (option) => {
    setAnswers((prevAnswers) => [...prevAnswers, option]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsAnswered(true);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col text-white bg-gradient-to-br ${isNameSubmitted ? questions[currentQuestion].bgColor : 'from-pink-400 to-rose-600'}`}>
      <div className="flex-grow flex items-center justify-center">
        {!isNameSubmitted ? (
          <Header herName={herName} setHerName={setHerName} handleNameSubmit={handleNameSubmit} />
        ) : !isAnswered ? (
          <Question
            herName={herName}
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <Summary questions={questions} answers={answers} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
