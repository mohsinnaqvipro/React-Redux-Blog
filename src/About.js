import React, { useEffect, useState } from "react";

function About(props) {
  useEffect(() => {
    console.warn("Recieved Values from props");
  }, []);
  useEffect(() => {
    console.warn("After Update");
  }, [props.name]);

  let data = "This is About Redux Component";
  return (
    <div>
      <h1>{data}</h1>
      <h2>{props.name}</h2>
    </div>
  );
}

export default About;
