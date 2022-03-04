import React, { useState } from "react";
import Data from "./Data";
function App() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    password: "",
    cpassword: "",
  });
  const [allData, setAllData] = useState([]);
  const change = (e) => {
    const val = e.target.value;
    const Name = e.target.name;
    setName((prev) => {
      return {
        ...prev,
        [Name]: val,
      };
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(name);
    var userData = [
      {
        firstName: name.fname,
        lastName: name.lname,
        email: name.email,
        contact: name.contact,
        password: name.password,
        cpassword: name.cpassword,
      },
    ];
    setAllData([...allData, userData]);
    setName({
      fname: "",
      lname: "",
      contact: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };
  return (
    <>
      <div>
        <form onSubmit={submit}>
          <h1>Register</h1>
          First Name :-
          <input
            type="text"
            name="fname"
            value={name.fname}
            onChange={change}
          />
          <br />
          <br />
          Last Name :-
          <input
            type="text"
            name="lname"
            value={name.lname}
            onChange={change}
          />
          <br />
          <br />
          Contact :-
          <input
            type="number"
            name="contact"
            value={name.contact}
            onChange={change}
          />
          <br />
          <br />
          Email :-
          <input
            type="email"
            name="email"
            value={name.email}
            onChange={change}
          />
          <br />
          <br />
          Password :-
          <input
            type="password"
            name="password"
            value={name.password}
            onChange={change}
            autoComplete="off"
          />
          <br />
          <br />
          Confirm Password :-
          <input
            type="password"
            name="cpassword"
            value={name.cpassword}
            onChange={change}
            autoComplete="off"
          />
          <br />
          <br />
          <button>Submit</button>
          <br />
          <br />
        </form>
        <Data allData={allData} />
      </div>
    </>
  );
}
export default App;
