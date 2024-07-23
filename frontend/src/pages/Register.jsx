import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const [passwordError, setPasswordError] = useState('');

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters, including uppercase, lowercase, number, and special character');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validatePassword(credentials.password)) return;

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);
      dispatch({ type: 'REGISTER_SUCCESS' });
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2> Register </h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                    {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit"> Create Account</Button>
                </Form>
                <p> Already have an account ? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;