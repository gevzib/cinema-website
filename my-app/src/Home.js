import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export default () => {
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data);
    });
  });
  return <h1>Cinema Website Homepage</h1>;
};
