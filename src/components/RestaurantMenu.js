// import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurentMenuCustomHook from "./utilities/useRestaurentMenuCustomHook";

import { useParams } from "react-router-dom";
// import { MENU_API } from "./utilities/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);


  const resInfo = useRestaurentMenuCustomHook(resId)

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   // console.log("json", json?.data);
  //   setResInfo(json?.data);
  // };

  if (resInfo === null) return <Shimmer />;

  //  console.log('res',resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

        const  {itemCards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        
    //  console.log('p',resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    // console.log('resInfo',itemCards)

  return (
    <div className="w-1/2 flex flex-col items-center   border-gray-300  m-auto">
     <div className="w-full p-12  border-b-2 border-dashed  font-black"><h1>{name}</h1></div> 
      <div className="p-4 w-full font-medium flex justify-start"><p>{costForTwoMessage}</p></div> 
      {cuisines?.map((val,i) => (
        <div className="p-4 flex justify-start"><h2  key={i}>{val}</h2></div> 
      ))}
      {itemCards?.map((val,ind) => <p key={ind}  >{val?.card?.info?.name}</p> )}     
      </div>
  );
};

export default RestaurantMenu;
