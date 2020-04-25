import React from "react";
import  { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.js";
import LoginPage from "./components/pages/LoginPage.js";
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
        </Container>
        
        </Router>
);

export default App;
