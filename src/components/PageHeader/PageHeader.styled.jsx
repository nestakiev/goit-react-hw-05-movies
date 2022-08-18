import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
    color: black;
    text-decoration: none;
    
    &.active {
        color: red;
    }
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

export const NavListItem = styled.li`
  margin-right: 20px;
`;

export const NavContainer = styled.nav`
    width: 100%;
    height: 60px;
    border-bottom: 1px grey solid;
    display: flex;
    align-items: center;
`;