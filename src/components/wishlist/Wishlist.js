import React from "react";
import "./Wishlist.css";
import { useStateValue } from "../../StateProvider";
import WishlistProduct from "../WishlistProduct/WishlistProduct";
import WishlistTotal from "../wishlistTotal/WishlistTotal";

function Wishlist() {
  const [{ wishlist, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Wishlist</h2>

          {wishlist.map((item) => (
            <WishlistProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <WishlistTotal />
      </div>
    </div>
  );
}

export default Wishlist;
