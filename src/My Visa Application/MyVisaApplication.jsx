import  { useContext, useEffect, useState } from 'react'

import SingleApplication from './SingleApplication';
import { contextData } from '../Contex';
import NoDataFound from './NoDataFound';

const MyVisaApplication = () => {
 

  const {userData,setAllVisaApply,allVisaApply,reloadDelteapply}=useContext(contextData)
  const email = userData?.email;  

  useEffect(() => {
    if (email) {
      fetch(`https://assignment-10-server-gray-three.vercel.app/visa-apply?email=${email}`)
        .then(res => res.json())
        .then(data => setAllVisaApply(data));
    }
  }, [email, setAllVisaApply, reloadDelteapply]);



  //search data fetch
  
const [search,setSearch]=useState('')


useEffect(()=>{



    fetch(`https://assignment-10-server-gray-three.vercel.app/my-visa-apply-by-search?searchPharams=${search}`)
         .then(res => res.json())
          .then(data => setAllVisaApply(data));
  },[search,setAllVisaApply])

  

  return (
    <div className='my-10'>
<h1 className="text-3xl font-bold mb-6 text-center">My Visa Applications</h1>


{/* serarch option */}
<label className="input input-bordered flex items-center gap-2 w-[60%] md:w-[40%]  lg:w-[20%] mx-auto my-10">
  <input onChange={(e)=>setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>



    
      <div>

    {allVisaApply.length===0?<NoDataFound/>:

     <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[90vw] lg:container mx-auto  my-5'>

       {

           allVisaApply.map(eachData => <SingleApplication key={eachData._id} singleDatavisa={eachData}  />)
       }
          </div>
    }
      
   
    
    </div>
    </div>
    
    
  )
}



export default MyVisaApplication