import styled from "styled-components";
import { fadeIn } from "../../ui/animations";

export const HomeContent = styled.div`
  -webkit-animation: ${fadeIn} 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${fadeIn} 1s; /* Firefox < 16 */
  -ms-animation: ${fadeIn} 1s; /* Internet Explorer */
  -o-animation: ${fadeIn} 1s; /* Opera < 12.1 */
  animation: ${fadeIn} 1s;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: ${({ theme }) => theme.font.large.size};
      line-height: ${({ theme }) => theme.font.large.lineHeight};
    }

    p {
      color: ${({ theme }) => theme.color.text.primary};
      font-size: ${({ theme }) => theme.font.medium.size};
      line-height: ${({ theme }) => theme.font.medium.lineHeight};
      margin-top: ${({ theme }) => theme.spacing(3)};
    }
  }
`;
