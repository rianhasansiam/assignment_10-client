/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg mb-6">
          It seems you've found something that isn't here. Maybe you want to go back to the homepage?
        </p>
        <Link to="/" className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-semibold transition duration-300 hover:bg-gray-200">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
