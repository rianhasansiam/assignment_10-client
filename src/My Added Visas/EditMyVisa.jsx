import  { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex'
import swal from 'sweetalert';
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditMyVisa = ({singleVisaData,onSave}) => {

const navigate=useNavigate()

// const id = _id


const {setReloadUpdate}=useContext(contextData)

// const [singleVisaData,SetSingleVisaData]=useState({})

// useEffect(()=>{
//     fetch(`https://assignment-10-server-gray-three.vercel.app/my-added-visas/${id}`)
//     .then(res => res.json())
//     .then(data => SetSingleVisaData(data))
// },[id])

const {_id, imageUrl = '', country = '', visaType = '', processingTime = '', description = '', ageRestriction = '', fee = '', validity = '', applicationMethod = '' } = singleVisaData;






const handleEditSubmit=(e)=>{
     e.preventDefault()
     onSave()
    const form=e.target
    
    const imageUrl=form.countryImage.value
    const country=form.countryName.value
    const visaType=form.visaType.value
    const processingTime=form.processingTime.value
    const description=form.description.value
    const ageRestriction=form.ageRestriction.value
    const fee=form.fee.value
    const validity=form.validity.value
    const applicationMethod=form.applicationMethod.value
   


    const updatedVisaData={imageUrl,country,visaType,processingTime,description,ageRestriction,fee,validity,applicationMethod}
  


    fetch(`https://assignment-10-server-gray-three.vercel.app/my-added-visas/${_id}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(updatedVisaData)
    })
    .then(res => res.json())
    .then(data =>{
        setReloadUpdate(data)


      if(data.modifiedCount>0){
        

        swal({
            title: `${visaType} Added Successfully`,
            text: "Click the 'OK' button to continue adding the visa.",
            icon: "success",
            button: "OK",
          }).then((value) => {
            if (value) {
              navigate('/my-added-visas') 
            }
          });
      }else{
        toast.info("Your data has not been changed...!", {
            position: "top-center"
          });
      }
    } )


   


}







  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg my-12">
    <h1 className="text-2xl font-bold text-center mb-6">Edit Visa Data</h1>




    <form onSubmit={handleEditSubmit}>
      
      {/* Country Image URL */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="countryImage">Country Image URL</label>
        <input
          type="text"
          id="countryImage"
          name="countryImage"
          defaultValue={imageUrl}
          placeholder="Enter image URL (e.g. imgbb link)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>




      {/* Country Name */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="countryName">Country Name</label>
        <input
          type="text"
          id="countryName"
          name="countryName"
         defaultValue={country}
          placeholder="Enter country name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>




      {/* Visa Type Dropdown */}
      <div className="mb-4">
  <label className="block font-semibold mb-1" htmlFor="visaType">Visa Type</label>

 {visaType? <select
    name="visaType"
    defaultValue={visaType ||''}
    required
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
            <option value="" disabled>Select Your Visa Type</option>
            <option value="Official Visa">Official Visa</option>
            <option  value='Student Visa'>Student Visa</option>
            <option  value='Tourist Visa'>Tourist Visa</option>
            <option  value='Working Visa'>Working Visa</option>
  </select>:''}
</div>




      {/* Processing Time */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="processingTime">Processing Time</label>
        <input
          type="text"
          id="processingTime"
          name="processingTime"
          required
         defaultValue={processingTime}
          placeholder="Enter processing time (e.g., 6 months)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>




    

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="description">Description</label>
        <textarea
        
          name="description"
        defaultValue={description}
          placeholder="Enter description"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Age Restriction */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="ageRestriction">Age Restriction</label>
        <input
          type="number"
          
          name="ageRestriction"
        defaultValue={ageRestriction}
          placeholder="Enter age restriction (if any)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Fee */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="fee">Fee</label>
        <input
          type="number"
    
          name="fee"
            defaultValue={fee}
          placeholder="Enter visa fee"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Validity */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="validity">Validity</label>
        <input
          type="text"
          
          name="validity"
         defaultValue={validity}
          placeholder="Enter visa validity (e.g., 6 months)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Application Method */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="applicationMethod">Application Method</label>
        <input
          type="text"
       
          name="applicationMethod"
       defaultValue={applicationMethod}
          placeholder="Enter application method (e.g., online)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



       

      {/* Submit Button */}
      <button 
        
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
       Save
      </button>
    </form>
  </div>
  )
}

EditMyVisa.propTypes = {
  _id: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditMyVisa