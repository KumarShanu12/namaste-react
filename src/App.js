import React, { Suspense , lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import {Outlet ,createBrowserRouter , RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))
// const heading = React.createElement("div",{ id: "div"},React.createElement("h1",{},"i m child "))
// console.log(heading)
//         const root = ReactDOM.createRoot(document.getElementById("root"))
//         root.render(heading)

// const heading = <h1 id="heading">I am h1 tag</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

// const title =(
//         <> <h3>This is title</h3>
//         <h1>sss</h1></>

// )

// const Check = () => <h1>check</h1>

//   const HeadingComp = () => (
//         <div>
//         {title}
//         {Check()}
//         <Check/>
//         <h1>Hello jsx</h1>
//         </div>

//         )









const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path : "/",
    element:<AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <Suspense fallback={<h1>Loading About......</h1>}> <About/> </Suspense> 
    
      },
      {
        path : "/contact",
        element : <ContactUs/>
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu/>
      },
      {
        path : "/grocery",
        element :  <Suspense fallback={<h1>Loading.....</h1>}> <Grocery/> </Suspense>
      },


    ],
    errorElement : <Error/>
  },
   
])
root.render(<RouterProvider router={appRouter}/>);
