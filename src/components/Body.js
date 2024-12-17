import ResturantCard, { Toplable } from "./ResturantCard";
// import reslist from "../Utils/MOckdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Back from "./Back";

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

      setListofresturent(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredresturant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      //      console.log(json);
    } catch {
      console.error("Error Fetching Data:");
    }
  };

  //***********conditional rendering************
  // if (listofresturent.length === 0) {
  //     return <Shimmer />;
  // }
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return <h1>Apna Internet Connection Check Karo!!! </h1>;

  const TopRated = Toplable(ResturantCard);

  return Array.isArray(listofresturent) && listofresturent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-4 p-4">
      <div className="flex items-center ">
        <div className="search">
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="m-1 px-2 py-1 bg-blue-50 rounded-lg "
            onClick={() => {
              console.log(searchtext);
              const filteredresult = listofresturent.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredresturant(filteredresult);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="m-4 px-2 py-1 bg-blue-50 rounded-lg"
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
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredresturant.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurant/" + restaurants.info.id}
          >
            {restaurants.info.avgRating > 4.5 ? (
              <TopRated resData={restaurants} />
            ) : (
              <ResturantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
