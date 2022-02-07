import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  max-width: 1300;
  margin: 0px auto 0 auto;
  padding: 0;
  box-sizing: border-box;
  /* 
    @media(min-width: 400px) {
        margin: 157px auto 0 auto;
    } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 20px;
`;
