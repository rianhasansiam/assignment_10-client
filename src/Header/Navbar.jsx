
import  { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contextData } from '../Contex'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Navbar = () => {
  const {signoutHandle,dp,disname,userData,setDatatheme}=useContext(contextData)
  
//theme managment
const [theme , setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light")




  const themeHandle=(e)=>{
    if(e.target.checked){
      setTheme('dark')
      // setDatatheme(true)

    }else{
      setTheme('light')
      // setDatatheme(false)
    }
  }
  

  useEffect(()=>{
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme", localTheme)
  if(localTheme=='dark'){
    setDatatheme(true)
  }else{
    setDatatheme(false)
  }
  },[theme,setDatatheme])
  
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, 
    })
  }, [])
  
  


  
  return (
    <div className="navbar bg-base-100 lg:px-32 mx-auto py-5 sticky top-0 z-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


        <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-visas">All Visas</NavLink></li>
      {userData ? (
  <>
    <li><NavLink to="/add-visa">Add Visa</NavLink></li>
    <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
    <li><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
  </>
) : null}


      <li><NavLink to="/aboutUs">About Us</NavLink></li>
      {userData?null:<li><NavLink to="/ContactUs">Contact Us</NavLink></li>}
      
      {
        userData?<li><button className='   font-semibold    text-red-400  ' onClick={signoutHandle}>LogOut</button></li>
        :
        <li>

          <li><Link to="/login" className='hover:text-blue-300 sm:hidden'>Login</Link></li>
         <li><Link to="/register" className='hover:text-blue-300 sm:hidden'>Register</Link></li>
        </li>
      }
      
      


      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl font-extrabold   "><img className='w-10' src="https://i.ibb.co.com/dBf0TFW/Visa-initial-512.webp" alt="" />VISA NAVIGATOR</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-visas">All Visas</NavLink></li>

      {userData ? (
  <>
    <li><NavLink to="/add-visa">Add Visa</NavLink></li>
    <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
    <li><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
  </>
) : null}



<li><NavLink to="/aboutUs">About Us</NavLink></li>
{userData?null:<li><NavLink to="/ContactUs">Contact Us</NavLink></li>}
     
    </ul>
  </div>

  <div className="navbar-end sm:gap-5 gap-2 ">

{/* theme controll */}

  <label className="swap swap-rotate  w-8">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={themeHandle} />

  {/* sun icon */}
  <svg
    className="swap-off w-full h-full fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on w-full h-full fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>



    {userData?
   
   <div className="dropdown dropdown-hover ">
  <div tabIndex={0} role="button" className=' items-center gap-2 flex' ><img data-tooltip-id="my-tooltip" data-tooltip-content={`Hello, ${disname}`} 
  
  data-tooltip-place="left" className=' sm:w-[45px] sm:h-[45px] w-[35px] h-[35px] rounded-full object-cover' src={dp} alt="" />
  <Tooltip id="my-tooltip" />


  <h1 data-aos="fade-left" className='font-semibold text-lg hidden xl:block'>{disname}</h1>
  </div>


  <div  tabIndex={0} className="dropdown-content menu bg-base-100 right-[20px] rounded-box z-[1] w-64 p-5  shadow ">
    <h1 className=' text-center font-bold text-xl py-5'>{disname}</h1>
  <button className='bg-gray-200 w-1/2 mx-auto font-semibold rounded-lg p-2  text-red-400 text-base ' onClick={signoutHandle}>LogOut</button>
</div>



</div>
  
    :
     <div className='sm:flex hidden   gap-4 underline cursor-pointer font-semibold text-lg'>
   <Link to="/login" className='hover:text-blue-300'>Login</Link>
   <Link to="/register" className='hover:text-blue-300'>Register</Link>
    </div>}
   
    
  
  </div>


</div>
  )
}

export default Navbar
