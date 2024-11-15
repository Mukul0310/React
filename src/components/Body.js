import ResturantCard from "./ResturantCard";
// import reslist from "../Utils/MOckdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Use State
  const [listofresturent, setListofresturent] = useState([]);
  const [filteredresturant, setfilteredresturant] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  console.log("body rendered");
  //Another way to write Use state
  // const arr = useState(reslist);
  // const [listofresturent, setListofresturent] = arr;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      setListofresturent(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredresturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch {
      console.error("Error Fetching Data:", error);
    }
  };

  //***********conditional rendering************
  // if (listofresturent.length === 0) {
  //     return <Shimmer />;
  // }

  return Array.isArray(listofresturent) && listofresturent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input type="text" className="search-btn" value={searchtext} 
          onChange={(e) =>
            setsearchtext(e.target.value)
          } />
          <button onClick={() => {
            console.log(searchtext)
            const filteredresult = listofresturent.filter((res)=> 
            res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
            setfilteredresturant(filteredresult);
          }}>Search</button>
        </div>
        <button
          className="btn"
          onClick={() => {
            const filteredList = listofresturent.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setfilteredresturant(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filteredresturant.map((resturant) => (
        <Link 
          key={resturant.info.id} 
          to={"/restaurant/" + resturant.info.id }>
             <ResturantCard  resData={resturant} /> 
        </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
