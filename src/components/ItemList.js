import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    dispatch(addItem(item)); // action.payload
  };

  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between "
        >
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
              - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          {/* <p >{item.card.info.description}</p> */}

          <span>
            <button
              className="bg-gray-400 p-2 rounded-lg"
              onClick={() => handleAdditem(item)}
            >
              Add +
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
