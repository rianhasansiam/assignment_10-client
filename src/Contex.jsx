import  { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
export const contextData=createContext()
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './Athentication/Firebase'
import { toast } from 'react-toastify';


const Contex = ({children}) => {


  const [dependency,setDependency]=useState(true)
  const uiupdateHandle=()=>{
    setDependency(!dependency)
  }



  const [visasData,setVisasData]=useState([])
  const [topvisa,setTopvisa]=useState([])
  const [visaSteps,setVisaSteps]=useState([])
  const [allVisaData,setAllVisaData]=useState([])
  const [dp,setDp]=useState(null)
  const [disname,setdisname]=useState(null)
  const [userData,setUserData]=useState(null)
  const [myAddedVisa,setMyAddedVisa]=useState([])
  const [reloadDelte,setReloadDelete]=useState({})
  const [reloadDelteapply,setReloadDeleteapply]=useState({})
  const [reloadUpdate,setReloadUpdate]=useState({})
  const [allVisaApply,setAllVisaApply]=useState([])
  const [dataTheme,setDatatheme]=useState(null)

  

  useEffect(()=>{
   
    //all visa data
    fetch('https://assignment-10-server-gray-three.vercel.app/visas-data')
    .then(res => res.json())
    .then(data => setAllVisaData(data))


//add 6 data in home page
    fetch('https://assignment-10-server-gray-three.vercel.app/visas-data-home')
    .then(res => res.json())
    .then(data =>{
     setVisasData(data)
    //  console.log(data)
    } )

   },[dependency])

 
 
useEffect(()=>{
   //top countries visas data
   fetch('https://assignment-10-server-gray-three.vercel.app/top-countries-visa')
   .then(res => res.json())
   .then(data => setTopvisa(data))

  //application steps
   fetch('https://assignment-10-server-gray-three.vercel.app/visa-application-process')
   .then(res => res.json())
   .then(data => setVisaSteps(data))

},[])
 



//signUp user
const createNewUser = (name, email, password, photoUrl) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        // Update the profile (set the display name and photo URL)
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl
        })
        .then(() => {
          // After successful profile update, set the state
          setUserData(user);  
          setDp(photoUrl);    
          setdisname(name);   
          console.log('Profile updated!');
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
      }
    })
    .catch((error) => {

      if(error=='FirebaseError: Firebase: Error (auth/email-already-in-use).'){
        toast.error("Already Use This Email", {
           position: "top-center"
         })
   
       }else{
   
         toast.error("Register Failed..Retry or Change the email", {
           position: "top-center"
         })
       }
       console.log(error)
     });
};




//LOGIN user
const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserData(user);  // Store the user object
      setDp(user.photoURL);  // Set dp from Firebase user object
      setdisname(user.displayName);  // Set display name
    })
    .catch((error) => {
      
      if(error=='FirebaseError: Firebase: Error (auth/invalid-credential).'){
        toast.error("Wrong Email or Password", {
          position: "top-center"
        })
      
      }else{
        toast.error("Login Failed", {
          position: "top-center"
        })
      }
    });
};









//SIGN IN WITH GOOGLE ACCOUNT

const provider = new GoogleAuthProvider();

const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // After successful Google sign-in, update the state
      setUserData(user);
      setDp(user.photoURL);  // Set Google user dp
      setdisname(user.displayName);  // Set Google user display name
     
    })
    .catch((error) => {
      console.error('Google sign-in error:', error);
    });
};




useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
      setDp(user.photoURL);
      setdisname(user.displayName);
    } else {
      console.log('User is signed out');
      setUserData(null);
    }
  });

  return () => {
    unsubscribe();
  };
}, []);










//SIGNOUT user
const signoutHandle=()=>{
  signOut(auth).then(() => {
   
    setUserData(null)
    // console.log('Signout successful')
    toast.warn("Signout successful", {
      position: "top-center"
    })


    // Sign-out successful.
  }).catch(() => {

    
  });
  
}





    const info={
      visasData,
      topvisa,
      visaSteps,
      allVisaData,
      createNewUser,
      loginUser,
      signoutHandle,
      disname,
      dp,
      userData,
      uiupdateHandle,
      myAddedVisa,
      setMyAddedVisa,
      signGoogle,
      reloadDelte,
      setReloadDelete,
      setAllVisaApply,
      allVisaApply,
      reloadDelteapply,
      setReloadDeleteapply,
      reloadUpdate,
      setReloadUpdate,
      setDatatheme,
      dataTheme
      
  
      

    }
  return (
    <contextData.Provider value={info}>
    {children}
    </contextData.Provider>
  )
}

Contex.propTypes = {
    children: PropTypes.node.isRequired
  }

export default Contex