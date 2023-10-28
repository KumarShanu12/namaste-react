
import { CON_URL } from "./utilities/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
      resData?.info; // optional chaining
    const { deliveryTime } = resData?.info?.sla;
    // console.log(resData?.restaurants[0].info.name)
    return (
      <div className="res-card">
        <div className="res-image-container">
          <img
            className="res-logo"
            src={
              CON_URL +
              cloudinaryImageId
            }
          />
        </div>
        <div className="res-details">
          <h3>{name}</h3>
          <h4 className="cuisines">{cuisines?.map((val) => val.concat(","))}</h4>
          <h4>{avgRating}</h4>
          <h4>Delivery Time{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    );
  };
  export default RestaurantCard