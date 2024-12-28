import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Header/Navbar"
import {  useEffect, useState } from "react"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";




function App() {


    
    
    
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowComponent(true); 
      }, 1000);
  
      // Clean up the timer if the component unmounts
      return () => clearTimeout(timer);
    }, []);
    
    








    

  return (
    <>
    {showComponent ? (
      <div>
        <Navbar/>
 
        <Outlet/>
        
         <Footer/>
         <ToastContainer />

      </div>
      ) : (
        <div className="flex justify-center items-center mt-[40vh]"><span className="loading loading-ring w-[100px] md:w-[150px]"></span></div>
      )}


       

    </>
  )
}

export default App
