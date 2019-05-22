import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import { Link } from "react-router-dom";

const { black, white, mediumGrey, darkGrey, seeThrough } = colours;

const HeaderParameter = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${black}
  color: ${white};
  padding: 20px;

  @media (max-width: 768px) {
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
  border-bottom: 1px solid ${seeThrough};

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
            <StyledLink to="/">HOME</StyledLink>
          </Items>
          <Items>
            <StyledLink to="/portfolio">PORTFOLIO</StyledLink>
          </Items>
          <Items>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </Items>
          <Items>
            <StyledLink to="/blog-posts">BLOG POSTS</StyledLink>
          </Items>
        </NavItems>
      )}
    </HeaderParameter>
  );
};

export default Header;
