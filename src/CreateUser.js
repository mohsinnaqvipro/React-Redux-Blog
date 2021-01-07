import React, { useState } from "react";
import { Button } from "react-bootstrap";
function CreateUser() {
  const [name, setName] = useState("Mohsin");
  const [age, setAge] = useState(25);
  const [address, setAddress] = useState("lahore");

  let saveUser = () => {
    let data = { name, age, address };
    console.log(data);
  };

  let eventSetName = (e) => {
    setName(e.target.value);
  };

  let eventSetAge = (e) => {
    setAge(e.target.value);
  };

  let eventSetAddress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div>
      <h1>Hellow i am Create User Component</h1>
      <input
        input="text"
        name="username"
        onChange={eventSetName}
        value={name}
      ></input>
      <br />
      <br />
      <input input="text" name="age" onChange={eventSetAge} value={age}></input>
      <br />
      <br />
      <input
        input="text"
        name="address"
        onChange={eventSetAddress}
        value={address}
      ></input>
      <br />
      <br />
      <Button onClick={saveUser}>Save Button</Button>
    </div>
  );
}

export default CreateUser;

