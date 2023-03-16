import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Card from "../../components/Card";
import Grid from "../../components/Grid";
import "./style.css";

function Contact() {
    return (
    <div>
      <Container >
        <Row >
          <Grid>
            <Card >
              <div class="info-item">
                <i class="fa fa-map-marker"></i>
                <div>
                  <h4 class="strong">Location</h4>
                  <p>Cornwall, UK</p>
                </div>
              </div>
            </ Card>

            <Card >
              <div class="info-item">
                <i class="fa fa-envelope"></i>
                <div>
                  <h4 class="strong">Email</h4>
                  <p><a href="mailto:fi@fidunnington.com">fi@fidunnington.com</a></p>
                </div>
              </div>
            </ Card>

            <Card >
              <div class="info-item">
                <i class="fa fa-phone"></i>
                <div>
                  <h4 class="strong">Call/WhatsApp</h4>
                  <p><a href="tel:00447481844007">0044 7481 844 007</a></p>
                </div>
              </div>
            </ Card>
          </Grid>
        </ Row>
      </Container >
    </div>
    );
}

export default Contact;