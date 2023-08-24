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
              <th>Numéro de commande</th>
              <th>Statut</th>
              <th>Quantité</th>
              <th>Montant</th>
              <th>Mode de paiement</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
            <tr key={i}>
            <td>#sdkfsdfdsf</td>
            <td>En cours de traitement</td>
            <td>23</td>
            <td>{2132}€</td>
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
