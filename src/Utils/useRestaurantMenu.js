/******This is the custom Hooks********* */
import { useState, useEffect } from "react";
import { Resturant_Info, Res_Info } from "../Utils/config";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Resturant_Info + resId + Res_Info);

    const json = await data.json();

    //console.log(json);
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
