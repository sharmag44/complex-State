import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState([
    {
      fname: "",
      lname: ""
    }
  ]);
  function handleChange(event) {
    const { name, value } = event.target;
    setFullname((preValue) => {
      if (name === "fname")
        return {
          fname: value,
          lname: preValue.lname
        };
      else if (name === "lname")
        return {
          fname: preValue.fname,
          lname: value
        };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          name="fname"
          placeholder="First Name"
          value={fullname.fname}
          onChange={handleChange}
        />
        <input
          name="lname"
          placeholder="Last Name"
          value={fullname.lname}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
