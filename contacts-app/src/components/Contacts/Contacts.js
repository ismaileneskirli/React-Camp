import React from "react";
import AddContactForm from "./Form/AddContactForm";
import ContactList from "./List/ContactList";

import { useState } from "react";
import { useEffect } from "react";
import "./contacts.css";
export default function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Enes KIRLI", number: "0506" },
    { fullname: "Faruk ERTEN", number: "0506 555" },
    { fullname: "Mehmet Zahid DOĞAN", number: "0534" },
    { fullname: "Özenç AYBEK", number: "0534" },
    { fullname: "Samet HACIÖMEROĞLU", number: "0534" },
    { fullname: "Şeyma Nur MUTLU", number: "0534" },
    { fullname: "Yaprak KURTLUTEPE", number: "0534" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="contactsContainer">
      <h1>Contacts Page</h1>
      <ContactList contacts={contacts} />
      <AddContactForm
        addContact={
          //passing setContact hook as a parameter
          setContacts
        }
        contacts={contacts}
      />
    </div>
  );
}
