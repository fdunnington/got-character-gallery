import React from "react";
import Container from "../../components/Container";
import Profile from "../../components/Profile";
import Projects from "../Projects";
import "./style.css";

function Homepage() {
    return (
      <Container >
        <Profile />
        <Projects/>

      </Container>
    );
}

export default Homepage;