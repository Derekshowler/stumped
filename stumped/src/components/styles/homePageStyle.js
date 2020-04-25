import styled, { css, isStyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';

//main navigation bar
export const HomePageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 10px;
    background-color: #111111;
`;

export const HomePageFeaturedTitle = styled.h2`
    text-align: center;
    font-weight: 300;
`;

export const HomePageFeaturedContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #ccc;
    text-align: center;

    &:hover {
        box-shadow: 3px 3px 5px #ccc;
        transform: translateY(-2px);
    }
`;

export const HomePageFeaturedList = styled.ul`
    text-align: left;
    margin-bottom: 60px;
`;

export const HomePageFeaturedContent = styled.span`
    text-align: center;
    font-size: 54px;
    margin-top: 30px;
    margin-bottom: 60px;
`;

export const HomePageFeaturedContentImages = styled.img`
    height: 30%;
    width: 30%;
`;