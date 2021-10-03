import React from "react";
import "./WishlistProduct.css";
import { useStateValue } from "../../StateProvider";

function WishlistProduct({ id, image, title, price, rating, hideButton }) {
  const [{ wishlist }, dispatch] = useStateValue();

  const removeFromWishlist = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: id,
    });
  };

  return (
    <div className="wishlistProduct">
      <img className="wishlistProduct__image" src={image} />

      <div className="wishlistProduct__info">
        <p className="wishlistProduct__title">{title}</p>
        <p className="wishlistProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="wishlistProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromWishlist}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default WishlistProduct;
