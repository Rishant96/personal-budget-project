import styled from "styled-components/macro";
import {
  fontDark,
  fontLight,
  navbarHeight,
  primary,
  secondary,
} from "../../constants/styling";

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  min-height: ${navbarHeight};

  background-color: ${primary};
`;

export const Brand = styled.h1`
  color: ${fontLight};
  font-family: "Josefin Sans", sans-serif;
  font-size: 32px;
`;

export const LinkBelt = styled.div`
  font-family: "Rubik", sans-serif;
  color: ${fontDark};
  font-size: 18px;
  min-height: ${navbarHeight};
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  padding: 10px 13px;
  border-radius: 18px;
  border: 1px solid transparent;

  &:hover {
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.07);
    cursor: pointer;
    font-weight: 450;
  }
`;
