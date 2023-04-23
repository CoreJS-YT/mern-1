import React, { useState, useEffect } from "react";

export default function GetCotizaciones() {
  const API_URL = "http://localhost:4000/api/cotizacion/";
  const [cotizaciones, setCotizaciones] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        setCotizaciones(response);
      });
  }, []);

  const post = (e) => {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        desc: desc,
        price: price,
        year: year,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  const remove = (e) => {
    e.preventDefault();
    fetch(`${API_URL}${e.target.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="content">
      <form className="cotizaciones-form" onSubmit={post}>
        <input
          type="text"
          id="cotizacion_name"
          className="cotizaciones-form__cotizacion-name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          id="cotizacion_price"
          className="cotizaciones-form__cotizacion-price"
          placeholder="Price"
          min="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          id="cotizacion_year"
          className="cotizaciones-form__cotizacion-year"
          placeholder="Year"
          min="1500"
          max="4000"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <textarea
          id="cotizacion_desc"
          className="cotizaciones-form__cotizacion-desc"
          style={{ resize: "none" }}
          value={desc}
          placeholder="Desc"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button
          type="submit"
          id="cotizacion_btn"
          className="cotizaciones-form__cotizacion-btn"
        >Guardar</button>
      </form>
      <div className="cotizaciones">
        {cotizaciones.map((cotizacion) => {
          return (
            <div
              className="cotizaciones__cotizacion"
              id={cotizacion._id}
              key={cotizacion._id}
            >
              <h1>
                Product: <span>{cotizacion.name}</span>
              </h1>
              <p>
                Description: <span>{cotizacion.desc}</span>
              </p>
              <p>
                Price: <span>{cotizacion.price}</span> & Year:{" "}
                <span>{cotizacion.year}</span>
              </p>
              <button
                onClick={remove}
                type="button"
                className="cotizaciones__cotizacion-btn"
                id={cotizacion._id}
              >
                Remove
              </button>
              </div>
          )
        }) }
      </div>
    </div>
  );
};