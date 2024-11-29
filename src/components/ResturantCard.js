import { CDN_URL } from "../Utils/config";
import React from "react";

const ResturantCard = (props) =>{
    const {resData} = props;

    const {name,areaName,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData.info?.sla;
    return (
        <div className="bg-blue-50 w-[250px] m-4 p-2 rounded-lg hover:bg-blue-100">
            <img className="rounded-lg h-[300px] " alt="resturant image" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold" id="res-name"> {name}</h3>
            <h4 id="res-name">{areaName}</h4>
            <h4 className="truncate">{cuisines.join(",")}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export default ResturantCard;