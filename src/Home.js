// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Daily DSA Questions, Delivered</h2>
          <p className="text-lg mb-6 text-gray-700">
            Grind smarter, not harder. Get handpicked coding problems via email or SMS every day based on your preferences.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-12">Why Choose Pingcode?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Custom Reminders</h4>
              <p>Set your preferred time and number of questions. Stay consistent.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Topic-Based Questions</h4>
              <p>Focus on specific areas like Arrays, Graphs, or DP for targeted practice.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Multi-Platform Integration</h4>
              <p>Get questions from LeetCode, Codeforces, and Hackerrank, all in one place.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
