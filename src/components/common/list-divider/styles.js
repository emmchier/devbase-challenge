import styled from "styled-components";

const ListDividerContainer = styled.hr`
  width: 100%;
  height: 2px;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.color.disabled};
`;

export default ListDividerContainer;
