import { NavItem, NavList, NavContainer, NavListItem } from "./PageHeader.styled";

export const PageHeader = () => {
    return (
    <NavContainer>
        <NavList>
            <NavListItem>
                <NavItem to='/'>Home</NavItem>
            </NavListItem>
            <NavListItem>
                <NavItem to='movies'>Movies</NavItem>
            </NavListItem>
        </NavList>
    </NavContainer>)
};