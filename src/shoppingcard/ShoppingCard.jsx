import "./Shopping.css";
import logo from "../assets/Logo-Rikkei.png";
import YourCart from "../components/yourcart/YourCart";
import ListCart from "../components/listcart/ListCart";
import { useState } from "react";

function ShoppingCard() {
  const [imgProduct, setImgProduct] = useState([
    {
      id: 1,
      img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_168_1__1.png",
      nameproduct: "Air Pods Pro",
      infoproduct:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo ipsam ducimus quaerat amet. Excepturi tempora fuga vero laboriosam ab, rerum consectetur dolores, accusantium odio sint assumenda, deserunt blanditiis aliquam.",
      usd: "12",
      quantity: 1,
    },
    {
      id: 2,
      img: "",
      nameproduct: "Macbook",
      infoproduct:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo ipsam ducimus quaerat amet. Excepturi tempora fuga vero laboriosam ab, rerum consectetur dolores, accusantium odio sint assumenda, deserunt blanditiis aliquam.",
      usd: "12",
      quantity: 1,
    },
    {
      id: 3,
      img: "",
      nameproduct: "Iphone 14 Promax",
      infoproduct:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo ipsam ducimus quaerat amet. Excepturi tempora fuga vero laboriosam ab, rerum consectetur dolores, accusantium odio sint assumenda, deserunt blanditiis aliquam.",
      usd: "12",
      quantity: 1,
    },
    {
      id: 4,
      img: "",
      nameproduct: "Sam Sung Galaxy S22 Ultra",
      infoproduct:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo ipsam ducimus quaerat amet. Excepturi tempora fuga vero laboriosam ab, rerum consectetur dolores, accusantium odio sint assumenda, deserunt blanditiis aliquam.",
      usd: "12",
      quantity: 1,
    },
  ]);
  return (
    <div className="mainpage">
      <div className="navbar">
        <div className="img-navbar">
          <img className="img-logo" src={logo}></img>
        </div>
        <h2>Project - Shopping Cart</h2>
      </div>
      <hr></hr>
      <div className="content">
        <div className="list-cart">
          <h4 className="title-list">List Products</h4>
          <div>
            <ListCart imgProduct={imgProduct} />
          </div>
        </div>
        <div className="right-table">
          <div className="your-cart">
            <div className="yourcart-items">
              <h4 className="yourcart-title">Your Cart</h4>
              <div className="yourcart-table">
                <table className="table-cart">
                  <tbody className="yourcart-tablelist">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                    </tr>
                    <YourCart />
                  </tbody>
                </table>
                <hr></hr>
                <p className="empty-product">Empty product in your cacrt</p>
                <hr></hr>
                <p className="sum-money">
                  There are 5 items in yours shopping cart{" "}
                  <b className="money">12 USD</b>
                </p>
              </div>
            </div>

            <div className="update-cussess">Updated ivysaur　Dinh</div>
            <div className="delete-cussess"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
