import styled from "styled-components";

export const List = styled.ul`
  padding-top: ${({ theme }) => theme.spacing(5)};
  width: 100%;

  li {
    margin: ${({ theme }) => `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`};
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }

  button {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;
