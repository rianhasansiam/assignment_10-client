import  { useContext, useEffect, useState } from 'react'
import { contextData } from '../Contex'

import CardVisa from '../Home/CardVisa'

const AllVisas = () => {

  const {allVisaData}=useContext(contextData)
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true); 
    }, 500);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  



  const [visaType, setVisaType] = useState('');
  const handleVisaChange = (e) => {
    setVisaType(e.target.value); 
     
  };
  const filterVisaData = allVisaData.filter(filterdata => filterdata.visaType == visaType)


  
  return (

<>

{showComponent ? (

  <div >


  
        
<select
        name="visaType"
        value={visaType} 
        onChange={handleVisaChange} 
        required
        className="w-[50%] md:w-[30%] lg:w-[13%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block my-5 mx-auto"
      >
        <option value="">Filter</option>
        <option value="Official Visa">Official Visa</option>
        <option value="Student Visa">Student Visa</option>
        <option value="Tourist Visa">Tourist Visa</option>
        <option value="Working Visa">Working Visa</option>
      </select>
     



      <div className='container mx-auto grid md:grid-cols-2 max-sm:w-[90vw] lg:grid-cols-4 mb-20 gap-5'>
  {
    (visaType ? filterVisaData : allVisaData).map(eachVisaData => (
      <CardVisa key={eachVisaData._id} visaData={eachVisaData} />
    ))
  }
</div>
  </div>
      ) : (
        <div className="flex justify-center items-center my-[30vh]"><span className="loading loading-ring w-[100px] md:w-[150px]"></span></div>
      )}

</>
   



   
  )
}



export default AllVisas