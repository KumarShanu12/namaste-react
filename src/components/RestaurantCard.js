
import { CON_URL } from "./utilities/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
      resData?.info; // optional chaining
    const { deliveryTime } = resData?.info?.sla;
    // console.log(resData?.restaurants[0].info.name)
    return (
      <div className="m-4 rounded-lg border-2 p-4 w-34  ">
        <div className="">
          <img
            className="w-24"
            src={
              CON_URL +
              cloudinaryImageId
            }
          />
        </div>
        <div className="res-details">
          <h3>{name}</h3>
          {cuisines?.map((val) =>  <h1 className="break-words"> {val.concat(",") }</h1>)} 
          <h4>{avgRating}</h4>
          <h4>Delivery Time{deliveryTime}</h4>
          <h4>{costForTwo}</h4> 
        </div>

      </div>
    );
  };
  export default RestaurantCard