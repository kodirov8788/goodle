import React from "react";
import "./productItem.css";
import BtnRender from "./BtnRender";
import { useStateValue } from "../../StateProvider";

function ProductItem({ id, title, price, image, rating }) {
  const [{ basket, wishlist }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const addToWishlist = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product_card">
      <img src={image} alt="" />

      <div className="product_box">
        <h2>{title}</h2>
        <span>${price}</span>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>

      <BtnRender addToBasket={addToBasket} addToWishlist={addToWishlist} />
    </div>
  );
}

export default ProductItem;
