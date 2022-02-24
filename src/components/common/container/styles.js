import styled from "styled-components";

export const Content = styled.div`
  margin: auto;
  width: 90%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 85%;
  }
`;
