import React from 'react';
import {
    Nav,
    NavTitle,
    NavItems,
    NavItem,
    NavItemButton
} from '../styles/navbar';

export default function NavbarStyledComponents() {
    return (
        <Nav>
            <NavTitle to="/">Stumped</NavTitle>
            <NavItems>
                <NavItem to="/explore">Explore The Community</NavItem>
                <NavItemButton to = "/login">Login</NavItemButton>
                <NavItemButton primary>Sign Up!</NavItemButton>
            </NavItems>
        </Nav>
    );
}