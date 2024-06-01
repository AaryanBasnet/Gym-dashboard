// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-indigo-200',
    'bg-gray-200',
    'bg-green-200',
    'bg-red-200',
    'bg-yellow-200',
    'bg-blue-200',
    'bg-indigo-500',
    'bg-gray-500',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-blue-500',
  ],
};
