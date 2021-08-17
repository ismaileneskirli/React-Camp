import React from "react";
import { useState } from "react";
export default function InputExample() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState({ city: "", no: 0 });

  const onChangeSurname = (event) => setSurname(event.target.value);

  const onChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <br />
      <input
        placeholder="lütfen adınızı girin"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <br />
      <input
        placeholder="lütfen soyadınızı girin"
        onChange={onChangeSurname}
      ></input>
      <br />

      <input
        placeholder="sehri girin"
        onChange={onChangeAddress}
        name="city"
      ></input>
      <br />
      <input
        placeholder="adres no girin"
        onChange={onChangeAddress}
        name="no"
      ></input>

      <br />
      {name}
      {surname}
      <br />

      {address.city}
      {address.no}
    </div>
  );
}
