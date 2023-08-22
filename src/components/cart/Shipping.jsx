import React, { useState } from "react";
import { State, Country } from "country-state-city";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  return (
    <section className="shipping">
      <main>
        <h1>Détails de la livraison</h1>
        <form>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Entrez votre adresse" />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" placeholder="Entrez votre ville" />
          </div>
          <div>
            <label>Pays</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              {Country.getAllCountries().map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>État/Région</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">État/Région</option>
              {State.getStatesOfCountry(selectedCountry).map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Code postal</label>
            <input type="number" placeholder="Entrez votre code postal" />
          </div>
          <div>
            <label>N° de téléphone</label>
            <input type="number" placeholder="Entrez votre n° de téléphone" />
          </div>
          <Popup
            trigger={
              <Link className="link" to="/myorders">
                Confirmer la commande
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%, -500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Votre commande est en cours de traitement !
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
