//import { useEffect,useState } from "react";
//import React from 'react'
import { useEffect , useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    //const[resInfo,setresInfo] = useState(null); 
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    // console.log(resId);
    
/*
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
    
    if(resInfo === null) return <Shimmer/>; 
    
    const {name,locality,avgRating,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2] ?.card?.card

    //const {id,defaultPrice,name} = itemCards?.card?.info;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{locality}</h2>
            <p>{avgRating}</p>

            <p>{cuisines.join(", ")}  - {costForTwoMessage}</p>
            <p>Menu :</p>
            <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice /100 || item?.card?.info?.finalPrice /100 || item?.card?.info?.price /100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;