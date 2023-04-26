import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cuisine/:type"} element={<Cuisine />} />
      <Route path={"/searched/:search"} element={<Searched />} />
      <Route path={"/recipe/:name"} element={<Recipe />} />
    </Routes>
  );
}

const DetailWrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  li {
    font-size: 1rem;
    line-height: 1.7rem;
  }
  ul {
    margin-top: 1.5rem;
  }
`;

export default Pages;
