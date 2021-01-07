import React from "react";
import { Button } from "react-bootstrap";
function Home(props) {
  console.warn("Header", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="http://www.pngmart.com/files/7/Cart-PNG-Transparent.png" />
      </div>
    </div>
  );
}
export default Home;
