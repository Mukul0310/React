import { CDN_URL } from "../Utils/config";
import React from "react";

const ResturantCard = (props) =>{
    const {resData} = props;

    const {name,areaName,cuisines,avgRating,costForTwo,cloudinaryImageId} =resData?.info;
    const {deliveryTime} = resData.info?.sla;
    return (
        <div className="res-card">
            <img className="res-image" alt="resturant image" src={ CDN_URL + cloudinaryImageId} />
            <h3 id="res-name"> {name}</h3>
            <h4 id="res-name">{areaName}</h4>
            <div className="res-attri" id="res-name">
                <ul>
                    <li>{cuisines.join(",")}</li>
                    <li>{deliveryTime} mins</li>
                    <li>{avgRating} stars </li>
                    <li>{costForTwo} </li>
                </ul>
            </div>
            
            

        </div>
    )
};

export default ResturantCard;