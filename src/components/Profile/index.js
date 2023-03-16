import React from "react";
import Row from "../../components/Row";
import "./style.css";

function Profile() {
    return (
    <div>
        <Row>
        <section id="about" class="about">

            <div class="justify-content-center">
              <div class="content">
                <h2>Visual UX Designer & Frontend Developer</h2>
                <div>
                  <p>I'm an experienced Visual UX Designer with <strong>strong Front End Developer skills</strong>. I split my time between Italy, Switzerland, and Cornwall (UK) </p>
                  <p> Open to <strong>predominately remote </strong>freelance, contract or permanent positions</p>
                </div>
                <div>
                  <strong><a class="contact-link" href="tel:00447481844007">0044 7481 844 007</a></strong>
                  <strong><a class="contact-link" href="mailto:fi@fidunnington.com">fi@fidunnington.com</a></strong>
                </div>

              </div>
            </div>

        </section>
        </Row>
    </div>
    );
}

export default Profile;