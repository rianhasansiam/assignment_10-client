import { useContext } from "react";
import { contextData } from "../Contex";
import { Fade } from "react-awesome-reveal";

const TopCountries = () => {
   
  const {topvisa,dataTheme}=useContext(contextData)
      
    return (
      <div className="py-10 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Top Countries for Visas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <Fade cascade damping={0.1}>
      
            {topvisa.map(country => (
              <div key={country._id} className={`${dataTheme?"bg-[#1f1e1e]":"bg-gray-100"} p-6 rounded-lg shadow-md text-center`}>
                <img src={country.imageUrl} alt={country.country} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className={`${dataTheme?"text-white":""} text-2xl font-semibold`}>{country.country}</h3>
                <p className={`${dataTheme?"text-white":"text-gray-600"} mt-2 mb-4`}>{country.description}</p>
                <p  className="text-blue-500 hover:underline cursor-pointer">Learn More</p>
              </div>
            ))}
      </Fade>



          </div>
        </div>
      </div>
    );
  };
  
  export default TopCountries;
  