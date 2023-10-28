import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

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
      <Body/>
    </>
  );
};
root.render(<AppLayout />);
