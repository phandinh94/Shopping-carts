// import imgAirPods from "../../assets/Logo-Rikkei.png";
import "./ListCart.css"
function ListCart(props) {
  const {imgProduct} = props
  console.log(imgProduct);
  return (<>
  {imgProduct.map((e) => (<>
    <div className="infonation-item">
    <div className="img-product">
      <img className="image-product" src={e.img}></img>
    </div>
    <div className="info-product">
      <b>{e.nameproduct}</b>
      <p>
        {e.infoproduct}
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo
        ipsam ducimus quaerat amet. Excepturi tempora fuga vero laboriosam
        ab, rerum consectetur dolores, accusantium odio sint assumenda,
        deserunt blanditiis aliquam. */}
      </p>
    </div>
    <div className="money-product">
      <p className="quanfity-list">{e.quantity}</p>
      <p className="quanfity-money">{e.usd} USD</p>
    </div>
  </div>
  <hr></hr>
  </>
  ))}
    
  </>
    
    
  );
}

export default ListCart;
