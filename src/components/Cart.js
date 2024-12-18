import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";
const Cart = () => {
  const cart = useSelector((Store) => Store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center  ">
      <h1 className="m-2 p-4 font-bold text-2xl">Cart</h1>
      <div>
        <button
          className="bg-black text-white rounded-lg m-2 p-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cart} />
      </div>
    </div>
  );
};

export default Cart;
