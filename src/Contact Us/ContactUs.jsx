import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Have questions? We’d love to hear from you. Reach out to us, and we’ll respond as soon as we can.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">Or reach out to us directly:</p>
          <p className="font-semibold text-gray-800">Phone: +880 01932 600504</p>
          <p className="font-semibold text-gray-800">Email: rianhasan1971@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
