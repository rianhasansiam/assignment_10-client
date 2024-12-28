import { useContext } from "react";
import { contextData } from "../Contex";

  
  const VisaApplicationSteps = () => {
     
  const {visaSteps,dataTheme}=useContext(contextData)
    return (
      <div className={`py-20 ${dataTheme?"":"bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visa Application Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {visaSteps.map(step => (
              <div key={step._id} className={`${dataTheme?"bg-[#1f1e1e]":"bg-white"} p-6 rounded-lg shadow-md text-center`}>
                <img src={step.icon} alt={step.step} className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default VisaApplicationSteps;
  