import React from "react";
import { Film, Users, ShieldCheck, Globe } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useTheme } from './components/ThemeContext';

export default function AboutPage() {
  const navigate = useNavigate();
  const {theme} = useTheme();
  return (
    <div className={`min-h-screen bg-[#0f172a] text-white pt-24 px-6 pb-12 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-neutral-300 text-black'}`}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          The Ultimate Cinematic Experience
        </h1>
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-600"
        >
         Back to Home
        </button>
        <p className="text-gray-400 text-lg leading-relaxed">
          Welcome to your new favorite destination for movies. We built this platform 
          for true cinephiles who want a fast, beautiful, and effortless way to 
          explore the world of film.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <FeatureCard 
          icon={<Film className="text-blue-400" />} 
          title="Huge Library" 
          desc="Thousands of titles from Hollywood blockbusters to Indie gems."
        />
        <FeatureCard 
          icon={<Globe className="text-purple-400" />} 
          title="Global Access" 
          desc="Stream and discover content from around the world in one place."
        />
        <FeatureCard 
          icon={<ShieldCheck className="text-green-400" />} 
          title="Safe & Secure" 
          desc="Your privacy matters. We use industry-leading encryption."
        />
        <FeatureCard 
          icon={<Users className="text-pink-400" />} 
          title="Community" 
          desc="Join thousands of fans and keep track of your favorites."
        />
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-4">
          Movies have the power to change how we see the world. Our mission is to provide 
          a seamless interface where technology meets art, allowing you to focus on what 
          matters most—the story on screen.
        </p>
        <p className="text-gray-300">
          Whether you're looking for a weekend binge or a classic masterpiece, 
          we've got you covered with curated lists and high-quality metadata.
        </p>
      </div>
     <h1 className='text-3xl sm:text-4xl py-10 font-extrabold  bg-clip-text w-full flex flex-col items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-900'>⭐Power By TMDB</h1>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc,theme }) => (
  <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all group">
    <div className="mb-4 p-3 bg-gray-900 w-fit rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={` text-bold leading ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{desc}</p>
  </div>
);

