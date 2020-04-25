import React from "react";
import  { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.js";
import LoginPage from "./components/pages/LoginPage.js";
import ExplorePage from "./components/pages/ExplorePage.js";
import SignUpPage from "./components/pages/SignUpPage.js";
import NavBar from "./components/pages/NavBar";
import { Container } from "./components/styles/container";
import { GlobalStyle } from "./components/styles/globalStyle";




const App = () => (
        
        <Router>
        <GlobalStyle />
        <NavBar/>

        <Container>
            <Route path = "/" exact component={HomePage} />
            <Route path = "/login" exact component={LoginPage} />
            <Route path = "/explore" exact component={ExplorePage} />
            <Route path = "/register" exact component={SignUpPage} />
        </Container>
        
        </Router>
);

export default App;
