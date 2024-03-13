import React,{useState,useContext} from "react";
import { Container,Row ,Col, Form ,FormGroup, Button } from "reactstrap";
import {Link, useNavigate} from "react-router-dom";
import '../styles/login.css'
import LoginImg from'../assets/images/login.png';
import userIcon from '../assets/images/user.png'; 
import Newsletter from "../shared/Newsletter";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../Utils/config";

const Login = () => {
    const [credentials,setCredentials]=useState({
        email:undefined,
        password:undefined
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
        dispatch({type:"LOGIN_START"})  
        try{
            const res= await fetch(`${BASE_URL}/auth/login`,{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify(credentials)
            })
            const result=await res.json();
            if(res.ok){
                console.log(result.data)
                dispatch({type:"LOGIN_SUCCESS",payload:result.data})
                navigate('/home')
            }else{
                alert(result.message)
            }
            

        }catch(error){
            dispatch({type:"LOGIN_FAILURE",payload:error.message})

        }

    }
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={LoginImg} alt="" />
                        </div>
                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt=""/>
                            </div>
                            <h2>Login</h2>
                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="email" placeholder="Email" required id="email"  onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="password" required id="password"  onChange={handleChange}/>
                                </FormGroup>
                                <Button className="btn secondary__btn auth__btn" onClick={handleClick}>Login</Button>
                            </Form>
                            <p>Don't have an account? <Link to="/Register"> Create account</Link></p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
}

export default Login;