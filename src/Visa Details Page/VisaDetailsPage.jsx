import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { contextData } from '../Contex';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const VisaDetailsPage = () => {
  const { userData, allVisaData } = useContext(contextData);
  const params = useLocation();
  const id = params.pathname.split('/')[2];
  const navigate = useNavigate();

  const singleVisaData = allVisaData.find(eachData => eachData._id === id);
  const { imageUrl, country, visaType, processingTime, fee, validity, applicationMethod, ageRestriction, date, description } = singleVisaData;

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const userEmail = e.target.email.value;
    const userName = `${firstName} ${lastName}`;
    
    const applyVisaInfo = {
      userName,
      userEmail,
      imageUrl,
      country,
      visaType,
      processingTime,
      fee,
      validity,
      applicationMethod,
      ageRestriction,
      date,
      description
    };

    fetch('https://assignment-10-server-gray-three.vercel.app/visa-apply', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(applyVisaInfo)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        
        document.getElementById('my_modal_5').close();
        
        swal({
          title: `${visaType} Added Successfully`,
          text: "Click the 'OK' button to continue.",
          icon: "success",
          button: "OK",
        }).then((value) => {
          if (value) {
            navigate('/my-visa-applications'); 
          }
        });
      }
    });
  };

  return (
    <div className="w-[90vw] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto my-10 p-4 md:p-6 bg-white shadow-lg rounded-md">
      <img 
        src={imageUrl} 
        alt={country} 
        className="w-full h-48 md:h-64 object-cover rounded-md" 
      />
      <h1 className="text-xl md:text-2xl font-bold my-4">{country} - {visaType}</h1>
      
      {/* Visa Details */}
      <p><strong>Processing Time:</strong> {processingTime}</p>
      <p><strong>Fee:</strong> ${fee}</p>
      <p><strong>Validity:</strong> {validity} days</p>
      <p><strong>Application Method:</strong> {applicationMethod}</p>
      <p><strong>Age Restriction:</strong> {ageRestriction}</p>
      <p><strong>Description:</strong> {description}</p>
      
      {/* Apply Button */}
      <div className='flex justify-end'>
        <button 
          onClick={() => document.getElementById('my_modal_5').showModal()} 
          className="mt-6 px-4 md:px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 block">
          Apply for the visa
        </button>
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-lg">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Visa Application Form</h2>
            
            <form onSubmit={handleSubmit} className='relative'>
              
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={userData?.email || ''}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* First Name */}
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder='Enter Your First Name'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder='Enter Your Last Name'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Date Picker */}
              <div className="mb-4">
                <label htmlFor="appliedDate" className="block text-sm font-medium text-gray-700">Applied Date</label>
                <DatePicker
                  readOnly
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Visa Fee */}
              <div className="mb-4">
                <label htmlFor="fee" className="block text-sm font-medium text-gray-700">Visa Fee</label>
                <input
                  type="text"
                  name="fee"
                  defaultValue={`${singleVisaData.fee} $`}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end ">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Apply
                </button>
              </div>
            </form>
                <button
                  onClick={()=>document.getElementById('my_modal_5').close()}
                  className="bottom-[40px] absolute px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                 Cancel
                </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default VisaDetailsPage;
