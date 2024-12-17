//import { useEffect,useState } from "react";
//import React from 'react'
//import { useEffect , useState } from 'react';
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/config";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const[resInfo,setresInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);
  //console.log(resInfo);
  // console.log(resId);

  /*  CUSTOM HOOK CREATED 
    useEffect( () => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch (Resturant_Info + resId +Res_Info);

        const json = await data.json();

        console.log(json);
        setresInfo(json.data);
    };
*/

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    locality,
    avgRating,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //const {id,defaultPrice,name} = itemCards?.card?.info;
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const Categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(Categories);

  return (
    <div className="flex-col m-8">
      <div className="flex rounded-lg shadow-lg justify-between bg-blue-50">
        <div className="flex-col  ">
          <h1 className="p-1 font-extrabold">{name}</h1>
          <h2 className="p-1 font-bold">{locality}</h2>
          <p className="p-1">{avgRating} ⭐</p>
          <p className="p-1">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>

        <img
          className="w-40 h-40"
          alt="resturant image"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="text-center">
        <p>
          {Categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showitems={index == showIndex ? true : false}
              setshowIndex={() =>
                setshowIndex(index === showIndex ? null : index)
              }
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
