/* eslint-disable react/no-unescaped-entities */
import  { useContext } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex'
import { toast } from 'react-toastify'

const SingleApplication = ({singleDatavisa}) => {
    
const {setReloadDeleteapply,dataTheme}=useContext(contextData)
const {userName,userEmail,imageUrl,country,visaType,processingTime,fee,validity,applicationMethod,_id,date}=singleDatavisa


const handleDelteUser=()=>{
    

    fetch(`https://assignment-10-server-gray-three.vercel.app/my-visa-apply/${_id}` ,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        setReloadDeleteapply(data)
        toast.error("Your application has been deleted....!", {
            position: "top-center"
          });
    })

  }


  return (
    
      

        
          <div  className={` ${dataTheme?'bg-black text-white':'bg-white'} rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow `} >
            {/* Country Image */}
            <img
              src={imageUrl}
              alt={imageUrl}
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Visa Details */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{country}</h2>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Visa Type:</strong> {visaType}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Processing Time:</strong> {processingTime}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Fee:</strong>${fee}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Validity:</strong> {validity}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Application Method:</strong> {applicationMethod}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Applied Date:</strong> {date}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Applicant's Name:</strong> {userName}
              </p>
              <p className={`${dataTheme?'text-gray-400':'text-gray-600'} text-sm  mb-2`}>
                <strong>Applicant's Email:</strong> {userEmail}
              </p>

              {/* Cancel Button */}
              <button onClick={handleDelteUser} className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors" >Cancel Application</button>
            </div>
          </div>
  
    
 
  )
}

SingleApplication.propTypes = {
  singleDatavisa: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    visaType: PropTypes.string.isRequired,
    processingTime: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired,
    validity: PropTypes.string.isRequired,
    applicationMethod: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    ageRestriction: PropTypes.number,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default SingleApplication