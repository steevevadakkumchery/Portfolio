import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import { Link } from "react-router-dom";

const { black, white, mediumGrey, darkGrey } = colours;

const HeaderParameter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: ${black};
  color: ${white};
`;

const BurgerMenu = styled.div`
  font-size: 40px;
  border-radius: 5px;
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
  width: 500px;
  list-style: none;
`;

const Items = styled.li`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 20px;

  :hover {
    background-color: ${mediumGrey};
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

  useEffect(() => {
    window.addEventListener("resize", function(event) {
      setScreenWidth(event.target.innerWidth);
    });
  }, []);

  return (
    <HeaderParameter>
      {/* Mobile View */}
      {screenWidth < 768 && (
        <BurgerMenu>
          <i class="fas fa-bars" />
        </BurgerMenu>
      )}

      {/* All Other views */}
      {screenWidth >= 768 && (
        <NavItems>
          <Items>
            <StyledLink to="/">Home</StyledLink>
          </Items>
          <Items>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </Items>
          <Items>
            <StyledLink to="/contact">Contact</StyledLink>
          </Items>
          <Items>
            <StyledLink to="/blog-posts">Blog Posts</StyledLink>
          </Items>
        </NavItems>
      )}
    </HeaderParameter>
  );
};

export default Header;
