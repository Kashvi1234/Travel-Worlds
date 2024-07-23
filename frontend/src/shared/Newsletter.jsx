import React from 'react'
import './Newsletter.css'
import { Container, Row, Col} from 'reactstrap'
import maleTourists from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2> Subscribe now to get useful traveling information. </h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea est ad quisquam, beatae inventore minima libero asperiores rerum tempora placeat dignissimos magnam ipsum amet aut deserunt reprehenderit soluta. Praesentium?</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourists} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Newsletter