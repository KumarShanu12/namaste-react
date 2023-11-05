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
    <div>
      <h1>{name}</h1>
      {cuisines?.map((val,i) => (
        <h2 key={i}>{val}</h2>
      ))}
      <p>{costForTwoMessage}</p>
      {itemCards?.map((val,ind) => <p key={ind} style={{margin:"1rem",padding:"0.6rem" , border: "1px solid" , textAlign:'center'}}>{val?.card?.info?.name}</p> )}     
      </div>
  );
};

export default RestaurantMenu;
