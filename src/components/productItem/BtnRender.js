import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

function BtnRender({ addToBasket, addToWishlist }) {
  return (
    <div className="row_btn">
      <>
        <button className="btn_buy" onClick={addToBasket}>
          Buy
        </button>
        <button className="btn_wishlist" onClick={addToWishlist}>
          <FiHeart />
        </button>
      </>
    </div>
  );
}

export default BtnRender;
