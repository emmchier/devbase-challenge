import styled from "styled-components";

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(10)};
  h5 {
    font-size: ${({ theme }) => theme.font.largeX.size};
    line-height: ${({ theme }) => theme.font.largeX.lineHeight};
    color: ${({ theme }) => theme.color.text.primary};
    text-align: center;
    span {
      display: block;
    }
  }
`;
