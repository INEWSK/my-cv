import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import avatar from '../assets/avatar.webp';

export const Content = () => {
  return (
    <Container className="cv-content">
      <Row>
        <Col></Col>
        <Col xs={12} sm={12} md={10} lg={8}>
          <Row>
            <Col className="me-2" sm={'auto'}>
              <Image
                src={avatar}
                className="cv-avatar"
                thumbnail
                roundedCircle
                height={180}
                width={180}
              />
            </Col>
            <Col className="mt-4">
              <h1>Kurokawa Yuji</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="cv-block">
                <h2>About Me</h2>
                <hr />
                <p>
                  I am an undergraduate student from Hong Kong Metropolitan
                  University.
                </p>
                <p>
                  Major in Computer Science, under <b>Mobile Application</b> and <b>Website Development</b> Department.
                </p>
                <p>Currently learning AI and machine learning.</p>
              </div>
              <div className="cv-block">
                <h2>Education</h2>
                <hr />
                <Row>
                  <Col xs={8}>
                    <h6>B. S. with Honours in Computer Science</h6>
                    <p>Hong Kong Metropolitan University</p>
                  </Col>
                  <Col className="text-end">2021 - Current</Col>
                </Row>
                <Row>
                  <Col xs={8}>
                    <h6>
                      Higher Diploma in AI and Mobile Applications Development
                    </h6>
                    <p>
                      Hong Kong Institute of Vocational Education (Sha Tin)
                      <br />
                      Average GPA: 3.4
                    </p>
                  </Col>
                  <Col className="text-end">2019 - 2021</Col>
                </Row>
              </div>
              <div className="cv-block">
                <h2>Experience</h2>
                <hr />
                <Row>
                  <Col xs={9}>
                    <h6>
                      Front-End Internship Web Developer at ROBI³ Robotics
                    </h6>
                    <p>
                      Focus on user interface and website services with{' '}
                      <strong>PHP, Angular and WordPress</strong>
                    </p>
                  </Col>
                  <Col className="text-end">09/2021 - 04/2022</Col>
                </Row>
                <Row>
                  <Col xs={9}>
                    <h6>
                      Website Developer Internship at Happy-Retrieve
                      (楽活新中年)
                    </h6>
                    <p>
                      Rebuilding website UI and services{' '}
                      <strong>using Angular and Firebase.</strong>
                    </p>
                  </Col>
                  <Col className="text-end">11/2020 - 04/2021</Col>
                </Row>
              </div>
              <div className="cv-block">
                <h2>Projects</h2>
                <hr />
                <h6>
                  Mobile Application of Leaf Identification - IVE FYP (App
                  Developer)
                </h6>
                <p>
                  Built a full-stack mobile application{' '}
                  <strong>with Flutter</strong> and used AI to allow users use
                  their mobile's camera to identify type of the plant and
                  locate plants are around users
                </p>
                <h6>Gamblers Recovery Journal Check-in Web Application</h6>
                <p>
                  Designed and Built a website <b>with PHP</b> for users record their
                  situation of gamblers recovery
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
