import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9;
  padding: 0;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background-color: ${({ theme }) => theme.color.pallete.secondary};

  a {
    button {
      display: inline-flex;
      margin: 0;
      position: absolute;
      height: 100%;
      text-decoration: none !important;
      font-size: ${({ theme }) => theme.font.small.size};
      line-height: ${({ theme }) => theme.font.small.lineHeight};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      color: ${({ theme }) => theme.color.white};

      svg {
        margin-right: ${({ theme }) => theme.spacing(3)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0;
        font-size: ${({ theme }) => theme.font.medium.size};
        line-height: ${({ theme }) => theme.font.medium.lineHeight};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: ${({ theme }) => theme.font.small.size};
    line-height: ${({ theme }) => theme.font.small.lineHeight};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.white};
    margin: ${({ theme }) => theme.spacing(5)} 0;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.medium.size};
      line-height: ${({ theme }) => theme.font.medium.lineHeight};
    }
  }
`;
