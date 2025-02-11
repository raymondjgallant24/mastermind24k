import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-red-500">
      <header className="w-full p-6 bg-black text-center">
        <h1 className="text-4xl font-bold text-red-500 [text-shadow:0_0_5px_gold,0_0_15px_gold] outline-gold">
          Mastermind24k
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-5xl font-extrabold mb-6 text-red-500">Welcome to Mastermind24k</h2>
        <p className="text-lg max-w-3xl text-center mb-8 text-red-300">
          Join the movement and take your life and business to the next level with Mastermind 24k. Redefine ambition and success.
        </p>
        <button className="bg-red-700 text-black px-6 py-3 rounded-lg font-bold transition-transform transform hover:scale-105 hover:bg-red-500">
          Get Started
        </button>
      </main>

      <footer className="w-full p-4 bg-black text-center">
        <p className="text-red-300">© 2025 Mastermind24k. All rights reserved.</p>
      </footer>
    </div>
  );
}
