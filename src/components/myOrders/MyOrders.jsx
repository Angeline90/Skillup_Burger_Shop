import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
            <tr key={i}>
            <td>#sdkfsdfdsf</td>
            <td>En cours de traitement</td>
            <td>23</td>
            <td>${2132}</td>
            <td>CB</td>
            <td>
              <Link to={`/order/${"asdsds"}`}>
                <AiOutlineEye />
              </Link>
            </td>
            </tr>
            ))}           
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
