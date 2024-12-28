import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage.jsx/ErrorPage ";
import AllVisas from "./All Visas/AllVisas";
import AddVisa from "./Add Visa/AddVisa";
import MyAddedVisas from "./My Added Visas/MyAddedVisas";
import MyVisaApplication from "./My Visa Application/MyVisaApplication";
import Home from "./Home/Home";
import LoginPage from "./Athentication/LoginPage";
import RegisterPage from "./Athentication/RegisterPage";
import PrivateRoute from "./Athentication/PrivateRoute";
import VisaDetailsPage from "./Visa Details Page/VisaDetailsPage";
import EditMyVisa from "./My Added Visas/EditMyVisa";

const Root = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/",
          element: <Home/>,
          
        },
        {
          path: "/all-visas",
          element: <AllVisas/>,
          
        },
        {
          path: "/add-visa",
          element: <PrivateRoute><AddVisa/></PrivateRoute>,
          
        },
        {
          path: "/my-added-visas",
          element: <PrivateRoute><MyAddedVisas/></PrivateRoute>,
     
        },
        {
          path: "/my-visa-applications",
          element: <PrivateRoute><MyVisaApplication/></PrivateRoute>,
         
        },
        {
          path: "/login",
          element: <LoginPage/>,
         
        },
        {
          path: "/register",
          element: <RegisterPage/>,
         
        },
        {
          path: "/visa-details/:id",
          element: <VisaDetailsPage/>,
         
        },
        {
          path: "edit-visa/:id",
          element: <EditMyVisa/>,
         
        },
      ]
    },
    
    
  ]);


  export default Root