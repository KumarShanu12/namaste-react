import resObj from "./utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [res, setRes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterRes, setFilterRes] =useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.675276800000006&lng=77.1588096&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //  console.log(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    const Resdata =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRes(Resdata);
    setFilterRes(Resdata)
    // console.log(Resdata)
  };

  // if (res.length === 0  )
  // {
  //    return  <Shimmer/>
  // }

  // console.log(res.filter((item) => item.info.avgRating >4 ))

  return res.length !== 0 ? (
    <div className="body">
      <div className="search">
        <button
          onClick={() => setRes(res.filter((item) => item.info.avgRating > 4))}
        >
          Top Rated Restaurant
        </button>
        <div className="search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
            onClick={() => {
                const filterRes = res.filter((val) => val.info.name.toLowerCase().includes(inputValue.toLowerCase()))
                setFilterRes(filterRes) 

            }
               
               
            }
            className="filter-search"
          >
            search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterRes.map((restaurent) => (
         <Link key={restaurent.info.id} to={`/restaurant/${restaurent.info.id}`} > <RestaurantCard   resData={restaurent} /></Link>  
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
