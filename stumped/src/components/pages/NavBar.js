import React from 'react';
import {
    Nav,
    NavTitle,
    NavItems,
    NavItem,
    NavItemButton,
    NavItemPrimaryButton
} from '../styles/navbar';

export default function NavbarStyledComponents() {
    return (
        <Nav>
            <NavTitle to="/">Stumped</NavTitle>
            <NavItems>
                <NavItem to="/explore">Explore The Community</NavItem>
                <NavItemButton to = "/login">Login</NavItemButton>
                <NavItemPrimaryButton to = "/register">Sign Up!</NavItemPrimaryButton>
            </NavItems>
        </Nav>
    );
}