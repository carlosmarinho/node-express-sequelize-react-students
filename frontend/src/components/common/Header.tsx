import styled from "styled-components";
import logo from "assets/images/optim-hire-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

interface TemplateProps {
  template: string;
}

const HeaderContainer = styled.div<TemplateProps>`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: ${(props) =>
    props.template === "default" ? "lightgray" : "darkgray"};
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 20px;
  img {
    height: 35px;
  }
`;

const Menu = styled.nav<TemplateProps>`
  display: flex;
  width: 50%;
  background-color: ${(p) =>
    p.template === "default" ? "#3D82AB" : "#63B03F"};
  color: ${(p) => (p.template === "default" ? "#000" : "#fff")};
  height: 60px;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    margin-top: 21px;
    font-weight: 700;
  }
`;

const MenuItem = styled.li<TemplateProps>`
  margin-right: 10px;
  cursor: pointer;

  :hover {
    color: ${(p) => (p.template === "default" ? "#666" : "#000")};
  }
`;

export default function Header() {
  const [template, setTemplate] = useState("default");

  return (
    <HeaderContainer template={template}>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </Logo>
      <Menu template={template}>
        <ul>
          <MenuItem template={template}>Home</MenuItem>
          <MenuItem template={template}>Students</MenuItem>
          <MenuItem template={template}>Teacher</MenuItem>
        </ul>
        <ul>
          <MenuItem
            template={template}
            onClick={() =>
              setTemplate(template === "default" ? "dark" : "default")
            }
          >
            Mudar Template
          </MenuItem>
        </ul>
      </Menu>
    </HeaderContainer>
  );
}
