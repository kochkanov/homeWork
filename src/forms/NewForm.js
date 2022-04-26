import React, { useState } from "react";

export const NewForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const createName = (e) => {
    setName(e.target.value);
  };
  const createNumber = (e) => {
    setNumber(e.target.value);
  };
  const createEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  
    props.onSaveData({ name, email, number });

  
    setName("");
    setNumber("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={createName} value={name} />
        <input type="number" onChange={createNumber} value={number} />
        <input type="Email" onChange={createEmail} value={email} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
