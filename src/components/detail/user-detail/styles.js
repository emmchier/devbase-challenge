import styled from "styled-components";
import { fadeIn } from "../../../ui/animations";

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  -webkit-animation: ${fadeIn} 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${fadeIn} 1s; /* Firefox < 16 */
  -ms-animation: ${fadeIn} 1s; /* Internet Explorer */
  -o-animation: ${fadeIn} 1s; /* Opera < 12.1 */
  animation: ${fadeIn} 1s;
`;

export const ImageContainer = styled.div`
  width: 75px;
  height: 75px;
  display: inline-block;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.full};
  background-color: ${({ theme }) => theme.color.disabled};

  img {
    height: 100%;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
  }
`;

export const InfoContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing(5)};

  h3 {
    font-size: ${({ theme }) => theme.font.large.size};
    line-height: ${({ theme }) => theme.font.large.lineHeight};
    color: ${({ theme }) => theme.color.text.primary};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.medium.size};
    line-height: ${({ theme }) => theme.font.medium.lineHeight};
  }

  p {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.font.medium.size};
    line-height: ${({ theme }) => theme.font.medium.lineHeight};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.smallX.size};
      line-height: ${({ theme }) => theme.font.smallX.lineHeight};
    }
  }
`;
