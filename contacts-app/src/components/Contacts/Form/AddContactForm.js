import React from "react";
import { useState, useEffect } from "react";
import "./forms.css";
export default function AddContactForm({ addContact, contacts }) {
  const initialFormVals = { fullname: "", number: "" };
  const [form, setForm] = useState(initialFormVals);

  //if contacts changed, new contacts added. setForm to initial values
  useEffect(() => {
    setForm(initialFormVals);
  }, [contacts]);
  // when ınput change, assign it to state. when fullname in input change fullname in form changes as well
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault();

    if (form.number === "") {
      alert("cant be empty");
      return false;
    }

    addContact([...contacts, form]);
    console.log(form);
  };
  return (
    <div>
      <br />
      Add your contact here
      <br></br>
      <form onSubmit={onSubmit}>
        <span>
          <input
            className="formField"
            name="fullname"
            placeholder="Fulname"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </span>
        {"    "}
        <span>
          {" "}
          <input
            className="formField"
            name="number"
            placeholder="Number"
            onChange={onChangeInput}
            value={form.number}
          />
        </span>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
