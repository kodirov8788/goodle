import React from "react";
import "./wishlistTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getWishlistTotal } from "../../reducer2";
import { useHistory } from "react-router-dom";

function WishlistTotal() {
  const history = useHistory();
  const [{ wishlist }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({wishlist.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getWishlistTotal(wishlist)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button> */}
    </div>
  );
}

export default WishlistTotal;
