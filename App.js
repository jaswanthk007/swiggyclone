import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import NewComponent from "./NewComponent";
import Error from "./Error";
import Dashboard from "./components/Dashboard";
import Classcomponent from "./Classcomponent"
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import  {Restaurant   } from "./Restaurant";
import Restaurantmenu from "./Restaurantmenu";

const About = lazy(()=>import ("./About"))

const Applayout = ()=>{
    return(
    <>
      <Header />
      <Outlet/>
    </>
   )
   }
  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<NewComponent/>,
      },
      {
        path:"/About",
        element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>,
      },
      {
        path:"/Restaurant",
        element:<Restaurant/>,
      },
      {
        path:"/Restaurantmenu/:resId",
        element:<Restaurantmenu/>,
      },

    ],
    errorElement:<Error/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("test"));
root.render(<RouterProvider router = {appRouter}/>);
/*root.render(<Applayout/>)*/
