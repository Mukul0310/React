import ResturantCard from "./ResturantCard";
import reslist from "../Utils/MOckdata";
import { useState } from "react";



const Body = () =>{

    // Local State Variable - Use State 
    //const [listofresturent, setListofresturent] = useState(reslist);

    //Another way to write Use state
    const arr = useState(reslist);
    const [listofresturent, setListofresturent] = arr;

    return (
        <div className="body">
            <div className="filter-btn">
                <button className="btn" 
                onClick={ () => {
                    const filteredList = listofresturent.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    setListofresturent(filteredList);
                }}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container">
                {listofresturent.map((resturant) => (
                    <ResturantCard key={resturant.info.id} resData ={resturant} />
                ) )}
            </div>
        </div>
    )
};

export default Body;