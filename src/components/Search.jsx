import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/serached/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 18rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 0.6rem 2rem;
    border: none;
    border-radius: 0.7rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    // left: 10%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
