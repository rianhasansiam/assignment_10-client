import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 mb-6">
          Welcome to our website! Our mission is to provide the best services and help you navigate through
          your visa requirements effortlessly. We are dedicated to ensuring a smooth and seamless experience
          for every visitor. Our team is constantly working to bring you the most up-to-date information and
          features to make your journey easier.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <img src="https://i.ibb.co.com/T4KLpsP/download.jpg" alt="Vision" className="rounded-full mx-auto mb-4"/>
            <h3 className="text-lg font-semibold text-gray-700">Our Vision</h3>
            <p className="text-gray-500">
              To be the leading platform for visa applications, ensuring a hassle-free process for all.
            </p>
          </div>
          <div className="p-4">
            <img src="https://i.ibb.co.com/PTQ8jFf/download-1.jpg" alt="Mission" className="rounded-full mx-auto mb-4"/>
            <h3 className="text-lg font-semibold text-gray-700">Our Mission</h3>
            <p className="text-gray-500">
              Simplify the visa application process and provide real-time updates on your application status.
            </p>
          </div>
          <div className="p-4">
            <img src="https://i.ibb.co.com/txJ9jpb/download-2.jpg" alt="Team" className="rounded-full mx-auto mb-4"/>
            <h3 className="text-lg font-semibold text-gray-700">Our Team</h3>
            <p className="text-gray-500">
              We have a diverse team of professionals working tirelessly to bring you the best service.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/contactUs"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
