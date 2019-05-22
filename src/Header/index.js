import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import { Link } from "react-router-dom";
import { responsiveBreakPoints } from "../utils";

const { mobileBreakPoint } = responsiveBreakPoints;
const { black, white, mediumGrey, darkGrey, transparent } = colours;

const HeaderParameter = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${black}
  color: ${white};
  padding: 20px;

  @media (max-width: ${mobileBreakPoint}px) {
    justify-content: flex-end;
  }
`;

const BurgerMenu = styled.div`
  align-self: flex-start;
  font-size: 30px;
  padding: 5px 10px;

  :hover {
    background-color: ${mediumGrey};
  }

  :active {
    background-color: ${darkGrey};
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 800px;
  padding: 0;
  list-style: none;
`;

const Items = styled.li`
  font-size: 12px;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 1px solid ${transparent};

  :hover {
    border-bottom: 1px solid white;
  }

  :active {
    background-color: ${darkGrey};
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navItemsList = [
    { name: "home", path: "/" },
    { name: "portfolio", path: "/portfolio" },
    { name: "contact", path: "/contact" },
    { name: "blog posts", path: "/blog-posts" }
  ];

  useEffect(() => {
    // listener added to check whether to show BurgerMenu or NavItems
    window.addEventListener("resize", function(event) {
      setScreenWidth(event.target.innerWidth);
    });
  }, []);

  const navItems = navItemsList.map(({ name, path }) => (
    <Items>
      <StyledLink to={path}>{name.toUpperCase()}</StyledLink>
    </Items>
  ));

  return (
    <HeaderParameter>
      {/* Mobile view */}
      {screenWidth < mobileBreakPoint && (
        <BurgerMenu>
          <i class="fas fa-bars" />
        </BurgerMenu>
      )}

      {/* All larger views */}
      {screenWidth >= mobileBreakPoint && <NavItems>{navItems}</NavItems>}
    </HeaderParameter>
  );
};

export default Header;
