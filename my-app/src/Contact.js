import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link to="/films">
        <h1>Contact Us</h1>
      </Link>
      <form>
        <h3>Email</h3>
        <input placeholder="hello@example.com"></input>
        <h3>Subject</h3>
        <input></input>
        <h3>Message</h3>
        <textarea placeholder="Let us know what's on your mind!"></textarea>
      </form>
    </div>
  );
};
