import React from "react";
import { Link } from "react-router-dom";

import GrabPopular from "./GrabPopular";
import GrabLatest from "./GrabLatest";

const Welcome = () => {
  return (
    <div>
      <h2>Hello! Welcome to Perfect Cocktail.</h2>
      <Link to="/home">Create Cocktail</Link>

      <GrabLatest />
      <GrabPopular />
    </div>
  );
};
export default Welcome;
