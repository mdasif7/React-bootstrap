import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './Home.css';
import person1 from '../assests/person-1.jpg';
import person2 from '../assests/person-2.jpg';
import person3 from '../assests/person-3.jpg';
class Home extends Component {
  render() {
    return (
      <div >
        
        <Grid >
            <Jumbotron>
            <h2>Welcome to CodeLife</h2>
            <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
            <Link to="/about">
                <Button bsStyle="primary">Learn More</Button>
            </Link>
            </Jumbotron>
            <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={person1} circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={person2} alt='Person2' circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={person3} alt='Person2' circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}
export default Home;
