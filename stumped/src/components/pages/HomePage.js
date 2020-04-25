import React from 'react';
import {Link} from "react-router-dom";
import { 
    HomePageContainer,
    HomePageFeaturedTitle,
    HomePageFeaturedContainer,
    HomePageFeaturedContent,
    HomePageFeaturedList,
} from '../styles/homePageStyle';
import {fullMoon} from "../images/full-moon-test.jpg";


export default function HomePage() {
    return (
        <>
        <h1>Stumped</h1>
        <HomePageContainer>
                <HomePageFeaturedContainer>
                        <HomePageFeaturedTitle>

                        </HomePageFeaturedTitle>

                        <HomePageFeaturedContent>

                        </HomePageFeaturedContent>

                </HomePageFeaturedContainer>

                <HomePageFeaturedContainer>
                        <HomePageFeaturedTitle>
                            
                        </HomePageFeaturedTitle>

                        <HomePageFeaturedContent>
                        
                        </HomePageFeaturedContent>

                </HomePageFeaturedContainer>

                <HomePageFeaturedContainer>
                        <HomePageFeaturedTitle>
                            
                        </HomePageFeaturedTitle>

                        <HomePageFeaturedContent>
                            
                        </HomePageFeaturedContent>

                        <HomePageFeaturedList>
                            <p>some details</p>
                        </HomePageFeaturedList>
                </HomePageFeaturedContainer>
        </HomePageContainer>
        </>
    );
}

