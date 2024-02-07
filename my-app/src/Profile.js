import React from "react";
import { useState } from "react";
import "./profile.css";

function Profile({ setUserDetails }) {
  let [inputs, setInputs] = useState({});

  //let [information, setInformation] = useState({});

  function handleToSubmit(e) {
    e.preventDefault();
    setUserDetails((items) => {
      return { ...items, ...inputs };
    });

    setInputs({});
  }

  const handleChange = (e) => {
    return setInputs((item) => {
      return { ...item, [e.target.name]: e.target.value };
    });
  };

  //console.log(information)

  return (
    <body>
      <div
        style={{
          border: "5px solid white",
          padding: `30px`,
          borderRadius: `25px`,
        }}>
        <form onSubmit={handleToSubmit}>
          <img
            id="myImg"
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais"
            style={{
              borderRadius: `500px`,
              border: `5px solid white`,
            }}
          />

          <div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              id="surname"
              name="surname"
              type="text"
              required
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="mycinema@email.com"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              id="conpassword"
              name="conpassword"
              type="password"
              required
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          <button id="save" type="submit" value="Save">
            Save
          </button>
        </form>
      </div>
    </body>
  );
}

export default Profile;
