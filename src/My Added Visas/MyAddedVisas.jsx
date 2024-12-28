/* eslint-disable react/no-unescaped-entities */
import  { useContext, useEffect } from 'react';

import { contextData } from '../Contex';

import { useNavigate } from 'react-router-dom';
import MyvisaCard from './MyvisaCard';

const MyAddedVisas = () => {
  const { setMyAddedVisa, myAddedVisa, userData, reloadDelte, reloadUpdate } = useContext(contextData);
  const email = userData?.email;  

  useEffect(() => {
    if (email) {
      fetch(`https://assignment-10-server-gray-three.vercel.app/my-added-visas?email=${email}`)
        .then(res => res.json())
        .then(data => {
          setMyAddedVisa(data)
          
        });
    }
  }, [email, setMyAddedVisa, reloadDelte,reloadUpdate]);


  const navigate=useNavigate()

  return (
    <div className="container mx-auto grid sm:grid-cols-2  max-sm:w-[90vw] lg:grid-cols-3 xl:grid-cols-4 my-20 gap-5">
      {Array.isArray(myAddedVisa) && myAddedVisa.length > 0 ? (
        myAddedVisa.map(myvisas => (
          <MyvisaCard key={myvisas._id} visaData={myvisas} />
        ))
      ) : (
        <div className="col-span-full text-center bg-gray-100 p-10 rounded-lg shadow-lg">
          <div className="text-2xl font-semibold text-gray-700 mb-4">You haven't added any data yet!</div>
          <div className="text-lg text-gray-500 mb-6">It's time to add your first visa!</div>
          <div className="flex justify-center mb-6">
            <img 
              src="https://img.icons8.com/?size=100&id=78339&format=png&color=000000" 
              alt="No data" 
              className="w-40 h-40 object-cover" 
            />
          </div>
          <button 
            onClick={() => navigate('/add-visa')}  // Add proper redirection functionality
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Your First Visa
          </button>
        </div>
      )}
    </div>
  );
};



export default MyAddedVisas;
