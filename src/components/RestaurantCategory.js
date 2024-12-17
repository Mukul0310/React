//import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showitems, setshowIndex }) => {
  //const [showitems, setshowitems] = useState(false);
  //   console.log(data);
  return (
    <div>
      <div className="bg-blue-100 w-6/12 mx-auto m-4 p-4 shadow-lg ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={() => {
            //setshowitems(!showitems);
            setshowIndex();
          }}
        >
          <span className="font-bold ">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>{showitems == true ? "⬇" : "⬆"} </span>
        </div>
        {showitems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
