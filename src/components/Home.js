import React from "react";
import { Button } from "react-bootstrap";
function Home(props) {
  console.warn("Home", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios13-iphone-xs-home-screen.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <br />
          <span>Price: $1000.00</span>
        </div>
        <div className="item">
          <Button
            className="cart-add-button"
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iphone 11" })
            }
          >
            Add To Cart
          </Button>
          <Button
            className="cart-remove-button"
            onClick={() => props.removeToCartHandler()}
          >
            Remove To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Home;
