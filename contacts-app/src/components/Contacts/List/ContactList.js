import React from "react";
import { useState } from "react";
export default function ContactList({ contacts }) {
  const [filterText, setFilterText] = useState("");

  // contact arrayindeki her eleman bir item(object) -> object.keys(item) : itemin her bir alanını döndürür.(key) ->
  // .some() içindeki kondisyona göre true veya false döner, fullname veya number için item[key] = item.key, True olduğu zaman o objeyi döndür.
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log("filtered", filtered);
  return (
    <div>
      <h2>Your contacts :</h2>
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            {contact.fullname}
            <span className="numbers">{contact.number}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts : {filtered.length}</p>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
    </div>
  );
}
