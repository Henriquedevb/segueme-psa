import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  gap: 15px;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    img {
      display: none;
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  max-width: 60%;

  img {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  max-width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FormContainer = styled.form`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  input {
    margin-top: 10px;
    min-width: 280px;
    min-height: 40px;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #10d3fb;
  }

  input:focus {
    outline: none;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  button {
    width: 120px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #3f3d56;
    font-weight: bold;
    color: #fff;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
    border: 1px solid #10d3fb;
  }
`;
