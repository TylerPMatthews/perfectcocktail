import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import GrabPopular from "./GrabPopular";
import GrabLatest from "./GrabLatest";

const StyledDiv = styled.div`

text-align:center;

h2{
  color:red;
}
a{
  background-color:blue;
  color:white;
  font-size:1.3rem;
  text-align:center;
  padding:1.5%;
  border-radius:15px;
}

h3{
  color:red;
  margin-top:5%;
}
`
const Welcome = () => {
  return (
    <StyledDiv>
      <h2>Hello , Welcome to Perfect Cocktail.</h2>
      <Link to="/home">Create Cocktail</Link>

      <GrabLatest />
      <GrabPopular />
    </StyledDiv>
  );
};
export default Welcome;
