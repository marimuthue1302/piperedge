import React, { useState } from "react";
import ProductTable from "./ProductTable";
function Product() {
  const [shoppingCard, setShoppingCard] = useState([]);
  const [total, setTotal] = useState(0);

  const add = (value, index) => {
    setShoppingCard([...shoppingCard, value]);
    setTotal(
      value.discount == 0
        ? total + value.price
        : total + (value.price * value.discount) / 100
    );
  };

  const remove = (val, i) => {
    const item = "";
    const num = shoppingCard[i].id;
    console.log(item);
    console.log(num);
    setShoppingCard(shoppingCard.filter((item) => item.id !== num));
    setTotal(
      val.discount == 0
        ? total - val.price
        : total - (val.price * val.discount) / 100
    );
  };

  return (
    <>
      <div className="discount">
        <h1>Discount Table</h1>
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Trade A</th>
              <th>Trade B</th>
              <th>Trade C</th>
              <th>Trade D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vendor 1</td>
              <td>12</td>
              <td>12</td>
              <td>N/A</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Vendor 2</td>
              <td>10</td>
              <td>8</td>
              <td>20</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Vendor 3</td>
              <td>N/A</td>
              <td>25</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Vendor 4</td>
              <td>9</td>
              <td>N/A</td>
              <td>16</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Vendor 5</td>
              <td>5</td>
              <td>11</td>
              <td>N/A</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>Product Table</h1>
        <table className="product">
          <thead>
            <tr>
              <td>#</td>
              <td>Product Name</td>
              <td>Price</td>
              <td>Tags</td>
              <td>Vendor</td>
              <td>Card</td>
            </tr>
          </thead>

          {ProductTable.map((value, index) => (
            <tbody>
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.tags[0]}</td>
                <td>{value.vendor}</td>
                <button className="button" onClick={() => add(value, index)}>
                  Add To Card
                </button>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="shopping">
        <h1>Shopping Card</h1>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Product Name</td>
              <td>Org Price</td>
              <td>DiscuntedPercentage</td>
              <td>Discounted Price</td>
              <td>Vendor</td>
              <td>Remove Card</td>
            </tr>
          </thead>

          {shoppingCard.map((val, i) => (
            <tbody>
              <tr>
                <td>{i + 1}</td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.discount}</td>
                <td>
                  {val.discount == 0
                    ? val.price
                    : (val.price * val.discount) / 100}
                </td>
                <td>{val.vendor}</td>
                <button className="button1" onClick={() => remove(val, i)}>
                  Remove Card
                </button>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <h1>Total Price: Rs. {total}</h1>
    </>
  );
}
export default Product;
