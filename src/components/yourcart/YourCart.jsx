import "./YourCart.css";

function YourCart() {
  return (
    <>
      <tr className="table-yourcart">
        <td><b>1</b></td>
        <td>Name</td>
        <td>12 USD</td>
        <td ><b className="tblproduct-quanfityitem">1</b></td>
        <td>12 USD</td>
        <td>
          <button className="btn-update">Update</button>
          <button className="btn-delete">Delete</button>
        </td>
      </tr>
      {/* <hr className="hr-yourcart"></hr> */}
    </>
  );
}

export default YourCart;
