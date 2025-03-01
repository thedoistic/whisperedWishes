<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body class="bg-gray-50 text-gray-900">

  <div class="max-w-4xl mx-auto p-6">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold text-indigo-600">WhisperedWishes</h1>
      <p class="text-lg text-gray-600 mt-2">A fun and engaging app for couples to deepen their connection through meaningful and playful questions.</p>
    </header>
    <section>
      <h2 class="text-3xl font-semibold text-indigo-500 mb-4">Features 🌟</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Thoughtful Questions 💭</strong>: A collection of deep and fun questions to ask your partner that will make them think (and laugh!).</li>
        <li><strong>Surprise Me Button 🎲</strong>: Tap the button to get a random question and add a little excitement to your convo!</li>
        <li><strong>Material UI 🖌️</strong>: Sleek, modern design for a smooth and beautiful experience.</li>
        <li><strong>Tailwind CSS 💨</strong>: Fast, stylish, and easy-to-customize UI components.</li>
        <li><strong>Responsive Design 📱💻</strong>: Whether you're on your phone, tablet, or desktop, it's optimized for all screen sizes!</li>
      </ul>
    </section>
    <section class="mt-8">
      <h2 class="text-3xl font-semibold text-indigo-500 mb-4">Tech Stack 🚀</h2>
      <ul class="list-inside list-disc pl-6 space-y-2">
        <li><strong>React ⚛️</strong>: The ultimate JavaScript library for building interactive UIs.</li>
        <li><strong>Vite ⚡</strong>: A lightning-fast build tool that will make your life easier (and faster). 🚀</li>
        <li><strong>Babel 📝</strong>: Transpiles modern JavaScript for broader browser compatibility, so everyone can join the fun!</li>
        <li><strong>SWC 🔥</strong>: A super-speedy alternative to Babel for lightning-fast builds and HMR.</li>
        <li><strong>Material UI 🎨</strong>: A beautiful, ready-to-use component library for that polished look.</li>
        <li><strong>Tailwind CSS 🏄</strong>: A utility-first CSS framework for crafting your UI in no time!</li>
      </ul>
    </section>
    <section class="mt-8">
      <h2 class="text-3xl font-semibold text-indigo-500 mb-4">Getting Started 🏁</h2>
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Prerequisites 🎓</h3>
      <p class="text-lg text-gray-600">You need <strong>Node.js</strong> (version 16 or higher) to get started. 🖥️</p>
      <h3 class="text-2xl font-semibold text-gray-800 mt-6 mb-4">Installation ⚙️</h3>
      <ol class="list-decimal pl-8 space-y-2">
        <li>Clone the repository:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">git clone https://github.com/yourusername/whisperedWishes.git</pre>
        </li>
        <li>Install dependencies:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">cd whisperedWishes</pre>
          <pre class="bg-gray-100 p-4 text-sm rounded-md">npm install</pre>
        </li>
        <li>Install Material-UI:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">npm install @mui/material @emotion/react @emotion/styled</pre>
        </li>
        <li>Install Tailwind CSS:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">npm install -D tailwindcss postcss autoprefixer</pre>
          <pre class="bg-gray-100 p-4 text-sm rounded-md">npx tailwindcss init</pre>
        </li>
        <li>Configure Tailwind CSS:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
          </pre>
          Create a new CSS file (e.g., <code>src/index.css</code>) and add the following:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">
@tailwind base;
@tailwind components;
@tailwind utilities;
          </pre>
        </li>
        <li>Start the development server:
          <pre class="bg-gray-100 p-4 text-sm rounded-md">npm run dev</pre>
        </li>
      </ol>
    </section>
  </div>

</body>
</html>
