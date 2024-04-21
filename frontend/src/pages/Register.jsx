import React,{useState, useContext} from "react";
import { Container,Row ,Col, Form ,FormGroup, Button } from "reactstrap";
import {Link,useNavigate} from "react-router-dom";
import '../styles/login.css'
import registerImg from'../assets/images/register.png';
import userIcon from '../assets/images/user.png'; 
import Newsletter from "../shared/Newsletter";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../Utils/config";

const Register = () => {
    const [credentials,setCredentials]=useState({
        username:undefined,
        email:undefined,
        password:undefined,
        phone:undefined,
        city:undefined
      })

    const {dispatch}=useContext(AuthContext);
    const navigate=useNavigate();


    const handleChange=e=>{
        setCredentials(prev=>({
          ...prev,
          [e.target.id]:e.target.value
        }))
      }
    const handleClick= async e=>{
        e.preventDefault();
        console.log(credentials)
        try { 
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(credentials)
            });
            // Check if response status indicates success
            const result = await res.json();
            console.log(res)
            if (res.ok) {
                    dispatch({ type: "REGISTER_SUCCESS" });
                    navigate('/login');
                } else {
                    // Display error message returned from the server
                    alert(result.message);
                }
        } catch(error) {
            // Handle network errors or other exceptions
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please try again later.");
        }
    }
    return <>
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
                                <img src={userIcon} alt=""/>
                            </div>
                            <h2>Register</h2>
                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="text" placeholder="Username" required id="username"  onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="email" placeholder="Email" required id="email"  onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="Password" required id="password"  onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="number" placeholder="Phone" required id="phone"  onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="text" placeholder="City" required id="city"  onChange={handleChange}/>
                                </FormGroup>
                                <Button className="btn secondary__btn auth__btn" onClick={handleClick}>Create Account</Button>
                            </Form>
                            <p>Already have an account? <Link to="/Login">Login</Link></p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
}

export default Register;