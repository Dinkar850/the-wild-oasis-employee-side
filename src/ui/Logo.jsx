import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const LogoText = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <LogoText>THE WILLOW PARADISE</LogoText>
    </StyledLogo>
  );
}

export default Logo;
